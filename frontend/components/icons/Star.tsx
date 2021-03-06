type Props = {
  width?: string | number
  height?: string | number
  className: string
}
const Star = ({ className, height = 18, width = 18 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    enableBackground="new 0 0 24 24"
    height={height}
    viewBox="0 0 24 24"
    width={width}
    className={className}
  >
    <g>
      <path d="M0,0h24v24H0V0z" fill="none" />
      <path d="M0,0h24v24H0V0z" fill="none" />
    </g>
    <g>
      <path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
    </g>
  </svg>
)
export default Star
