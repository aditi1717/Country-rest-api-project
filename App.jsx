import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'
import { ThemeContext } from './contexts/ThemeContext.js';



export default function App() {
   const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("isDarkMode")));

  return (
   
       <ThemeContext.Provider value={[isDark,setIsDark]}>
        <Header/>
       <Outlet/>
       </ThemeContext.Provider>
  )
}
