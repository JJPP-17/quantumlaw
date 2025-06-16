"use client";
import { useRouter } from "next/navigation";
import { supabase } from "../../../../lib/supabaseClient";
import { NewsItem } from "../model";

export default function NewsTable({ news }: { news: NewsItem[] }) {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    const result = confirm("Are you sure you want to delete this news?");
    if (!result) return;

    const { error } = await supabase.from("news").delete().eq("id", id);
    if (error) {
      console.error(error);
    }
    router.refresh();
  };

  const handleEdit = (id: string) => {
    router.push(`/admin/news/${id}`);
  };

  return (
    <div className="w-full overflow-x-auto bg-white rounded-lg shadow">
  <table className="w-full table-fixed divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="w-[120px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
        <th className="w-[100px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
        <th className="w-[140px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preview</th>
        <th className="w-[180px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content</th>
        <th className="w-[160px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Link</th>
        <th className="w-[100px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
        <th className="w-[120px] px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 text-sm text-gray-900">
      {news.map((item) => (
        <tr key={item.id} className="align-top">
          <td className="px-2 py-3 break-words">{item.title}</td>
          <td className="px-2 py-3 break-words">{item.category}</td>
          <td className="px-2 py-3 break-words">{item.previewtext}</td>
          <td className="px-2 py-3 break-words">{item.content}</td>
          <td className="px-2 py-3 break-words text-blue-600">
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800"
              >
                {new URL(item.link).hostname}
              </a>
            ) : (
              "-"
            )}
          </td>
          <td className="px-2 py-3">{item.date}</td>
          <td className="px-2 py-3 space-x-1">
            <button
              className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs"
              onClick={() => handleEdit(item.id)}
            >
              Edit
            </button>
            <button
              className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-xs"
              onClick={() => handleDelete(item.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}
