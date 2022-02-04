import Logo from '@components/icons/Logo'
import SeachButton from '@components/headerMenu/SearchButton'
import { focusFormType } from '@lib/utils/types'

type Props = {
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const Header = ({ setForcusForm }: Props) => {
  return (
    <header className="flex flex-col justify-between px-3 py-5 md:flex-row md:items-center md:py-8 md:px-24">
      <div className="mb-10 cursor-pointer md:mb-0">
        <Logo />
      </div>
      <div className="px-7 md:px-0">
        <SeachButton setForcusForm={setForcusForm} />
      </div>
    </header>
  )
}
export default Header
