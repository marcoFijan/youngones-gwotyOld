import { Meta } from "../layout/Meta"
import { Main } from "../templates/Main"
import { GeneralInfoSidebar } from "../components/GeneralInfoSidebar"
import { LeaderboardSidebar } from "../components/LeaderboardSidebar"
import { GoBack } from "../components/ReturnButton"
import { useRouter } from "next/router"
import axios from "axios"
import { useQuery } from "react-query"
let signedInUserID
let signedInUserLeaderboardInfo
let amountOfSocialMediaJobsDone
let totalUsers
let signedInUserRank
let totalJobsWithYoungOnes
let jobsInPeriodWithYoungOnes

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

async function fetchJobCounts() {
  const { data } = await axios.get(`https://gwoty.azurewebsites.net/api/user/userJobsScore?userId=${signedInUserID}`)
  return data
}

const About = () => {
  // Redirect when not signedIn
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
  //   signedInUserLeaderboardInfo = leaderboardData.find((user) => user.userId == userData.id)
  //   totalUsers = leaderboardData.length
  //   signedInUserRank = leaderboardData.map((e) => e.userId).indexOf(signedInUserID) + 1
  //   amountOfSocialMediaJobsDone = 0
  //   let getFollowedInstagramPoints = signedInUserLeaderboardInfo.user.isFollowedInstagram
  //   let getHasPostedInstagramStoryPoints = signedInUserLeaderboardInfo.user.hasPostedInstagramStory
  //   if (getFollowedInstagramPoints) {
  //     amountOfSocialMediaJobsDone++
  //     getFollowedInstagramPoints = false
  //   }
  //   if (getHasPostedInstagramStoryPoints) {
  //     amountOfSocialMediaJobsDone++
  //     getHasPostedInstagramStoryPoints = false
  //   }
  //   console.log(userData)
  //   console.log(signedInUserLeaderboardInfo)
  // }
  // if (!jobCountsIsLoading) {
  //   totalJobsWithYoungOnes = jobCounts?.jobsTotal
  //   jobsInPeriodWithYoungOnes = jobCounts?.jobsInPeriod
  // }

  return (
    <Main
      meta={<Meta title="Profile" description="Profiel overzicht" />}
      // userName={userData?.firstName}
      // profilePicture={!userDataIsLoading && userData?.image ? userData?.image : "/img/avatar.svg"}
      userName="Marco"
      profilePicture="/img/marco.jpg"
    >
      <div className="mt-60 lg:mt-16 grid gap-4 max-w-screen-xl 3xl:max-w-screen-2xl w-full mx-auto px-4 lg:grid-cols-[5fr,2fr] 3xl:pt-24 box-border">
        {/* MAIN CONTENTBOX  */}
        <main className="md:max-h-contentBox">
          <article className="flex flex-col h-full px-8 py-6 bg-white rounded-lg shadow-md" id="mainContent">
            <div className="flex pb-4">
              <GoBack />
              <h1 className="pl-1">Jouw profiel</h1>
            </div>
            {/* UPPER SECTION OF PROFILEPAGE  */}
            <section className="md:flex">
              <img
                className="object-cover w-56 h-56 mx-auto md:w-48 md:h-48 2xl:w-64 2xl:h-64 shadow-imageShadow"
                // src={!userDataIsLoading && userData?.image ? userData?.image : "/img/avatar.svg"}
                src="/img/marco.jpg"
                alt="profiel afbeelding"
              />
              <section className="w-full mt-10 md:mt-0 md:ml-12">
                {/* NAME AND RATING OF SIGNED IN USER  */}
                <div className="flex w-full">
                  <h2 className="h-6 pb-3.5 border-b-8 border-youngones-green font-bold text-lg flex-grow">
                    {/* {!userDataIsLoading ? `${userData?.firstName} ${userData?.lastName}` : ""} */}
                    Marco Fijan
                  </h2>{" "}
                  {/* COLLECTION STARS  */}
                  <div className="flex w-20 sm:w-32 md:w-auto">
                    {/* {visualizeScore(!userDataIsLoading ? userData?.reviewAverage : 0)} */}
                    {visualizeScore(5)}
                  </div>
                </div>
                {/* LIST OF DONE TASKS AND AMOUNT OF RECEIVED POINTS  */}
                <ul className="grid gap-4 pt-4 2xl:h-64 md:gap-0 h-2/3">
                  <li className="flex justify-between">
                    <p>Rating</p>
                    <p className="hidden font-bold text-right md:block">
                      3 punten
                      {/* {!userDataIsLoading && userData.reviewAverage < 3
                        ? "0 punten"
                        : !userDataIsLoading && userData.reviewAverage == 3
                        ? "1 punt"
                        : !userDataIsLoading && userData.reviewAverage == 4
                        ? "2 punten"
                        : !userDataIsLoading && userData.reviewAverage == 5
                        ? "3 punten"
                        : ""} */}
                    </p>
                    {/* <<< AMOUNT OF REWARDED POINTS */}
                    <p className="font-bold text-right md:hidden">
                      3
                      {/* {!userDataIsLoading && userData.reviewAverage < 3
                        ? "0"
                        : !userDataIsLoading && userData.reviewAverage == 3
                        ? "1"
                        : !userDataIsLoading && userData.reviewAverage == 4
                        ? "2"
                        : !userDataIsLoading && userData.reviewAverage == 5
                        ? "3"
                        : ""} */}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p>
                      <strong>
                        53
                        {/* {!jobCountsIsLoading ? totalJobsWithYoungOnes : "..."} */}
                      </strong>{" "}
                      Klussen totaal
                    </p>
                    <p className="hidden font-bold text-right md:block">
                      3 punten
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
                    {/* <<< AMOUNT OF REWARDED POINTS */}
                    <p className="font-bold text-right md:hidden">
                      3
                      {/* {!jobCountsIsLoading && totalJobsWithYoungOnes < 1
                        ? "0"
                        : !jobCountsIsLoading && totalJobsWithYoungOnes < 10 && totalJobsWithYoungOnes > 0
                        ? "1"
                        : !jobCountsIsLoading && totalJobsWithYoungOnes < 20 && totalJobsWithYoungOnes >= 10
                        ? "2"
                        : !jobCountsIsLoading && totalJobsWithYoungOnes >= 20
                        ? "3"
                        : "..."} */}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p>
                      <strong>{jobsInPeriodWithYoungOnes ? jobsInPeriodWithYoungOnes : 0}</strong> Klussen tussen 29 okt
                      - 11 nov
                    </p>
                    <p className="hidden font-bold text-right md:block">
                      5 punten
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
                    {/* <<< AMOUNT OF REWARDED POINTS */}

                    <p className="font-bold text-right md:hidden">
                      5
                      {/* {!jobCountsIsLoading && jobsInPeriodWithYoungOnes < 1
                        ? "0"
                        : !jobCountsIsLoading && jobsInPeriodWithYoungOnes == 1
                        ? "1"
                        : !jobCountsIsLoading && jobsInPeriodWithYoungOnes < 6
                        ? `${jobsInPeriodWithYoungOnes}`
                        : !jobCountsIsLoading && jobsInPeriodWithYoungOnes > 5
                        ? "5"
                        : "..."} */}
                    </p>
                    {/* <p className="hidden font-bold text-right md:block">? punten</p>{" "}
                    <p className="font-bold text-right md:hidden">?</p> */}
                  </li>
                  <li className="flex justify-between">
                    <p>
                      <strong>
                        {/* {!userDataIsLoading && userData?.attendanceRate ? `${userData?.attendanceRate}%` : "0%"} */}
                        100%
                      </strong>{" "}
                      Opkomstpercentage
                    </p>
                    <p className="hidden font-bold text-right md:block">
                      3 punten
                      {/* {!userDataIsLoading && (userData?.attendanceRate < 80 || !userData.attendanceRate)
                        ? "0 punten"
                        : !userDataIsLoading && userData?.attendanceRate < 90
                        ? "1 punt"
                        : !userDataIsLoading && userData?.attendanceRate < 100
                        ? "2 punten"
                        : "3 punten"}{" "} */}
                    </p>
                    {/* <<< AMOUNT OF REWARDED POINTS */}
                    <p className="font-bold text-right md:hidden">
                      3
                      {/* {!userDataIsLoading && (userData?.attendanceRate < 80 || !userData.attendanceRate)
                        ? "0"
                        : !userDataIsLoading && userData?.attendanceRate < 90
                        ? "1"
                        : !userDataIsLoading && userData?.attendanceRate < 100
                        ? "2"
                        : "3"}{" "} */}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p>BTW nummer ingevuld, Topper!</p>
                    {/* <p>
                      BTW nummer{" "}
                      <strong>
                        {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.vatNumberFilled
                          ? ""
                          : "nog niet"}
                      </strong>{" "}
                      ingevuld
                      {!userDataIsLoading && userData?.vatNumber ? ", Topper!" : ""}
                    </p> */}
                    <p className="hidden font-bold text-right md:block">
                      {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.vatNumberFilled ? "3" : "0"}{" "} */}
                      3 punten
                    </p>{" "}
                    {/* <<< AMOUNT OF REWARDED POINTS */}
                    <p className="font-bold text-right md:hidden">
                      {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.vatNumberFilled ? "3" : "0"} */}
                      3
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p>Freelance collega nog niet genomineerd</p>
                    {/* <p>
                      Freelance collega{" "}
                      <strong>
                        {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.hasNominated
                          ? ""
                          : "nog niet "}
                      </strong>
                      genomineerd
                    </p> */}
                    <p className="hidden font-bold text-right md:block">
                      0 punten
                      {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.hasNominated ? "3" : "0"} punten */}
                    </p>{" "}
                    <p className="font-bold text-right md:hidden">
                      0
                      {/* {signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.hasNominated ? "3" : "0"} */}
                    </p>
                  </li>
                  <li className="flex justify-between">
                    <p>
                      <strong>2</strong> Van de <strong>2</strong> instagram opdrachten
                      {/* <strong>{amountOfSocialMediaJobsDone}</strong> Van de <strong>2</strong> instagram opdrachten */}
                    </p>
                    <p className="hidden font-bold text-right md:block">
                      8 punten
                      {/* {amountOfSocialMediaJobsDone < 1
                        ? "0"
                        : signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.isFollowedInstagram
                        ? "3"
                        : signedInUserLeaderboardInfo && signedInUserLeaderboardInfo.user.hasPostedInstagramStory
                        ? "5"
                        : signedInUserLeaderboardInfo &&
                          signedInUserLeaderboardInfo.user.hasPostedInstagramStory &&
                          signedInUserLeaderboardInfo.user.isFollowedInstagram
                        ? "8"
                        : signedInUserLeaderboardInfo
                        ? "0"
                        : "..."}{" "}
                      punten */}
                    </p>{" "}
                    <p className="font-bold text-right md:hidden">
                      8{/* {amountOfSocialMediaJobsDone < 1 ? "0" : amountOfSocialMediaJobsDone < 2 ? "3" : "6"} */}
                    </p>
                  </li>
                </ul>
              </section>
            </section>
            {/* LOWER SECTION OF PROFILEPAGE  */}
            <section className=" pt-4 mt-4 border-t-2 border-bg-grey">
              <section>
                <h3 className="font-bold">Jouw overzicht</h3>
                <ul className="flex flex-row flex-wrap justify-around gap-2 mt-4 my-4">
                  <li>
                    <strong className="text-3xl font-black pr-4">
                      10
                      {/* {signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.scoreBonus : ""} */}
                    </strong>{" "}
                    Bonuspunten met opdrachten
                  </li>
                  <li>
                    <strong className="text-3xl font-black pr-4">
                      20
                      {/* {signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.scoreJobs : ""} */}
                    </strong>{" "}
                    Punten met klussen via YoungOnes
                  </li>
                </ul>
                <p className="max-w-sm py-2 mx-auto text-xs text-center">
                  Meer punten verdienen? Voer klussen uit via YoungOnes of voer de opdrachten uit op de hoofdpagina.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    className="p-2 font-bold text-center text-white duration-300 transform bg-black rounded hover:-translate-y-1"
                    href="/"
                  >
                    Voer opdrachten uit
                  </a>
                  <a
                    className="p-2 font-bold text-center text-black duration-300 transform rounded bg-youngones-green hover:-translate-y-1"
                    href="https://youngones.app.link/open"
                  >
                    Ga naar de app
                  </a>
                </div>
              </section>
            </section>
          </article>
        </main>
        {/* SIDEBAR BOXES  */}
        <aside className="grid lg:grid-rows-[1fr,1fr] gap-4 md:max-h-contentBox">
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
          {/* <LeaderboardSidebar leaderboardIsLoading={leaderboardIsLoading} leaderboardData={leaderboardData} /> */}
          <LeaderboardSidebar />
        </aside>
      </div>
    </Main>
  )
}

function drawStar(filled, i) {
  return (
    <svg key={i} width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export default About
