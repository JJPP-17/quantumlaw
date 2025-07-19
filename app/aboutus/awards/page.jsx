<<<<<<< HEAD

=======
>>>>>>> f59dd2f (update Analytics)
import { getContents } from '../../actions/content'
import { getValue } from '../../utils/content'
import AwardsClient from './awardsClient'

export const generateMetadata = () => {
  return {
    title: 'Our Awards - Quantum Law Group',
    description: 'Learn more about our Award and recognitions at Quantum Law Group',
  }
}

export default async function AwardsPage() {
  const { data: contents } = await getContents()
  const awardsDescription = getValue('awardsPageDescription', contents)
  
  return <AwardsClient awardsDescription={awardsDescription} />
}