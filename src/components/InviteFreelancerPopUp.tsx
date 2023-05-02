import React from "react"

export const InviteFreelancerPopUp = () => {
  return (
    <section className="hidden">
      <section className="bg-gray-500 opacity-70 w-full h-screen fixed top-0 right-0 z-20"></section>
      <section className="bg-white px-8 py-6 max-w-lg shadow-md fixed z-30 rounded-md top-2/4 left-2/4 transform -translate-y-2/4 -translate-x-2/4">
        <h1 className="mb-4">Nodig een mede Freelancer uit</h1>
        <p>Om een freelancer uit te nodigen, vul je hier het e-mailadres in van de betreffende freelancer.</p>
        <form>
          <label className="mt-4 block">
            <p className="mb-2 mt-8">Jouw Naam</p>
            <input
              className="autofocus w-full rounded-md  border-1 border-bg-black shadow-md transform focus:-translate-y-1 focus:shadow-xl focus:bg-white duration-300"
              name="name"
              type="text"
              placeholder={"naam van ingelogd persoon"} // <<<< DATABASE >>>>>
              required
            />{" "}
          </label>
          <label className="mt-4 block">
            <p className="mb-2 mt-8">E-mailadres van freelancer collega: </p>
            <input
              className="autofocus w-full rounded-md  border-1 border-bg-black shadow-md transform focus:-translate-y-1 focus:shadow-xl focus:bg-white duration-300"
              name="colleagueEmail"
              type="email"
              placeholder="E-mailadres"
              required
            />{" "}
          </label>
          <div className="mt-12">
            <input
              className="block w-full p-2 mb-4 bg-youngones-green  font-bold rounded-md text-center hover:shadow-lg transform hover:-translate-y-1 duration-300 px-4"
              name="invite"
              type="submit"
              value="Freelancer uitnodigen"
            ></input>
            <label
              htmlFor="invite"
              className="block font-bold bg-black text-white p-2 text-center rounded-md hover:shadow-lg transform hover:-translate-y-1 duration-300 px-4"
            >
              Annuleren
            </label>
          </div>
        </form>
      </section>
    </section>
  )
}
