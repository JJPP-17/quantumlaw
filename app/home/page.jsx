'use server'
import { getContents } from '../actions/content';
import Homie from './homie';

export default async function Home() {
  const { data: contents = [] } = await getContents();
  
  return <Homie contents={contents} />;
}