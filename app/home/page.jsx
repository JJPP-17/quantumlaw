import { getContents } from '../actions/content';
import Homie from './homie';

export default async function HomePage() {
  const { data: initialContents = [] } = await getContents();
  return (
    <div>
      <Homie contents={initialContents} />
    </div>
  )
}