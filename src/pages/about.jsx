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

const About = () => {
  const ISSERVER = typeof window === "undefined"
  if (!ISSERVER) {
    if (localStorage.getItem("token") == null) {
      const router = useRouter()
      router.push({
        pathname: "/signin",
      })
    }
  }

  // Fetching Data
  const { data: userData, isLoading: userDataIsLoading } = useQuery(["userData"], () => fetchUserData())
  const { data: leaderboardData, isLoading: leaderboardIsLoading } = useQuery("leaderboard", () => fetchLeaderboard())
  // Saving specific data
  if (!userDataIsLoading && !leaderboardIsLoading) {
    signedInUserID = userData.id
    signedInUserLeaderboardInfo = leaderboardData.find((user) => user.userId == userData.id)
    totalUsers = leaderboardData.length
    signedInUserRank = leaderboardData.map((e) => e.userId).indexOf(signedInUserID) + 1
  }

  return (
    <Main
      meta={<Meta title="Over GWOTY" description="Over GWOTY-Awards" />}
      userName={userData?.firstName}
      profilePicture={!userDataIsLoading && userData?.image ? userData?.image : "/img/avatar.svg"}
    >
      <div className="mt-60 lg:mt-16 grid gap-4 max-w-screen-xl 3xl:max-w-screen-2xl w-full mx-auto px-4 lg:grid-cols-[5fr,2fr] 3xl:pt-24 box-border">
        {/* MAIN CONTENTBOX  */}
        <main className="">
          <article
            className="h-full px-8 py-6 overflow-y-scroll bg-white rounded-lg shadow-md md:max-h-contentBox 3xl:max-h-contentBoxWideScreen"
            id="mainContent"
          >
            <div className="flex">
              <GoBack />
              <h1 className="pl-1">Gig Worker Of The Year (GWOTY) Award</h1>
            </div>
            <h2 className="pt-6 pb-2 text-lg font-bold">Stap 1</h2>
            <p className="max-w-3xl">
              De YoungOnes freelancer kan zich via een aparte landingspagina aanmelden om kans te maken op de Gig-worker
              Of The Year Awards. Wanneer je zelf geen (YoungOnes) freelancer bent, maar wel graag iemand wil aandragen
              voor deze titel kan dat ook! Aanmelden of aandragen kan van
              <strong> 15 oktober 09:00</strong> t/m <strong>28 oktober 23:59</strong>. Let op, dit is tevens de
              wedstrijdperiode waarin punten kunnen worden behaald.
            </p>
            <h2 className="pt-4 pb-2 mt-8 text-lg font-bold border-t-2 border-t-gray-100">Stap 2</h2>
            <p className="max-w-3xl pb-4">
              Binnen de actieperiode (15 okt t/m 28 okt) is het de bedoeling dat de freelancer zoveel mogelijk punten
              verzameld om kans te maken op één van de 3 finaleplekken.
            </p>
            <p className="max-w-3xl pb-4">Als freelancer kun je punten pakken op acht verschillende onderdelen:</p>
            <ol className="max-w-3xl pl-4 md:pl-12 ">
              <li className="flex justify-between gap-4 py-2 pb-2 pl-2 pr-4 rounded-lg hover:bg-gray-50">
                <p>1. YoungOnes volgen op Instagram</p>{" "}
                <p>
                  <strong>3 punten</strong>
                </p>
              </li>
              <li className="flex justify-between gap-4 py-2 pb-2 pl-2 pr-4 rounded-lg hover:bg-gray-50">
                <p>2. Deelname delen via Instagram stories</p>
                <p>
                  <strong>5 punten</strong>
                </p>
              </li>
              <li className="flex justify-between gap-4 py-2 pb-2 pl-2 pr-4 rounded-lg hover:bg-gray-50">
                <p>3. Freelancer collega nomineren die via YoungOnes werkt</p>
                <p>
                  <strong>5 punten</strong>
                </p>
              </li>
              <li className="px-2 py-2 pb-2">
                <p>4. Rating op YoungOnes </p>
                <ol className="pl-8 list-disc md:pl-16">
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>0-2 sterren:</p>
                    <p>
                      <strong>0 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>3 sterren:</p>
                    <p>
                      <strong>1 punt</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>4 sterren:</p>
                    <p>
                      <strong>2 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>5 sterren:</p>
                    <p>
                      <strong>3 punten</strong>
                    </p>
                  </li>
                </ol>
              </li>
              <li className="px-2 py-2 pb-2">
                <p>5. Opkomstpercentage </p>
                <ol className="max-w-3xl pl-8 list-disc md:pl-16">
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>0-79:</p>
                    <p>
                      <strong>0 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>80-89:</p>
                    <p>
                      <strong>1 punt</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>90-99:</p>
                    <p>
                      <strong>2 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>100:</p>
                    <p>
                      <strong>3 punten</strong>
                    </p>
                  </li>
                </ol>
              </li>
              <li className="px-2 py-2 pb-2">
                <p>6. Aantal klussen tussen ma 15 oktober en vrijdag 28 oktober</p>
                <ol className="max-w-3xl pl-8 list-disc md:pl-16">
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>1 klus:</p>
                    <p>
                      <strong>1 punt</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>2 klussen:</p>
                    <p>
                      <strong>2 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>3 klussen:</p>
                    <p>
                      <strong>3 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>4 klussen:</p>
                    <p>
                      <strong>4 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>5+ klussen:</p>
                    <p>
                      <strong>5 punten</strong>
                    </p>
                  </li>
                </ol>
                <p className="text-sm italic">*De uren van de klussen moeten binnen deze periode ingediend zijn.</p>
              </li>
              <li className="px-2 py-2 pb-2">
                <p>7. Totaal gewerkte klussen via YoungOnes in 2021</p>
                <ol className="max-w-3xl pl-8 list-disc md:pl-16">
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>0-9 klussen:</p>
                    <p>
                      <strong>1 punt</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>10-19 klussen:</p>
                    <p>
                      <strong>2 punten</strong>
                    </p>
                  </li>
                  <li className="flex justify-between gap-4 px-2 py-2 rounded-lg hover:bg-gray-50">
                    <p>20-29 klussen:</p>
                    <p>
                      <strong>3 punten</strong>
                    </p>
                  </li>
                </ol>
              </li>
              <li className="flex justify-between gap-4 py-2 pl-2 pr-4 rounded-lg hover:bg-gray-50">
                <p>8. BTW-nummer ingevuld op YoungOnes</p>
                <p>
                  <strong>3 punten</strong>
                </p>
              </li>
            </ol>
            <h2 className="pt-4 pb-2 mt-8 text-lg font-bold border-t-2 border-t-gray-100">Stap 3</h2>
            <p className="max-w-3xl pb-8">
              Op <strong>vrijdag 29 oktober (week 46)</strong> worden de drie finalisten bekend gemaakt via Instagram
              van YoungOnes en ontvangen zij tevens bericht vanuit YO. Er wordt een top 5 gebeld (incl 2 reserves)
              waarbij er duidelijke afspraken worden gemaakt en wordt nagegaan of iemand echt wil meedoen aan de finale
              en van plan is om de content te maken.
            </p>
            <p className="pb-8">
              Wat moet je ervoor doen om als finalist de prijs in de wacht te slepen?? Zorg dat jij de leukste, meest
              originele Instagram takeover maakt! Als finalist krijg je één takeover dag op YO Instagram Stories!
              Onderdelen die we graag terug zien:
            </p>
            <p className="pb-8">Maak een videopitch waarin je verteld/laat zien:</p>
            <ol className="max-w-3xl pl-8 list-decimal md:pl-16">
              <li className="pb-4">
                Wie ben je + hoelang werk je al via YoungOnes + waarom moet jij gig-worker of the year worden? (max 1
                min)
              </li>
              <li className="pb-4">
                Veel freelancers vinden het spannend om bij een eerste (nieuwe)klus aan de slag te gaan. Laat zien hoe
                jij dit aanpakt/ hoe jij je voorbereid voor een nieuwe klus: geef een of meerdere tips
              </li>
              <li className="pb-4">
                Voor veel nieuwe freelancers is ‘de administratie’ een spannend onderdeel. Hierdoor stellen sommige
                freelancers het soms uit om aan de slag te gaan. Hoe pak jij het aan? Geef 3 tips
              </li>
              <li className="pb-4">Aan het werk (behind the scenes tijdens de klus en in de pauze)</li>
              <li className="pb-8">Verrassingselement (In dit onderdeel mag je een eigen invulling geven)</li>
            </ol>
            <p className="max-w-3xl pb-8">
              Wanneer kun je jouw Takeover story opnemen? Zodra bekend is dat je finalist bent (
              <strong>29 oktober</strong>) kun je aan de slag! We ontvangen jouw video’s/foto’s/gifjes graag uiterlijk{" "}
              <strong>donderdag 4 november 13:00</strong>. Je hebt dus ongeveer vijf dagen de tijd. De takeovers worden
              uitgezonden in <strong>week 45: 8 november t/m 10 november</strong>.
            </p>
            <p className="pb-4">Hoe word je winnaar?</p>
            <ol className="max-w-3xl pl-8 list-decimal md:pl-16">
              <li className="pb-4">
                <p>
                  De winnaar wordt 50% bepaald door het Instagram publiek. Aan de hand van polls geven zij aan wie de
                  winnaar moet worden. Nodig dus al je vrienden uit om onze Instagram te liken zodat zij op jou kunnen
                  stemmen! Vanaf <strong>donderdag 11 november om 09:00</strong> staat er een poll live op onze
                  Instagram Stories.
                </p>
              </li>
              <li className="pb-4">
                <p>
                  50% Door medewerkers van YoungOnes zelf. Zo worden wij meer betrokken bij de wedstrijd en is het voor
                  de finalisten zelf ook nog spannender.
                </p>
              </li>
            </ol>
            <h2 className="pt-4 pb-2 mt-8 text-lg font-bold border-t-2 border-t-gray-100">Stap 4</h2>
            <p className="max-w-3xl pb-8">
              De winnaar wordt bekend gemaakt op <strong>vrijdag 27 november 15:30</strong> via een livestream op
              Instagram.
            </p>
            <ul className="pl-8 list-disc md:pl-16">
              <li className="pb-2">
                <p>Eerst wordt er verteld wie er favoriet is bij team YoungOnes</p>
              </li>
              <li>
                <p>
                  Vervolgens wordt de uitslag van de poll erbij opgeteld waardoor de kijkers ook het idee hebben dat zij
                  uiteindelijk het verschil hebben gemaakt.
                </p>
              </li>
            </ul>
            <section className="pt-4 mt-12 flex flex-wrap justify-around sm:justify-between border-t-2 border-t-gray-100">
              <article>
                <h2 className="pb-2 text-lg font-bold">Prijzenpakket</h2>
                <p className="pb-4">Wat win je precies?</p>
                <ul className="pl-8 list-disc md:pl-16">
                  <li className="pb-4">
                    <p>Bol.com giftcard t.w.v. 250 euro</p>
                  </li>
                  <li className="pb-4">
                    <p>JBL Flip 5 speaker (t.w.v. 100 euro)</p>
                  </li>
                  <li className="pb-4">
                    <p>Klus verdubbelaar (200% cashen)</p>
                  </li>
                  <li className="pb-4">
                    <p>Freelance cursus naar keuze</p>
                  </li>
                </ul>
              </article>
              <img className="h-60 object-cover" src="/img/prices.png" />
            </section>
          </article>
        </main>
        {/* SIDEBAR BOXES  */}
        <aside className="grid lg:grid-rows-[1fr,2fr] gap-4 max-h-contentBox 3xl:max-h-contentBoxWideScreen">
          {/* /SIDEBAR BOX1  */}
          <GeneralInfoSidebar
            points={signedInUserLeaderboardInfo ? signedInUserLeaderboardInfo.score : ""}
            rank={signedInUserRank}
            totalUsers={totalUsers}
          />
          {/* /SIDEBAR BOX2  */}
          <LeaderboardSidebar leaderboardIsLoading={leaderboardIsLoading} leaderboardData={leaderboardData} />
        </aside>
      </div>
    </Main>
  )
}

export default About
