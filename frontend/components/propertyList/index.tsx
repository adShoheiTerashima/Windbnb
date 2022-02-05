import ListTitle from '@components/propertyList/ListTitle'
import ListItem from '@components/propertyList/ListItem'
import { SearchResult } from '@lib/api/algolia'

type Props = {
  list: SearchResult[]
}
const PropertyList = ({ list }: Props) => {
  const article = list.map(
    ({ superHost, title, rating, type, photo }: SearchResult, index: number) => (
      <ListItem
        photo={photo}
        superHost={superHost}
        title={title}
        rating={rating}
        type={type}
        key={index}
      />
    ),
  )
  return (
    <section>
      <ListTitle />
      <article className="grid w-full grid-cols-propertyList gap-y-0 gap-x-6">{article}</article>
    </section>
  )
}

export default PropertyList
