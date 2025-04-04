"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { supabase } from "../../lib/supabaseClient";

export interface Content {
  id?: number;
  key: string;
  value: string;
  description: string;
  created_at?: string;
}

export async function getContents() {
  try {
    const { data, error } = await supabase
      .from("content")
      .select("*")
      .order("key", { ascending: true });

    if (error) throw error;
    return { data };
  } catch (error) {
    return { error: "Failed to fetch contents" };
  }
}

export async function createContent(formData: FormData) {
  try {
    const { error } = await supabase.from("content").insert({
      key: formData.get("new_key"),
      value: formData.get("value"),
      description: formData.get("description"),
    });

    if (error) throw error;

    revalidatePath("/admin");
    return { message: "Content created successfully" };
  } catch (error) {
    return { error: "Failed to create content" };
  }
}

export async function updateContent(id: number, formData: FormData) {
  try {
    const { error } = await supabase
      .from("content")
      .update({
        key: formData.get("key"),
        value: formData.get("value"),
        description: formData.get("description"),
      })
      .eq("id", id);

    if (error) throw error;

    revalidatePath("/admin");
    return { message: "Content updated successfully" };
  } catch (error) {
    return { error: "Failed to update content" };
  }
}
