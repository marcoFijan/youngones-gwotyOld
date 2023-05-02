import React from "react"

export const LeaderboardSidebar = () => {
  return (
    <section className="bg-white rounded-lg shadow-md px-8 py-6 h-full">
      <h1>Leaderboard</h1>
      <ol className="grid h-full pt-4">
        <li className="grid grid-cols-[1fr,5fr,3fr]">
          <p className="font-bold">1.</p>
          <p>Ido</p>
          <p className="font-bold">91 punten</p>
        </li>
        <li className="grid grid-cols-[1fr,5fr,3fr]">
          <p className="font-bold">2.</p>
          <p>Tea</p>
          <p className="font-bold">91 punten</p>
        </li>
        <li className="grid grid-cols-[1fr,5fr,3fr]">
          <p className="font-bold">3.</p>
          <p>Feiko</p>
          <p className="font-bold">91 punten</p>
        </li>
        <li className="border-t-4 border-youngones-green grid grid-cols-[1fr,5fr,3fr] pt-2">
          <p className="font-bold">21.</p>
          <p>Gert</p>
          <p className="font-bold">24 punten</p>
        </li>
        <li className="pb-4 mb-4 text-center">
          <a className="text-youngones-green font-bold hover:underline md:text-sm" href="/leaderboard">
            Bekijk volledig leaderboard
          </a>
        </li>
      </ol>
    </section>
  )
}
