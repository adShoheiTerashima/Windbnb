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
      <li className="font-Mulish text-sm">
        <p className="font-bold">Adults</p>
        <p className="mt-1 text-gray-4">Ages 12 or above</p>
        <div className="mt-3 flex items-center justify-start">
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
      <li className="mt-11 font-Mulish text-sm">
        <p className="font-bold">Children</p>
        <p className="mt-1 text-gray-4">Ages 2-12</p>
        <div className="mt-3 flex items-center justify-start">
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
