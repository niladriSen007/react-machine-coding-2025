import { useDebounce } from "./hooks/useDebounce"

const App = () => {

  const {suggestions,showSuggetions,handleInputChange,loading,searchValue} = useDebounce()


  return (
    <div>
      <input type="text" onChange={handleInputChange} value={searchValue} />
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        {
          showSuggetions && suggestions?.length && suggestions?.map((suggestion) => (
            <span>{suggestion?.name}</span>
          ))
        }
      </div>
    </div>
  )
}
export default App