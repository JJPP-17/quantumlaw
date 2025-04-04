"use client";

import { useEffect, useState } from "react";
import {
  createContent,
  updateContent,
  getContents,
  Content,
} from "../actions/content";

export default function ContentManager() {
  const [contents, setContents] = useState<Content[]>([]);
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchContents();
  }, []);

  async function fetchContents() {
    const result = await getContents();
    if (result.data) {
      setContents(result.data);
    }
  }

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    try {
      const result = selectedContent
        ? await updateContent(selectedContent.id!, formData)
        : await createContent(formData);

      if (result.error) {
        setMessage(result.error);
      } else {
        setMessage(result.message!);
        resetForm();
        fetchContents();
      }
    } catch (error) {
      setMessage("An error occurred");
    }
    setIsLoading(false);
  }

  function resetForm() {
    setSelectedContent(null);
    const form = document.getElementById("contentForm") as HTMLFormElement;
    form?.reset();
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Update Content</h1>

      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            message.includes("error")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {message}
        </div>
      )}

      <form id="contentForm" action={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-gray-900">Key</label>
          <div className="flex gap-2">
            <select
              name="key"
              value={selectedContent?.key || ""}
              onChange={(e) => {
                if (e.target.value === "new") {
                  setSelectedContent(null);
                } else {
                  const content = contents.find(
                    (c) => c.key === e.target.value
                  );
                  setSelectedContent(content || null);
                }
              }}
              className="w-full p-2 border rounded text-gray-900"
            >
              <option value="">Select a key</option>
              {contents.map((content) => (
                <option key={content.id} value={content.key}>
                  {content.key} - {content.value}
                </option>
              ))}
              <option value="new">+ Create new key</option>
            </select>
            {!selectedContent && (
              <input
                type="text"
                name="new_key"
                placeholder="Enter new key"
                className="w-full p-2 border rounded text-gray-900"
                required
              />
            )}
          </div>
        </div>
        <div>
          <label className="block mb-2 text-gray-900">Value</label>
          <input
            type="text"
            name="value"
            defaultValue={selectedContent?.value}
            className="w-full p-2 border rounded text-gray-900"
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-900">Description</label>
          <input
            type="text"
            name="description"
            defaultValue={selectedContent?.description}
            className="w-full p-2 border rounded text-gray-900"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400"
          >
            {isLoading ? "Saving..." : selectedContent ? "Update" : "Create"}
          </button>
          {selectedContent && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
