import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import { GeneralInfoSidebar } from "../components/GeneralInfoSidebar"
import { LeaderboardSidebar } from "../components/LeaderboardSidebar"
import { InviteFreelancerPopUp } from "../components/InviteFreelancerPopUp"
import { useRouter } from "next/router"
import axios from "axios"
import { useQuery } from "react-query"
let signedInUserID
let signedInUserLeaderboardInfo
let totalUsers
let signedInUserRank
let totalJobsWithYoungOnes
let jobsInPeriodWithYoungOnes
let totalJobsPoints = "laden"

// TODO:BACKEND ISSUES

// OVERIGE ISSUES
// Functies aanroepen wanneer er op een knop wordt gedrukt op het dashboard + database updaten
// Error in eslint met de prettier plugin

// async function fetchUserData() {
//   const { data } = await axios.get(
//     `https://gwoty.azurewebsites.net/api/user/userData?userId=${localStorage.getItem("token")}`
//   )
//   return data.result
// }

async function fetchLeaderboard() {
  const { data } = await axios.get("https://gwoty.azurewebsites.net/api/points/getleaderboard")
  return data
}

async function fetchJobCounts() {
  const { data } = await axios.get(`https://gwoty.azurewebsites.net/api/user/userJobsScore?userId=${signedInUserID}`)
  return data
}

const Index = () => {
  // const ISSERVER = typeof window === "undefined"
  // if (!ISSERVER) {
  //   if (localStorage.getItem("token") == null) {
  //     console.log("token Not Found in localStorage")
  //     const router = useRouter()
  //     router.push({
  //       pathname: "/signIn",
  //     })
  //   }
  // }

  // Fetching Data
  // const { data: userData, isLoading: userDataIsLoading } = useQuery("userData", () => fetchUserData())
  // const { data: leaderboardData, isLoading: leaderboardIsLoading } = useQuery("leaderboard", () => fetchLeaderboard())
  // const { data: jobCounts, isLoading: jobCountsIsLoading } = useQuery(
  //   ["jobCountsQuery", signedInUserID],
  //   () => fetchJobCounts(),
  //   {
  //     enabled: !!signedInUserID,
  //   }
  // )

  // Saving specific data
  // if (!userDataIsLoading && !leaderboardIsLoading) {
  //   signedInUserID = userData.id
  //   // signedInUserID = 33405
  //   signedInUserLeaderboardInfo = leaderboardData.find((user) => user.userId == userData.id)
  //   totalUsers = leaderboardData.length
  //   signedInUserRank = leaderboardData.map((e) => e.userId).indexOf(signedInUserID) + 1
  // }

  // if (!jobCountsIsLoading) {
  //   totalJobsWithYoungOnes = jobCounts?.jobsTotal
  //   jobsInPeriodWithYoungOnes = jobCounts?.jobsInPeriod
  // }

  const NavigateYO = () => {
    window.location.href = "https://youngones.app.link/open"
  }

  const NavigateInsta = () => {
    window.open("https://www.instagram.com/youngones.works/", "_blank")
    setTimeout(function () {
      axios.put("https://gwoty.azurewebsites.net/api/user/InstaFollow", {
        userId: signedInUserID,
      })
    }, 5000)
  }

  return (
    <Main
      meta={<Meta title="Dashboard" description="Dashboard overzicht" />}
      // userName={userData?.firstName}
      userName="Marco"
      // profilePicture={!userDataIsLoading && userData?.image ? userData?.image : "/img/avatar.svg"}
      profilePicture="/img/marco.jpg"
    >
      <div className=" mt-60 lg:mt-16 grid gap-4 max-w-screen-xl 3xl:max-w-screen-2xl w-full mx-auto px-4 lg:grid-cols-[5fr,2fr] 3xl:pt-24 box-border">
        <div className="block lg:hidden">
          <GeneralInfoSidebar
            // points={signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.score : ""}
            // rank={signedInUserRank}
            // totalUsers={totalUsers}
            points={30}
            rank={5}
            totalUsers={10}
          />
        </div>
        <main className="grid gap-4 lg:grid-rows-[0.9fr,5fr] lg:max-h-contentBox 3xl:max-h-contentBoxWideScreen">
          {/* BLACK NAVIGATION BUTTONS  */}
          <section className="hidden w-full grid-cols-3 gap-4 lg:grid">
            {/* BLACK BUTTON 1: PROFILE  */}
            <a
              href="/profile"
              className="relative flex items-center p-4 text-white duration-300 transform bg-black rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src="icons/profile.svg"
                alt="profile-Logo"
                className="box-border absolute w-1/4 justify-self-center h-3/5"
              />
              <p className="pl-24 text-lg font-bold">Profiel</p>
            </a>
            {/* BLACK BUTTON 2: LEADERBOARD  */}
            <a
              href="/leaderboard"
              className="relative flex items-center p-4 text-white duration-300 bg-black rounded-lg shadow-md hover:shadow-xl ransform hover:-translate-y-1"
            >
              <img
                src="icons/leaderboard.svg"
                alt="leaderboard-Logo"
                className="box-border absolute w-1/4 justify-self-center h-3/5"
              />
              <p className="pl-24 text-lg font-bold">Tussenstand</p>
            </a>
            {/* BLACK BUTTON 3: ABOUT  */}
            <a
              href="https://youngones.com/nl/gwoty-spelregels/"
              className="relative flex items-center p-4 text-white duration-300 transform bg-black rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src="icons/medal.svg"
                alt="about-GWOTY-Logo"
                className="box-border absolute w-1/4 justify-self-center h-3/5"
              />
              <p className="pl-24 text-lg font-bold">Over GWOTY</p>
            </a>
          </section>
          {/* MAIN CONTENTBOX  */}
          <article
            className="bg-white rounded-lg shadow-md px-8 py-6 grid grid-rows-[0.5fr,10fr,0.5fr] overflow-y-hidden"
            id="mainContent"
          >
            <h1 className="">Prestatie</h1>
            <ul className="grid h-full gap-6 md:gap-4">
              {/* TASK 1 */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>Punten op basis van klussen in 2021</p>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {"3 punten"}
                  {/* {!jobCountsIsLoading && totalJobsWithYoungOnes < 1
                    ? "0 punten"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes < 10 && totalJobsWithYoungOnes > 0
                    ? "1 punt"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes < 20 && totalJobsWithYoungOnes >= 10
                    ? "2 punten"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes >= 20
                    ? "3 punten"
                    : "Laden..."} */}
                </p>
                <p className="px-4 font-bold md:hidden">
                  {"3 punten"}
                  {/* {!jobCountsIsLoading && totalJobsWithYoungOnes < 1
                    ? "0"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes < 10
                    ? "1"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes < 20
                    ? "2"
                    : !jobCountsIsLoading && totalJobsWithYoungOnes >= 20
                    ? "3"
                    : "..."} */}
                </p>
                <button
                  onClick={NavigateYO}
                  href="https://youngones.app.link/open"
                  disabled={false}
                  // disabled={
                  //   signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.hasNominated ? true : false
                  // }
                  className="disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-none p-2 font-bold text-center duration-300 transform rounded bg-youngones-green hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 whitespace-nowrap inline"
                >
                  ++ Punten
                </button>
              </li>
              {/* TASK 1.2 */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>Punten op basis van klussen tussen 29 oktober en 11 november</p>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {"5 punten"}
                  {/* {!jobCountsIsLoading && jobsInPeriodWithYoungOnes < 1
                    ? "0 punten"
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes == 1
                    ? "1 punt"
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes < 6
                    ? `${jobsInPeriodWithYoungOnes} punten`
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes > 5
                    ? "5 punten"
                    : "Laden..."} */}
                </p>
                <p className="px-4 font-bold md:hidden">
                  {/* {!jobCountsIsLoading && jobsInPeriodWithYoungOnes < 1
                    ? "0"
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes == 1
                    ? "1"
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes < 6
                    ? `${jobsInPeriodWithYoungOnes}`
                    : !jobCountsIsLoading && jobsInPeriodWithYoungOnes > 5
                    ? "5"
                    : "..."} */}
                  {5}
                </p>
                <button
                  onClick={NavigateYO}
                  href="https://youngones.app.link/open"
                  // disabled={
                  //   signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.hasNominated ? true : false
                  // }
                  disabled={false}
                  className="disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-none p-2 font-bold text-center duration-300 transform rounded bg-youngones-green hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 whitespace-nowrap inline"
                >
                  ++ Punten
                </button>
              </li>
              {/* TASK 2 */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>YoungOnes volgen op Instagram</p>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.isFollowedInstagram ? "3" : "0"}{" "}
                  Punten */}
                  {"3 punten"}
                </p>
                <p className="px-4 font-bold md:hidden">
                  {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.isFollowedInstagram ? "3" : "0"} */}
                  {3}
                </p>
                <button
                  disabled={
                    true
                    // signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.isFollowedInstagram ? true : false
                  }
                  onClick={NavigateInsta}
                  className="disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-none p-2 font-bold text-center duration-300 transform rounded bg-youngones-green hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
                >
                  Gedaan!
                </button>
              </li>
              {/* TASK 3 */}
              {/* TODO: link naar YoungOnes instagram stories */}
              {/* TODO: Give marketing the option to add 5 points to specific freelancer  */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p className="inline">Deelname delen via Instagram Stories </p>

                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.hasPostedInstagramStory ? "5" : "0"}{" "} */}
                  0 Punten
                </p>
                <p className="px-4 font-bold md:hidden">
                  0
                  {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo?.user.hasPostedInstagramStory ? "5" : "0"} */}
                </p>
                <button
                  disabled={false}
                  onClick={NavigateInsta}
                  className="disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:cursor-default disabled:hover:translate-y-0 disabled:hover:shadow-none block p-2 font-bold text-center duration-300 transform rounded bg-youngones-green hover:cursor-pointer hover:shadow-lg hover:-translate-y-1 whitespace-nowrap"
                >
                  +5 Punten
                </button>
              </li>
              {/* TASK 4 */}
              {/* TODO: Emailprotocol in 'InviteFreelancerPopUp'-component*/}
              {/* TODO: Adding points after sending email*/}
              {/* TODO: Disable button if user received points  */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>Freelance collega nomineren die via YoungOnes werkt</p>
                <p className="font-bold hidden md:block">0 Punten</p>
                <p className="font-bold md:hidden px-4">0</p>
                <input className="hidden" type="checkbox" id="invite" />
                <label
                  htmlFor="invite"
                  className="font-bold bg-youngones-green p-2 text-center rounded hover:shadow-lg transform hover:-translate-y-1 duration-300 block m-0 whitespace-nowrap"
                >
                  +5 Punten
                </label>
                <InviteFreelancerPopUp />
              </li>
              {/* TASK 5 */}
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>BTW-nummer ingevuld op YoungOnes</p>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  3 punten
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"} Punten */}
                </p>
                <p className="px-4 font-bold md:hidden">
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"} */}3
                </p>
                <button
                  disabled={true}
                  onClick={NavigateYO}
                  className="disabled:bg-gray-200 disabled:text-gray-600 disabled:hover:cursor-default
                  disabled:hover:translate-y-0 disabled:hover:shadow-none p-2 font-bold text-center duration-300
                  transform rounded bg-youngones-green hover:cursor-pointer hover:shadow-lg hover:-translate-y-1
                  whitespace-nowrap"
                >
                  {" "}
                  Gedaan!
                </button>
              </li>
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <p>
                  Opkomstpercentage:
                  <strong>100%</strong>
                </p>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"} Punten */}3 punten
                </p>
                <p className="px-4 font-bold md:hidden">
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"} */}3
                </p>
                <button className="p-2 opacity-0 cursor-default"> +3 Punten</button>
              </li>
              <li className="grid grid-cols-[5fr,1fr,1fr] items-center">
                <div className="flex">
                  <p className="inline">Rating:&nbsp;&nbsp;</p>{" "}
                  {/* {visualizeScore(!userDataIsLoading ? userData?.reviewAverage : 0)} */}
                  {visualizeScore(5)}
                </div>
                <p className="hidden font-bold whitespace-no-wrap md:block">
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"}  */}3 Punten
                </p>
                <p className="px-4 font-bold md:hidden">
                  {/* {!userDataIsLoading && userData?.vatNumber ? "3" : "0"} */}3
                </p>
                <button className="p-2 opacity-0 cursor-default"> ++ Punten</button>
              </li>
            </ul>
            {/* TERMS OF USE DISCLAIMER  */}
            {/* TODO: Update Terms of Use hyperlink  */}
            {/* <div className="text-sm text-center">
              <p className="inline">Bij het meedoen met de GWOTY-awards ga je akkoord met de </p>
              <a
                href="https://youngones.com/nl/gwoty-algemene-voorwaarden/"
                className="inline font-bold text-youngones-green hover:underline"
              >
                algemene voorwaarden
              </a>
            </div> */}
          </article>
        </main>
        {/* SIDEBAR BOXES  */}
        <aside className="block lg:grid lg:grid-rows-[1fr,2fr] gap-4 lg:max-h-contentBox 3xl:max-h-contentBoxWideScreen">
          {/* /SIDEBAR BOX1  */}
          <div className="hidden lg:block">
            <GeneralInfoSidebar
              // points={signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.score : ""}
              // rank={signedInUserRank}
              // totalUsers={totalUsers}
              points={30}
              rank={5}
              totalUsers={10}
            />
          </div>
          {/* /SIDEBAR BOX2  */}
          {/* <LeaderboardSidebar leaderboardIsLoading={leaderboardIsLoading} leaderboardData={leaderboardData} /> */}

          <LeaderboardSidebar />
        </aside>
      </div>
    </Main>
  )
}

function drawStar(filled, i) {
  return (
    <svg key={i} width="22" height="22" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.5449 2.25329L22.4171 14.1705L22.5293 14.516H22.8926L35.4231 14.516L25.2857 21.8812L24.9918 22.0947L25.1041 22.4402L28.9762 34.3574L18.8388 26.9922L18.5449 26.7787L18.251 26.9922L8.11367 34.3574L11.9858 22.4402L12.0981 22.0947L11.8042 21.8812L1.6668 14.516L14.1973 14.516H14.5605L14.6728 14.1705L18.5449 2.25329Z"
        fill={filled ? "#10D1BB" : "#FFFFFF"}
        stroke="#10D1BB"
      />
    </svg>
  )
}

function visualizeScore(score) {
  let listOfStarValues = []
  for (let i = 0; i < 5; i++) {
    if (score >= 1) {
      listOfStarValues.push(true)
      score--
    } else {
      listOfStarValues.push(false)
    }
  }
  return listOfStarValues.map((value, i) => {
    return drawStar(value, i)
  })
}

export default Index
