-- Run once in the project's Supabase SQL editor. Review existing policies first.
-- Restrictive write policies also constrain any older permissive policies.
begin;
create or replace function public.is_website_admin() returns boolean
language sql stable security invoker set search_path = ''
as $$ select coalesce(auth.jwt() -> 'app_metadata' ->> 'role', '') = 'admin' $$;

do $$
declare target text;
begin
  foreach target in array array['content','ourteam','news','careers'] loop
    execute format('alter table public.%I enable row level security', target);
    execute format('create policy website_public_read on public.%I for select to anon, authenticated using (true)', target);
    execute format('create policy website_admin_access on public.%I for all to authenticated using (public.is_website_admin()) with check (public.is_website_admin())', target);
    execute format('create policy website_insert_guard on public.%I as restrictive for insert to public with check (public.is_website_admin())', target);
    execute format('create policy website_update_guard on public.%I as restrictive for update to public using (public.is_website_admin()) with check (public.is_website_admin())', target);
    execute format('create policy website_delete_guard on public.%I as restrictive for delete to public using (public.is_website_admin())', target);
  end loop;
end $$;
create policy website_media_admin on storage.objects for all to authenticated
using (bucket_id = 'quantimages' and public.is_website_admin())
with check (bucket_id = 'quantimages' and public.is_website_admin());
create policy website_media_insert_guard on storage.objects as restrictive for insert to public
with check (bucket_id <> 'quantimages' or public.is_website_admin());
create policy website_media_update_guard on storage.objects as restrictive for update to public
using (bucket_id <> 'quantimages' or public.is_website_admin())
with check (bucket_id <> 'quantimages' or public.is_website_admin());
create policy website_media_delete_guard on storage.objects as restrictive for delete to public
using (bucket_id <> 'quantimages' or public.is_website_admin());
commit;
