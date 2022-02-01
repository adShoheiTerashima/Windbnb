import useDebounce from '@lib/hooks/useDebounce'
import { useEffect, VFC } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'

interface Props extends SearchBoxProvided {
  id?: string
  label?: string
  placeholder?: string
  inputText: string
  change: (event: { target: HTMLInputElement }) => void
}

const SearchBox = ({ id, label, placeholder, inputText, change, refine }: Props) => {
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
        className="outline-none placeholder-gray-BDBDBD::placeholder h-full w-full text-sm"
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => {
          refine(e.target.value)
          change(e)
        }}
      />
    </div>
  )
}
export default connectSearchBox(SearchBox)