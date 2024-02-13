import { useEffect, useState } from "react";


const Darkmode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const htmlDoc = document.documentElement;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            htmlDoc.classList.add("dark");
            htmlDoc.classList.remove("light");
        } else {
            htmlDoc.classList.add("light");
            htmlDoc.classList.remove("dark");
        }
    });

    const darkModefunc = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }


    return (
        <div className="relative">
            <img
                src="/src/Images/lightMode.png"
                alt="lightTheme"
                className={`w-12 cursor-pointer absolute z-40 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}
                onClick={darkModefunc}
            />
            <img
                src="/src/Images/darkMode.png"
                alt="darkTheme"
                className={`w-12 cursor-pointer`}
                onClick={darkModefunc}
            />
        </div>
    )
}

export default Darkmode;