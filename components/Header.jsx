import { useState } from "react"


export default function Header() {

  const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("isDarkMode")));
  if(isDark){
      document.body.classList.add('dark')
  }
  else{
     document.body.classList.remove('dark')
  }
  // console.log(JSON.parse(localStorage.getItem("isDarkMode")));
 
  
  return (
    <header className="header">
        <h2 ><a href="/" className="title">Where in the world?</a></h2>
        <p className="dark-mode" onClick={()=>{
          setIsDark(!isDark);
          localStorage.setItem("isDarkMode",!isDark)
          
        }}> <i className={`fa-solid fa-${isDark?"sun":"moon"}`}></i><span className="dark-mode">{isDark?"Light ":"Dark "}Mode</span></p>
    </header>
  )
}
