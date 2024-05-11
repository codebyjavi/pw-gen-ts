import LinkGithub from "./components/LinkGithub"
import ThemeBtn from "./components/ThemeBtn"

function App() {

  return (
  <div className="flex flex-col justify-center min-h-dvh px-3 gap-10 md:gap-10 dark:text-neutral-200">
      <LinkGithub/>
      <ThemeBtn/>
      <div className="flex justify-between items-center md:min-w-[30rem] bg-neutral-200 rounded-md p-2">
        <input className="min-w-[90%] outline-none border-none bg-transparent text-xl py-1 text-black" type="text" placeholder="Password" id="userOutput"/>
        <i className="fa-solid fa-copy text-2xl text-blue-600 hover:text-blue-500 cursor-pointer"></i>
      </div>
      <div className="flex flex-col font-semibold gap-2">
        <label htmlFor="customRange">Password Length: <span>0</span></label> 
        <input className="cursor-pointer" type="range" id="customRange" min="0" max="30"/>
      </div>
      <ul className="space-y-8">
        <li>Uppercase (A-Z)</li>
        <li>Lowercase (a-z)</li>
        <li>Symbol (!$#@)</li>
        <li>Number (0-9)</li>
      </ul>
      <button className="flex mx-auto gap-1 w-full text-xl py-3 rounded-md items-center bg-blue-500 hover:bg-blue-400 text-white justify-center" id="generatePw">Generate Password <i className="fa-solid fa-rotate-left"></i></button>
    </div>
  )
}

export default App