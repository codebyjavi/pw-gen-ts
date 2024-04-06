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
    <button onClick={handleTheme} className="flex justify-end items-center bg-transparent text-4xl">
    {theme === "light" ? (
      <i className="bx bx-moon text-black"></i>
    ) : (
      <i className="bx bx-sun text-white"></i>
    )}
    </button>
  )
}

export default ThemeBtn