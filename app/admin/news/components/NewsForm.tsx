import { NewsItem } from "../model";

interface NewsFormProps {
  text: NewsItem;
  onChangeHandler: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export default function NewsForm({
  text,
  onChangeHandler,
  handleSubmit,
  isLoading,
}: NewsFormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-gray-900 font-medium">Date</label>
          <input
            type="date"
            name="date"
            value={text.date}
            onChange={onChangeHandler}
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900 font-medium">Title</label>
          <input
            type="text"
            name="title"
            value={text.title}
            onChange={onChangeHandler}
            placeholder="Enter news title"
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900 font-medium">
            Category
          </label>
          <input
            type="text"
            name="category"
            value={text.category}
            onChange={onChangeHandler}
            placeholder="Enter news category"
            className="w-full p-2 border rounded text-gray-900"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900 font-medium">
            Content
          </label>
          <textarea
            name="content"
            value={text.content}
            onChange={onChangeHandler}
            placeholder="Enter news content"
            className="w-full p-2 border rounded text-gray-900 h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-gray-900 font-medium">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            name="tags"
            value={text.tags}
            onChange={onChangeHandler}
            placeholder="Enter tags (e.g., legal, update, announcement)"
            className="w-full p-2 border rounded text-gray-900"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          disabled={isLoading}
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
