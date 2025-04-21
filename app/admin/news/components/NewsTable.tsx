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
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Content
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tags
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {news.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-[200px] overflow-hidden text-ellipsis">
                {item.content}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.date}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.tags.join(", ")}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex gap-2">
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
                  onClick={() => handleEdit(item.id)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
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
