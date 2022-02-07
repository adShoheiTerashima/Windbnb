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
  const debouncedInputText = useDebounce<string>(inputText, 1000)

  useEffect(() => {
    refine(debouncedInputText)
  }, [debouncedInputText])

  return (
    <div className="flex flex-col px-6 md:px-0">
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
          change(e)
        }}
      />
    </div>
  )
}
export default connectSearchBox(SearchBox)
