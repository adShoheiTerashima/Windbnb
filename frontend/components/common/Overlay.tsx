import { MouseEventHandler } from 'react'

type Props = {
  click: MouseEventHandler<HTMLDivElement>
}
const Overlay = ({ click }: Props) => {
  return (
    <div
      className="w-full h-full absolute top-0 bg-gray-3 opacity-40 cursor-pointer"
      onClick={click}
    />
  )
}
export default Overlay
