import { Content } from "../actions/content";

export function getValue(key: string, contents: Content[] | undefined | null) {
  if (!contents) return null;
  const content = contents.find((content) => content.key === key);
 
  return content?.value;
}
