import useDebounce from '@lib/hooks/useDebounce'
import { useEffect } from 'react'

type Props = {
  id?: string
  label?: string
  placeholder?: string
  inputText: string
  change: (event: { target: HTMLInputElement }) => void
}

const SearchInput = ({ id, label, placeholder, inputText, change }: Props) => {
  const debouncedInputText = useDebounce<string>(inputText, 200)

  useEffect(() => {
    console.log('api実行！')
  }, [debouncedInputText])

  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-0.5 font-extrabold" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="outline-none placeholder-gray-4::placeholder h-full w-full text-sm"
        placeholder={placeholder}
        value={inputText}
        onChange={change}
      />
    </div>
  )
}
export default SearchInput
