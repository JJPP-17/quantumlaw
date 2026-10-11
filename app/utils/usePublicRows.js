"use client";
import { useCallback, useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
export default function usePublicRows(table, order = "created_at", ascending = false, openOnly = false) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const reload = useCallback(async () => {
    setLoading(true); setError(false);
    try {
      let query = supabase.from(table).select("*").order(order, { ascending });
      if (openOnly) query = query.eq("status", "Open");
      const { data, error: queryError } = await query;
      if (queryError) throw queryError;
      setRows(data || []);
    } catch { setError(true); }
    finally { setLoading(false); }
  }, [table, order, ascending, openOnly]);
  useEffect(() => { reload(); }, [reload]);
  return { rows, loading, error, reload };
}
