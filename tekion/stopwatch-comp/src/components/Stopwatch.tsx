import { useEffect, useRef, useState } from 'react'

const Stopwatch = () => {


  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [timeElapsedTillNow, setTimeElapsedTillNow] = useState<number>(0)
  const timeIntervalRef = useRef<null | number>(null)
  const startTimeRef = useRef(0)


  function start() {
    setIsRunning(true)
    startTimeRef.current = Date.now() - timeElapsedTillNow
  }
  function stop() {
    setIsRunning(false)
  }
  function reset() {
    setIsRunning(false)
    setTimeElapsedTillNow(0)
  }


  const formatTime = () => {
    /*  let hours = Math.floor(timeElapsedTillNow / (1000 * 60 * 60)); */
    let minutes: number | string = Math.floor(timeElapsedTillNow / (1000 * 60) % 60);
    let seconds: number | string = Math.floor(timeElapsedTillNow / (1000) % 60);
    let milliseconds: number | string = Math.floor((timeElapsedTillNow % 1000) / 10);

    /* hours = String(hours).padStart(2, "0"); */
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  useEffect(() => {
    if (isRunning) {
      timeIntervalRef.current = setInterval(() => {
        setTimeElapsedTillNow(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      clearInterval(timeIntervalRef?.current as number)
    }
  }, [isRunning])

  return (
    <div className='shadow-md rounded-md p-4 flex flex-col gap-4 items-center justify-center'>
      <div className='text-3xl font-bold'>{formatTime()}</div>
      <div className='flex gap-4'>
        <button className='px-4 py-2 rounded-md bg-green-400' onClick={start}>Start</button>
        <button className='px-4 py-2 rounded-md bg-red-400' onClick={stop}>Stop</button>
        <button className='px-4 py-2 rounded-md bg-blue-400' onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Stopwatch