import { getContents } from "../actions/content";
import Homie from "./homie";
export const dynamic = "force-dynamic";
export default async function Home() {
  const { data: contents = [] } = await getContents();
  return <Homie contents={contents} />;
}
