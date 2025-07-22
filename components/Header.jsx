import { useTheme } from "../hooks/useTheme";


export default function Header() {

  const [isDark,setIsDark]=useTheme();
  
  // console.log(JSON.parse(localStorage.getItem("isDarkMode")));
 
  return (
    <header className={`header ${isDark?"dark":""}`}>
        <h2 ><a href="/" className="title">Where in the world?</a></h2>
        <p className="dark-mode" onClick={()=>{
          setIsDark(!isDark);
          localStorage.setItem("isDarkMode",!isDark)
          
        }}> <i className={`fa-solid fa-${isDark?"sun":"moon"}`}></i><span className="dark-mode">{isDark?"Light ":"Dark "}Mode</span></p>
    </header>
  )
}
