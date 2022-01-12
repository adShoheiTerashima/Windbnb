import Logo from '@components/icons/Logo'
import SeachButton from '@components/SearchButton'
const Header = () => {
  return (
    <header className="flex justify-between items-center py-32px px-26">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <SeachButton />
    </header>
  )
}
export default Header
