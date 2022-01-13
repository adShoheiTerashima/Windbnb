import cn from 'classnames'
import Badge from '@components/propertyList/Badge'

type Props = {
  imageUrl?: string
  isSuperHost: boolean
  title: string
  type: string
  rating: number
  className?: string
}

const ListItem = ({ imageUrl, isSuperHost, title, type, rating, className }: Props) => {
  const superhost = isSuperHost ? <Badge text="SUPER HOST" /> : ''
  return (
    <div className={cn(className, ['w-113', 'flex', 'flex-col'])}>
      <img className="mb-15px w-full h-77 object-cover rounded-listImage" src={imageUrl} />
      <div className="flex">
        {superhost}
        <div>{type}</div>
        <div>☆ {rating}</div>
      </div>
      <p>{title}</p>
    </div>
  )
}
export default ListItem
