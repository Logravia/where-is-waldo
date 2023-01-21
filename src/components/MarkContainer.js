import Mark from './Mark'

function MarkContainer ({locations}) {
  return (
    <div>
      {locations.map((loc,i) => <Mark showAt={loc} key={i}/>)}
    </div>
  )
}

export default MarkContainer
