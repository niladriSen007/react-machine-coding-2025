import Progressbar from "./components/Progressbar"
import "./App.scss"
import { useEffect, useRef, useState } from "react"

const App = () => {

  const [val, setVal] = useState<number>(0)
  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setVal(prev => prev + 1)
    }, 50)

    return () => {
      clearInterval(timerRef.current)
    }
  }, [])

  return (
    <div className="progressBar_container">
      <Progressbar value={val} onComplete = {()=>setShowSuccess(true)} />
        {showSuccess && <p>Successfully completed</p>}
    </div>
  )
}
export default App