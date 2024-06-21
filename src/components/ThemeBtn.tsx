
import { SunIcon, MoonIcon  } from '@heroicons/react/24/outline'
import{ useEffect, useState } from "react";

function ThemeBtn() {
    const [theme, setTheme] = useState(() => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
      return "light";
    });

    useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")!.classList.add("dark");
    } else {
      document.querySelector("html")!.classList.remove("dark");
    }
    }, [theme]);

    function handleTheme() {
        setTheme(theme => (theme === "light" ? "dark" : "light"));
    }

  return (
    <button 
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <MoonIcon
          className='text-black size-10'
        />
      ) : (
        <SunIcon
          className='text-white size-10'
        />
      )}
    </button>
  )
}

export default ThemeBtn