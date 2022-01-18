import Logo from '@components/icons/Logo'
import SeachButton from '@components/common/SearchButton'
import { MouseEventHandler } from 'react'

type Props = {
  click: MouseEventHandler<HTMLButtonElement>
}
const Header = ({ click }: Props) => {
  return (
    <header className="flex justify-between items-center py-8 px-24">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <SeachButton click={click} />
    </header>
  )
}
export default Header
