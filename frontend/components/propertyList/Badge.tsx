type Props = {
  text: string
}
const Badge = ({ text }: Props) => (
  <div className="border border-black rounded-12px px-10px py-7px">
    <span className="text-12px font-bold">{text}</span>
  </div>
)

export default Badge
