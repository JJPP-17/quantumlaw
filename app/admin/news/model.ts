export interface NewsItem {
  id?: string;
  title: string;
  content: string;
  date: string;
  tags: string[];
  created_at?: string;
  category: string;
}
