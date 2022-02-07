import { CountButton, btnType } from '@components/searchMenu/CountButton'
import { GuestsValueObject } from '@domain/guets'

type Props = {
  countAdults: number
  countChildren: number
  inputAdults: (num: number) => void
  inputChildren: (num: number) => void
}

const GuestCount = ({ countAdults, countChildren, inputAdults, inputChildren }: Props) => {
  const guestsVO = new GuestsValueObject(countAdults, countChildren)
  const clickAdultsCount = (count: number) => {
    guestsVO.adults = countAdults + count
    inputAdults(guestsVO.adults)
  }
  const clickChildrenCount = (count: number) => {
    guestsVO.children = countChildren + count
    inputChildren(guestsVO.children)
  }

  return (
    <ul className="px-6 md:px-0">
      <li className="font-Mulish text-sm">
        <p className="font-bold">Adults</p>
        <p className="mt-1 text-gray-BDBDBD">Ages 12 or above</p>
        <div className="mt-3 flex items-center justify-start">
          <CountButton
            type={btnType.MINUS}
            className="mr-4"
            click={() => {
              clickAdultsCount(-1)
            }}
          />
          <p className="mr-4 text-sm">{countAdults}</p>
          <CountButton type={btnType.PLUS} click={() => clickAdultsCount(1)} />
        </div>
      </li>
      <li className="mt-11 font-Mulish text-sm">
        <p className="font-bold">Children</p>
        <p className="mt-1 text-gray-BDBDBD">Ages 2-12</p>
        <div className="mt-3 flex items-center justify-start">
          <CountButton type={btnType.MINUS} className="mr-4" click={() => clickChildrenCount(-1)} />
          <p className="mr-4 text-sm">{countChildren}</p>
          <CountButton type={btnType.PLUS} click={() => clickChildrenCount(1)} />
        </div>
      </li>
    </ul>
  )
}
export default GuestCount
