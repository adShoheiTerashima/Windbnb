import { useForm } from 'react-hook-form'

type InputData = {
  searchText: string
}

type Props = {
  id?: string
  label?: string
  placeholder?: string
}

const SearchInput = ({ id, label, placeholder }: Props) => {
  const { register } = useForm<InputData>()
  return (
    <div className="flex flex-col">
      {label && (
        <label className="mb-1 text-0.5 font-extrabold" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        id={id}
        className="outline-none w-full h-full text-sm placeholder-gray-4::placeholder"
        placeholder={placeholder}
        {...register('searchText')}
      />
    </div>
  )
}
export default SearchInput
