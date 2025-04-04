import { Content } from "../actions/content";

export function getContent(key: string, contents: Content[]) {
  const content = contents.find((content) => content.key === key);
  return content?.value;
}
