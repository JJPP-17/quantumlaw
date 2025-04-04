import AdminDashboard from './dashboard'
import { getContents } from '../actions/content';
export default async function Admin() {
  const { data: initialContents = [] } = await getContents();

  
  return (
    <AdminDashboard contents={initialContents} />
  );
}