import { useState } from 'react'
import { CountButton, btnType } from '@components/searchMenu/CountButton'

const GuestCount = () => {
  const [adultsCount, setAdultsCount] = useState(0)
  const [childrenCount, setChildrenCount] = useState(0)
  const clickAdultsCount = (count: number) => {
    const countResult = adultsCount + count > 0 ? adultsCount + count : 0
    setAdultsCount(countResult)
  }
  const clickChildrenCount = (count: number) => {
    const countResult = childrenCount + count > 0 ? childrenCount + count : 0
    setChildrenCount(countResult)
  }
  return (
    <ul>
      <li className="text-sm font-Mulish">
        <p className="font-bold">Adults</p>
        <p className="text-gray-4 mt-1">Ages 12 or above</p>
        <div className="flex justify-start items-center mt-3">
          <CountButton
            type={btnType.MINUS}
            className="mr-4"
            click={() => {
              clickAdultsCount(-1)
            }}
          />
          <p className="mr-4 text-sm">{adultsCount}</p>
          <CountButton
            type={btnType.PLUS}
            click={() => {
              clickAdultsCount(1)
            }}
          />
        </div>
      </li>
      <li className="text-sm font-Mulish mt-11">
        <p className="font-bold">Children</p>
        <p className="text-gray-4 mt-1">Ages 2-12</p>
        <div className="flex justify-start items-center mt-3">
          <CountButton
            type={btnType.MINUS}
            className="mr-4"
            click={() => {
              clickChildrenCount(-1)
            }}
          />
          <p className="mr-4 text-sm">{childrenCount}</p>
          <CountButton
            type={btnType.PLUS}
            click={() => {
              clickChildrenCount(1)
            }}
          />
        </div>
      </li>
    </ul>
  )
}
export default GuestCount
