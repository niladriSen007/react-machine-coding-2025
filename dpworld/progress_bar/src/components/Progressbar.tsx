import { useEffect, useState } from "react"

const Progressbar = ({ value = 0, onComplete = () => { } }: {
  value: number,
  onComplete: () => void
}) => {

  const [progressPercentage, setProgressPercentage] = useState<number>(0)
  useEffect(() => {
    // If provided value is <0 then it will be changed to 0 and if provided value is more than 100 then it fixed to 100
    setProgressPercentage(Math.min(100, Math.max(value, 0)))

    if (value >= 100) {
      onComplete()
    }
  }, [value])


  return (
    <div className="progressBar_box">
      <span style={{
        color: progressPercentage > 70 ? "white" : "black"
      }} className="progressBar_span"> {progressPercentage?.toFixed()}%</span>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={parseInt(progressPercentage?.toFixed())}
        style={{
          /*  width: `${progressPercentage?.toFixed()}%`  */
          transform: `scaleX(${progressPercentage / 100})`,
          transformOrigin: "left"
        }}
        className="progressBar_dynamicDiv" data-width={progressPercentage?.toFixed()} />
    </div>
  )
}
export default Progressbar