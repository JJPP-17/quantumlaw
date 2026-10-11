"use server";


import { requireAdmin } from "../../lib/supabaseServer";
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
    return { data: data ?? [] };
  } catch (error) {
    return { data: [], error: "Failed to fetch contents" };
  }
}

export async function createContent(formData: FormData) {
  try {
    const supabase = await requireAdmin();

    const { error } = await supabase.from("content").insert({
      key: requiredText(formData, "new_key", 160),
      value: requiredText(formData, "value", 50000),
      description: String(formData.get("description") || "").slice(0, 2000),
    });

    if (error) throw error;

    revalidatePath("/", "layout");
    return { message: "Content created successfully" };
  } catch (error) {
    return { error: "Failed to create content" };
  }
}

export async function updateContent(id: number, formData: FormData) {
  try {
    const supabase = await requireAdmin();

    const { error } = await supabase
      .from("content")
      .update({
        key: requiredText(formData, "key", 160),
        value: requiredText(formData, "value", 50000),
        description: String(formData.get("description") || "").slice(0, 2000),
      })
      .eq("id", id).select("id").single();

    if (error) throw error;

    revalidatePath("/", "layout");
    return { message: "Content updated successfully" };
  } catch (error) {
    return { error: "Failed to update content" };
  }
}

function requiredText(form: FormData, key: string, max: number) {
 const value = form.get(key);
 if (typeof value !== "string" || !value.trim() || value.length > max) throw new Error("Invalid content");
 return value.trim();
}
