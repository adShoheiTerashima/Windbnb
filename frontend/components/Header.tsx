import Logo from '@components/icons/Logo'
import SeachButton from '@components/SearchButton'
const Header = () => {
  return (
    <header className="flex justify-between items-center p-32px">
      <Logo />
      <SeachButton />
    </header>
  )
}
export default Header
