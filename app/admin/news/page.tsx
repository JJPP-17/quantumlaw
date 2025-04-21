import Link from "next/link";
import NewsTable from "./components/NewsTable";
import { supabase } from "../../../lib/supabaseClient";

export default async function NewsPage() {
  const { data: news, error } = await supabase.from("news").select("*");

  if (error) {
    console.error(error);
  }

  return (
    <div className="p-6">
      <Link
        href="/admin/news/add"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm mb-4"
      >
        Add News
      </Link>
      <div className="mt-4">
        <NewsTable news={news} />
      </div>
    </div>
  );
}
