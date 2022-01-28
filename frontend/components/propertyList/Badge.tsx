type Props = {
  text: string
}
const Badge = ({ text }: Props) => (
  <div className="rounded-xl border border-black px-2.5 py-1">
    <span className="text-xs font-bold text-gray-4F4F4F">{text}</span>
  </div>
)

export default Badge
