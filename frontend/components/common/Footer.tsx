import { CREATED_BY } from '@lib/utils/const'

const Footer = () => {
  return (
    <footer className="flex w-full justify-center py-7.5 px-24">
      <p className="text-gray-828282">
        created by <span className="font-semibold">{CREATED_BY}</span> - devChallenges.io
      </p>
    </footer>
  )
}
export default Footer
