type Props = {
  country: string
}

const ListTitle = ({ country }: Props) => {
  const title = country ? `Stays in ${country}` : 'Stays in various countries'
  return (
    <div className="flex justify-between items-center py-7.5">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm">12+ stays</p>
    </div>
  )
}

export default ListTitle
