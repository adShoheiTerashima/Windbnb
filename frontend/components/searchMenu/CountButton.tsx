import cn from 'classnames'

export const btnType = { PLUS: '+', MINUS: '-' } as const

type countBtnType = typeof btnType[keyof typeof btnType]

type Props = {
  type: countBtnType
  className?: string
  click: () => void
}

export const CountButton = ({ type, className, click }: Props) => (
  <button
    className={cn(className, [
      'w-6',
      'h-6',
      'border',
      'border-gray-828282',
      'rounded',
      'flex',
      'justify-center',
      'items-center',
    ])}
    onClick={click}
  >
    {type}
  </button>
)
