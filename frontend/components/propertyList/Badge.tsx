type Props = {
  text: string
}
const Badge = ({ text }: Props) => (
  <div className="border border-black rounded-xl px-2.5 py-1">
    <span className="text-xs font-bold text-gray-3">{text}</span>
  </div>
)

export default Badge
