import React from "react"
import { Countdown } from "./Countdown"

export const GeneralInfoSidebar = ({ points, rank, totalUsers }) => {
  return (
    <section className="bg-white rounded-lg shadow-md px-8 py-6 grid grid-rows-2">
      <section>
        <h1>Resterende tijd</h1>
        <Countdown />
      </section>
      <section className="grid grid-cols-2">
        <section>
          <h1 className="Montserrat text-xl font-black text-center">Punten</h1>
          <h2 className="text-5xl xl:text-6xl font-black text-center text-youngones-green">{points}</h2>
        </section>
        <section>
          <h1 className="Montserrat text-xl font-black text-center">Positie</h1>
          <div className="flex justify-center pr-4">
            <h2 className="text-5xl xl:text-6xl font-black text-youngones-green">{rank}</h2>
            <h3 className="text-3xl font-black self-end text-youngones-green">/{totalUsers}</h3>
          </div>
        </section>
      </section>
    </section>
  )
}
