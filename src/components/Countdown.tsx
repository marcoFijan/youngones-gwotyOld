import React, { useEffect, useState } from "react"

export const Countdown = () => {
  // Calculate the difference between the 2 dates
  const calculateTimeLeft = () => {
    const endDate = +new Date("November 11, 2021 00:00:00").getTime()
    const dateDifference = +endDate - +new Date().getTime()
    let timeLeft = {}

    if (dateDifference > 0) {
      timeLeft = {
        dagen: Math.floor(dateDifference / (1000 * 60 * 60 * 24)),
        uren: Math.floor((dateDifference / (1000 * 60 * 60)) % 24),
        minuten: Math.floor((dateDifference / 1000 / 60) % 60),
        seconden: Math.floor((dateDifference / 1000) % 60),
      }
    }

    return timeLeft
  }

  // Set the useState
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  // Set the timer and run the useState every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  // Array with the HTML per timecategory
  const timerComponents: JSX.Element[] = []

  // Fill the array with the HTML
  Object.keys(timeLeft).forEach((interval, i) => {
    timerComponents.push(
      <div key={i}>
        <h2 className="text-4xl font-black text-youngones-green" id="day">
          {timeLeft[interval]}
        </h2>
        <p className="text-xs -mt-2">{interval}</p>
      </div>
    )
  })

  // Return the array with the HTML and time
  return (
    <section>
      {timerComponents.length ? "" : <p className="text-5xl font-black text-red-700 w-full text-center">Tijd is om!</p>}
      <section className="grid grid-cols-4 text-center w-full pt-2 pb-4 max-w-sm mx-auto">
        {timerComponents.length ? timerComponents : ""}
      </section>
    </section>
  )
}
