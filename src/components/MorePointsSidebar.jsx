import React from "react"

export const MorePointsSidebar = () => {
  return (
    <section className="bg-white rounded-lg shadow-md px-8 py-6 grid h-72">
      <h1>Jouw overzicht</h1>
      <ul className="mt-4 flex flex-col gap-2">
        <li>
          <strong>10</strong> Punten via YoungOnes
        </li>
        <li>
          <strong>4</strong> Bonuspunten met opdrachten
        </li>
        <p className="text-center text-xs max-w-sm py-2">
          Meer punten verdienen? Klus via YoungOnes of voer opdrachten uit in het dashboard
        </p>
      </ul>
      <div className="grid gap-2 self-end pb-4">
        <a
          className="font-bold text-white text-center rounded p-2 transform hover:-translate-y-1 duration-300 hover:shadow-lg bg-black"
          href="/"
        >
          Voer opdrachten uit
        </a>
        <a
          className="font-bold text-black text-center rounded p-2 bg-youngones-green transform hover:-translate-y-1 duration-300 hover:shadow-lg"
          href="https://dashboard.youngones.works/inloggen"
        >
          Ga naar YoungOnes
        </a>
      </div>
    </section>
  )
}
