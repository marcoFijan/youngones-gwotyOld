import React, { useState } from "react"
import axios from "axios"
import { useRouter } from "next/dist/client/router"

export const SignInForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [incorrectLogin, setIncorrectLogin] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ username: email, password: password }),
    // }
    // fetch("https://gwoty.azurewebsites.net/api/user/login", requestOptions)
    //   .then((response) => response.text())
    //   .then((data) => console.log(data))

    axios
      .post("https://gwoty.azurewebsites.net/api/user/login", {
        username: email,
        password: password,
      })
      .then((data) => {
        // sessionStorage.setItem("token", data.data)
        // cookieCutter.set("token", data.data)
        localStorage.setItem("token", data.data)
      })
      .catch(() => {
        // HANDLE 400
        // router.push("/signIn")
        setIncorrectLogin(true)
      })
      .finally(() => {
        if (localStorage.getItem("token") != null) {
          setIncorrectLogin(false)
          router.push("/")
        }
      })
  }

  // Return the array with the HTML and time
  return (
    <form onSubmit={handleSubmit} className="z-10 flex flex-col w-full max-w-sm px-4 mx-auto mt-4">
      <p className="text-red-800 font-bold text-center">
        {incorrectLogin ? "Ow nee, een fout, probeer het nog eens" : ""}
      </p>
      {/* {incorrectLogin ? (
        <p className="text-red-800 font-bold text-center">Daar ging wat fout, probeer het nog eens</p>
      ) : null} */}
      {/* EMAIL  */}
      <label className="my-2">
        <p className="pb-2">E-mailadres: </p>
        <input
          className="w-full duration-300 transform rounded-md shadow-md autofocus focus:-translate-y-1 focus:shadow-xl focus:bg-white"
          name="username"
          type="email"
          placeholder="E-mailadres"
          onChange={(e) => setEmail(e.target.value)}
          required
        />{" "}
      </label>
      {/* PASSWORD  */}
      <label className="my-2">
        <p className="pb-2">Wachtwoord: </p>
        <input
          className="w-full duration-300 transform rounded-md shadow-md focus:-translate-y-1 focus:shadow-xl"
          name="password"
          type="password"
          placeholder="Wachtwoord"
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
      </label>
      <input
        className="p-2 mt-4 font-bold text-white duration-300 bg-black rounded-md hover:cursor-pointer ransform hover:-translate-y-1"
        name="login"
        type="submit"
        value="Inloggen"
      ></input>
    </form>
  )
}
