type Props = {
  country: string
}

const ResultHeader = ({ country }: Props) => {
  const title = country ? `Stays in ${country}` : 'Stays in various countries'
  return (
    <div className="flex justify-between items-center py-29px">
      <h1 className="text-h1 font-bold">{title}</h1>
      <p>12+ stays</p>
    </div>
  )
}

export default ResultHeader