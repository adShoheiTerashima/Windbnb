import Logo from '@components/icons/Logo'
import SeachButton from '@components/common/SearchButton'
import { focusFormType } from '@lib/utils/types'

type Props = {
  setForcusForm: React.Dispatch<React.SetStateAction<focusFormType>>
}

const Header = ({ setForcusForm }: Props) => {
  return (
    <header className="flex items-center justify-between py-8 px-24">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <SeachButton setForcusForm={setForcusForm} />
    </header>
  )
}
export default Header
