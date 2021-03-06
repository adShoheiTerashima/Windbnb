import cn from 'classnames'
import Badge from '@components/propertyList/Badge'
import StartIcon from '@components/icons/Star'
import { SearchResult } from '@lib/api/algolia'

type Props = Partial<SearchResult> & {
  className?: string
}

const ListItem = ({ photo, superHost, title, type, rating, className }: Props) => {
  const superhost = superHost ? (
    <div className="mr-2.5">
      <Badge text="SUPER HOST" />
    </div>
  ) : (
    ''
  )

  return (
    <div
      className={cn(className, [
        'w-87.5',
        'lg:w-98',
        'flex',
        'flex-col',
        'mb-12.5',
        'cursor-pointer',
        'hover:opacity-75',
      ])}
    >
      <img className="mb-4 h-67.5 w-full rounded-3xl object-cover" src={photo} />
      <div className="mb-3 flex h-7.5 justify-between">
        <div className="flex items-center">
          {superhost}
          <div className="text-sm text-gray-828282">{type}</div>
        </div>
        <div className="flex items-center justify-center">
          <StartIcon width="14px" height="14px" className="mr-1 fill-red-EB5757" />
          <p className="text-sm text-gray-4F4F4F">{rating}</p>
        </div>
      </div>
      <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-semibold">{title}</p>
    </div>
  )
}
export default ListItem
