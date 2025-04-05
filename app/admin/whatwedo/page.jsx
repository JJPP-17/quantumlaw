import { getContents } from '../../actions/content';
import AdminWhatWeDoPage from './adminWhatwedo';

export default async function WhatWeDoPage() {
  const { data: contents = [] } = await getContents();

  return (
    <AdminWhatWeDoPage contents={contents}/>
  );
}
