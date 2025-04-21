import { supabase } from "../../../../lib/supabaseClient";
import EditNews from "../components/EditNews";
export default async function NewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: news, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  return (
    <div>
      <EditNews news={news} />
    </div>
  );
}
