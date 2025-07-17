import { FixedSizeList } from "react-window"
const Row = ({ index, style }: {
  index: number
}) => {
  return <>
    <span style={style}>Row - {index}</span>
  </>
}

const Demo = () => {
  return (
    <div>
      <FixedSizeList height={200} width={500} itemCount={10000} itemSize={20} >
        {Row}
      </FixedSizeList>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <Demo />
    </div>
  )
}
export default App