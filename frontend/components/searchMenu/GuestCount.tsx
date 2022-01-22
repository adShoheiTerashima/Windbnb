import { useState } from 'react'
import { CountButton, btnType } from '@components/searchMenu/CountButton'

type Props = {
  countAdults: number
  countChildren: number
  inputAdults: (num: number) => void
  inputChildren: (num: number) => void
}

const GuestCount = ({ countAdults, countChildren, inputAdults, inputChildren }: Props) => {
  const clickAdultsCount = (count: number) => {
    const countResult = countAdults + count > 0 ? countAdults + count : 0
    inputAdults(countResult)
  }
  const clickChildrenCount = (count: number) => {
    const countResult = countChildren + count > 0 ? countChildren + count : 0
    inputChildren(countResult)
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
          <p className="mr-4 text-sm">{countAdults}</p>
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
          <p className="mr-4 text-sm">{countChildren}</p>
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
