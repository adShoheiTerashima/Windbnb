import cn from 'classnames'
import Badge from '@components/propertyList/Badge'
import StartIcon from '@components/icons/Star'

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
    <div
      className={cn(className, [
        'w-98',
        'flex',
        'flex-col',
        'mb-12.5',
        'cursor-pointer',
        'hover:opacity-75',
      ])}
    >
      <img className="mb-4 w-full h-67.5 object-cover rounded-3xl" src={imageUrl} />
      <div className="flex justify-between h-7.5 mb-3">
        <div className="flex items-center">
          {superhost}
          <div className="text-gray-1 text-sm">{type}</div>
        </div>
        <div className="flex justify-center items-center">
          <StartIcon width="14px" height="14px" className="fill-red mr-1" />
          <p className="text-sm text-gray-3">{rating}</p>
        </div>
      </div>
      <p className="font-semibold">{title}</p>
    </div>
  )
}
export default ListItem
