import ListTitle from '@components/propertyList/ListTitle'
import ListItem from '@components/propertyList/ListItem'
/*
stays.json
Dummy data for component creation
This data will be deleted when the API is implemented or when the data is connected.
*/
import stays from './stays.json'

type Stay = {
  city: string
  country: string
  superHost: boolean
  title: string
  rating: number
  maxGuests: number
  type: string
  beds?: number
  photo: string
}
const PropertyList = () => {
  const article = (stays as Stay[]).map(
    ({ superHost, title, rating, type, photo }: Stay, index: number) => (
      <ListItem
        imageUrl={photo}
        isSuperHost={superHost}
        title={title}
        rating={rating}
        type={type}
        key={index}
      />
    ),
  )
  return (
    <section>
      <ListTitle country="dummy" />
      <article className="grid gap-4 grid-cols-propertyList w-full">{article}</article>
    </section>
  )
}

export default PropertyList
