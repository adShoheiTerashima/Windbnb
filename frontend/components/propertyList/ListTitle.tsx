import { useContext } from 'react'
import { SearchConditionContext } from '@lib/hooks/useSearchCondition'

const ListTitle = () => {
  const searchConditionCtx = useContext(SearchConditionContext)
  const title = searchConditionCtx.country
    ? `Stays in ${searchConditionCtx.country}`
    : 'Stays in various countries'
  return (
    <div className="flex items-center justify-between py-7.5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">12+ stays</p>
    </div>
  )
}

export default ListTitle
