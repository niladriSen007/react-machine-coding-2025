import { lazy } from "react"
const TabForm = lazy(() => import("./components/TabForm"))

const App = () => {
  return (
    <div>
      <TabForm />
    </div>
  )
}
export default App