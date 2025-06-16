"use client";

import { useEffect, useState } from "react";
import { NewsItem } from "../model";
import NewsForm from "./NewsForm";
import { supabase } from "../../../../lib/supabaseClient";
export default function EditNews({ news }: { news: NewsItem }) {
  const date = news.date.split("T")[0];
  const [text, setText] = useState<any>({ ...news, date });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const newsData = {
      title: text.title,
      content: text.content,
      date: text.date,
      previewtext: text.previewtext,
      category: text.category,
      link: text.link,
    };

    const { error } = await supabase
      .from("news")
      .update(newsData)
      .eq("id", news.id);
    if (error) {
      setMessage(error.message);
      console.error(error);
    }
    setIsLoading(false);
    setMessage("News updated successfully");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-900">
        Edit News
      </h1>
      <NewsForm
        text={text}
        onChangeHandler={onChangeHandler}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
      {message && <p className="text-green-500">{message}</p>}
    </div>
  );
}
