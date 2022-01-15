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
  const superhost = isSuperHost ? (
    <div className="mr-2.5">
      <Badge text="SUPER HOST" />
    </div>
  ) : (
    ''
  )

  return (
    <div className={cn(className, ['w-98', 'flex', 'flex-col', 'mb-12.5'])}>
      <img className="mb-4 w-full h-67.5 object-cover rounded-3xl" src={imageUrl} />
      <div className="flex justify-between">
        <div className="flex items-center">
          {superhost}
          <div className="text-gray-1 text-sm">{type}</div>
        </div>
        <div>☆ {rating}</div>
      </div>
      <p>{title}</p>
    </div>
  )
}
export default ListItem
