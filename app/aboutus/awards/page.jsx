
import { getContents } from '../../actions/content'
import { getValue } from '../../utils/content'
import AwardsClient from './awardsClient'

export default async function AwardsPage() {
  const { data: contents } = await getContents()
  const awardsDescription = getValue('awardsPageDescription', contents)
  
  return <AwardsClient awardsDescription={awardsDescription} />
}