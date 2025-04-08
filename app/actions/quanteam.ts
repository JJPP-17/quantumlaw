"use server";


import { revalidatePath } from "next/cache";
import { supabase } from "../../lib/supabaseClient";

export interface QuantTeam {
    id?: number;
    name: string;
    position: string;
    description: string;
    expertise: string;
    firmnumber: string;
    mobilenumber: string;
    email: string;
    filename: string;
    created_at: string;
    membername: string;
}
  
export async function getQuantTeam() {
    try {
      const { data, error } = await supabase
        .from("ourteam")
        .select("*")
        .order("id", { ascending: true });
  
      if (error) throw error;
      return { data };
    } catch (error) {
      return { error: "Failed to fetch contents" };
    }
}
  
export async function createQuantTeam(formData: FormData) {
    try {
      const { error } = await supabase.from("ourteam").insert({
        name: formData.get("name"),
        position: formData.get("position"),
        description: formData.get("description"),
        expertise: formData.get("expertise"),
        firmnumber: formData.get("firmnumber"),
        mobilenumber: formData.get("mobilenumber"),
        email: formData.get("email"),
      });
  
      if (error) throw error;
  
      revalidatePath("/admin");
      return { message: "Quant Team created successfully" };
    } catch (error) {
      console.log(error);
      return { error: "Failed to create Quant Team" };
      
    }
}
  
export async function updateQuantTeam(id: number, formData: FormData) {
    try {
      const { error } = await supabase
        .from("ourteam")
        .update({
          name: formData.get("name"),
          position: formData.get("position"),
          description: formData.get("description"),
          expertise: formData.get("expertise"),
          firmnumber: formData.get("firmnumber"),
          mobilenumber: formData.get("mobilenumber"),
          email: formData.get("email"),
        })
        .eq("id", id);
  
      if (error) throw error;
  
      revalidatePath("/admin");
      return { message: "Quant Team updated successfully" };
    } catch (error) {
      return { error: "Failed to update Quant Team" };
    }
}
  
  