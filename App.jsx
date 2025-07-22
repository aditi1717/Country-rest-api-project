import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'



export default function App() {
   const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("isDarkMode")));

  return (
    <> 
       <Header theme={[isDark,setIsDark]}/>
       <Outlet context={[isDark,setIsDark]}/>
    </>
  )
}
