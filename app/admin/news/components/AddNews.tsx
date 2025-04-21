"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabaseClient";
import NewsForm from "./NewsForm";

export default function AddNews() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [text, setText] = useState<any>({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    tags: "",
    category: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const newsData = {
        title: text.title,
        content: text.content,
        date: text.date,
        tags: text.tags.split(",").map((tag) => tag.trim()),
      };

      const { error: insertError } = await supabase
        .from("news")
        .insert(newsData);

      if (insertError) throw insertError;

      setMessage("News saved successfully!");
      resetForm();
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setText({
      title: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      tags: "",
      category: "",
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">Add News</h1>

      {message && (
        <div
          className={`p-4 mb-4 rounded ${
            message.includes("Error")
              ? "bg-red-200 text-red-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {message}
        </div>
      )}

      <NewsForm
        text={text}
        onChangeHandler={onChangeHandler}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
