import { lazy } from "react"

const InfiniteScroll = lazy(() => import("./components/InfiniteScroll"))

const App = () => {
  return (
    <div>
      <InfiniteScroll />
    </div>
  )
}
export default App