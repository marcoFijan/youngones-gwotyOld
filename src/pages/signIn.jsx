import React from "react"
import { SignInForm } from "../components/SignInForm"
import { Meta } from "../layout/Meta"
import { Other } from "../templates/Other"
import { useRouter } from "next/router"

const signIn = () => {
  const ISSERVER = typeof window === "undefined"

  if (!ISSERVER) {
    if (localStorage.getItem("token") != null) {
      const router = useRouter()
      router.push({
        pathname: "/",
      })
    }
  }
  return (
    <Other meta={<Meta title="Inloggen" description="Inloggen bij GWOTY-Award" />}>
      <main className="flex w-full h-screen overflow-y-hidden md:justify-between">
        <section className="relative self-center flex-grow h-5/6">
          <article className="relative z-20 flex flex-col justify-between h-full px-4">
            <div>
              <h2 className="z-10 text-3xl font-black text-center">GWOTY Award 2021</h2>
              <h1 className="z-10 -mt-6 text-5xl font-black text-center">Inloggen</h1>
              <p className="z-10 px-4 pt-4 mx-auto text-xs font-medium text-center w-80">
                Log in met je YoungOnes account. Nog geen account? Klik{" "}
                <strong>
                  <a className="hover:underline" href="https://youngones.app.link/open">
                    hier
                  </a>
                </strong>{" "}
                om een account aan te maken.
              </p>
            </div>

            {/* SIGN IN FORM  */}
            <SignInForm />
            <p className="z-10 px-4 pt-4 mx-auto text-xs font-medium text-center w-80">
              Door in te loggen ga je automatisch akkoord met de{" "}
              <strong>
                <a className="hover:underline" href="https://youngones.com/nl/gwoty-algemene-voorwaarden/">
                  algemene voorwaarden
                </a>
              </strong>{" "}
              en geef je aan mee te doen met de GWOTY Award.
            </p>
            <p className="z-10 px-4 pt-4 mx-auto text-xs font-medium text-center w-80">
              Wachtwoord vergeten? Ga naar de{" "}
              <strong>
                <a className="hover:underline" href="https://youngones.app.link/open">
                  YoungOnes app
                </a>
              </strong>{" "}
              om deze aan te passen.
            </p>
          </article>
          {/* <div className="box-content fixed z-10 hidden transform rounded-full md:absolute h-96 w-96 p-44 bg-bg-grey left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4"></div> */}
        </section>
        <div className="relative z-0 flex-grow-0 hidden object-cover w-2/4 max-h-screen lg:w-3/5 2xl:w-4/6 md:block">
          <img className="object-cover w-full h-full" src="/img/introBanner.jpg" alt="intro afbeelding" />
          <img className="absolute h-32 bottom-5 right-5" src="/img/logoWhite.png" alt="GWOTY logo" />
        </div>
      </main>
    </Other>
  )
}

export default signIn
