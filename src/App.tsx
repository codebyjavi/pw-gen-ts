import { PlusCircleIcon  } from '@heroicons/react/24/outline'
import { ClipboardDocumentIcon } from '@heroicons/react/24/solid'
 
import ThemeBtn from "./components/ThemeBtn"
import { Categories } from "./utils/utils"

function App() {

    return (
    <div className="flex flex-col justify-center min-h-dvh px-3 gap-10 md:gap-10 dark:text-neutral-200">
        <header className='flex justify-end'>
          <ThemeBtn/>
        </header>

        <div className="flex justify-between items-center md:w-[30rem] bg-neutral-200 rounded-md p-2">

          <input 
            className="min-w-[90%] outline-none border-none bg-transparent text-xl py-1 text-black" 
            type="text" 
            placeholder="Password" 
            id="userOutput"
          />

          <ClipboardDocumentIcon
            className="size-9 text-blue-600 hover:text-blue-500 cursor-pointer" 
          />

        </div>

        <div className="flex flex-col font-semibold gap-2">
          <label htmlFor="customRange">Password Length: <span>{11}</span></label> 
          <input 
            className="cursor-pointer" 
            type="range" 
            name="range" 
            id="customRange" 
            min="0" 
            max="30" 
            value={15}
          />
        </div>

        <ul className="space-y-8 text-2xl">
          {Categories.map( categorie => (
            <li 
              key={categorie.id}
              className="flex justify-between cursor-pointer hover:text-blue-500"
            >    
              {categorie.name}
              <PlusCircleIcon
                className="size-8"
              />
          </li>
          ))}
          
          
        </ul>

        <button 
          className="w-full text-2xl py-3 rounded-md bg-blue-500 hover:bg-blue-400 text-white" 
          id="generatePw"
        >
          Generate Password
        </button>
      
      </div>
  )
}

export default App