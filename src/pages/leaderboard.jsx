import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import { GeneralInfoSidebar } from "../components/GeneralInfoSidebar"
import { MorePointsSidebar } from "../components/MorePointsSidebar"
import { GoBack } from "../components/ReturnButton"
import { useRouter } from "next/router"
import { useQuery } from "react-query"
import axios from "axios"
let signedInUserID
let signedInUserLeaderboardInfo
let totalUsers
let signedInUserRank

async function fetchUserData() {
  const { data } = await axios.get(
    `https://gwoty.azurewebsites.net/api/user/userData?userId=${localStorage.getItem("token")}`
  )
  return data.result
}

async function fetchLeaderboard() {
  const { data } = await axios.get("https://gwoty.azurewebsites.net/api/points/getleaderboard")
  return data
}

const leaderboard = () => {
  // const ISSERVER = typeof window === "undefined"

  // if (!ISSERVER) {
  //   if (localStorage.getItem("token") == null) {
  //     const router = useRouter()
  //     router.push({
  //       pathname: "/signIn",
  //     })
  //   }
  // }

  // Fetching Data
  // const { data: userData, isLoading: userDataIsLoading } = useQuery(["userData"], () => fetchUserData())
  // const { data: leaderboardData, isLoading: leaderboardIsLoading } = useQuery("leaderboard", () => fetchLeaderboard())

  // Saving specific data
  // if (!userDataIsLoading && !leaderboardIsLoading) {
  //   signedInUserID = userData.id
  //   signedInUserLeaderboardInfo = leaderboardData.find((user) => user.userId == userData.id)
  //   totalUsers = leaderboardData.length
  //   signedInUserRank = leaderboardData.map((e) => e.userId).indexOf(signedInUserID) + 1
  // }

  // function mapData() {
  //   return leaderboardData.map((item, i) => {
  //     return (
  //       <li key={i} className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
  //         <p className="mr-auto font-black text-center rounded-full w-7 h-7">{i + 1}</p>
  //         <p className="">{item.user?.first_name}</p>
  //         <p className="hidden md:block">{item?.scoreJobs}</p>
  //         <p className="hidden md:block">{item?.scoreBonus}</p>
  //         <p className="">{item?.score} punten</p>
  //       </li>
  //     )
  //   })
  // }
  let i = 0
  return (
    <Main
      meta={<Meta title="Leaderboard" description="Compleet leaderboard" />}
      // userName={userData?.firstName}
      // profilePicture={!userDataIsLoading && userData?.image ? userData?.image : "/img/avatar.svg"}
      userName="Marco"
      profilePicture="/img/marco.jpg"
    >
      <div className="mt-60 lg:mt-16 grid gap-4 max-w-screen-xl 3xl:max-w-screen-2xl w-full mx-auto px-4 lg:grid-cols-[5fr,2fr] 3xl:pt-24 box-border">
        {/* MAIN CONTENTBOX  */}
        <main className="">
          <article
            className="h-full px-8 py-6 bg-white rounded-lg shadow-md lg:max-h-contentBox 3xl:max-h-contentBoxWideScreen lg:overflow-y-scroll "
            id="mainContent"
          >
            <div className="flex">
              <GoBack />
              <h1 className="pl-1">Tussenstand</h1>
            </div>
            <ul className="flex flex-col gap-2 mt-6" id="leaderboard">
              {/* LEGENDA */}
              <li className="grid grid-cols-3 font-black md:grid-cols-5 text-youngones-green">
                <p className="">Positie</p>
                <p className="">Freelancer</p>
                <p className="hidden md:block">Punten met klussen</p>
                <p className="hidden md:block">Bonuspunten</p>
                <p className="">Totaal punten</p>
              </li>
              {/* {!leaderboardIsLoading ? mapData() : <></>} */}
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">1</p>
                <p className="">Tim</p>
                <p className="hidden md:block">23</p>
                <p className="hidden md:block">30</p>
                <p className="">53 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">2</p>
                <p className="">Gertjan</p>
                <p className="hidden md:block">2</p>
                <p className="hidden md:block">30</p>
                <p className="">50 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">3</p>
                <p className="">Lucas</p>
                <p className="hidden md:block">13</p>
                <p className="hidden md:block">30</p>
                <p className="">43 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">4</p>
                <p className="">Jan</p>
                <p className="hidden md:block">10</p>
                <p className="hidden md:block">25</p>
                <p className="">35 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">5</p>
                <p className="">Marco</p>
                <p className="hidden md:block">10</p>
                <p className="hidden md:block">20</p>
                <p className="">30 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">6</p>
                <p className="">Daniel</p>
                <p className="hidden md:block">10</p>
                <p className="hidden md:block">18</p>
                <p className="">28 punten</p>
              </li>
              <li className="grid grid-cols-3 py-5 pl-2 rounded-lg md:grid-cols-5 hover:bg-gray-50">
                <p className="mr-auto font-black text-center rounded-full w-7 h-7">7</p>
                <p className="">Pieter</p>
                <p className="hidden md:block">9</p>
                <p className="hidden md:block">18</p>
                <p className="">27 punten</p>
              </li>
            </ul>
          </article>
        </main>
        {/* SIDEBAR BOXES  */}
        <aside className="grid lg:grid-rows-[1fr,2fr] gap-4 max-h-contentBox 3xl:max-h-contentBoxWideScreen">
          {/* /SIDEBAR BOX1  */}
          <GeneralInfoSidebar
            // points={signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.score : ""}
            // rank={signedInUserRank}
            // totalUsers={totalUsers}
            points={30}
            rank={5}
            totalUsers={10}
          />
          {/* /SIDEBAR BOX2  */}
          <MorePointsSidebar
          // signedInUserLeaderboardInfo={signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo : ""}
          />
        </aside>
      </div>
    </Main>
  )
}

export default leaderboard
