# Admin backend deployment checklist

The application now verifies Supabase users on the server and requires
`app_metadata.role = "admin"` for `/admin` and content/team server mutations.
The browser uses cookie-based Supabase sessions. Existing users should sign in again.

## Required hosted database configuration (not applied automatically)

1. Review and run `supabase/migrations/20261011_admin_permissions.sql` in the
   Supabase SQL editor. It assumes content, ourteam, news and careers contain
   public website content only. Do not store private client information in these tables.
   It enables RLS and constrains existing permissive write policies with restrictive
   admin-only policies. It also protects writes to the quantimages storage bucket.
2. Grant the intended existing account an administrator role using trusted SQL:

   ```sql
   update auth.users
   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
       || '{"role":"admin"}'::jsonb
   where email = 'REPLACE_WITH_YOUR_ADMIN_EMAIL';
   ```

   Sign out and back in afterwards to refresh the role in the session. Never use
   user_metadata for administrator authorization. Never put a service-role key
   in NEXT_PUBLIC variables or browser code.
3. Test a non-admin account cannot insert, update or delete via Supabase directly.
   Test an administrator can save one reversible content change, refresh the public
   page to verify persistence, then restore the original value. Repeat for media uploads.
4. Disable public signup if the project has no public account-registration feature.
   Configure password recovery and the production site URL in Supabase Auth.

## Verification limits

No service-role key, database password or administrator session was available during
this change. Hosted policies and an authenticated save/upload round trip have not
been verified. The migration must be applied before the backend is considered ready
for production, since browser-based admin editors depend on database RLS.
