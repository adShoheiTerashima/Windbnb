import { CREATED_BY } from '@lib/utils/const'

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full flex justify-center p-7.5">
      <p className="text-gray-1">
        created by <span className="font-semibold">{CREATED_BY}</span> - devChallenges.io
      </p>
    </footer>
  )
}
export default Footer
