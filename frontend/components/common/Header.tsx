import Logo from '@components/icons/Logo'
import SeachButton from '@components/common/SearchButton'

const Header = () => {
  return (
    <header className="flex justify-between items-center py-8 px-24">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <SeachButton />
    </header>
  )
}
export default Header
