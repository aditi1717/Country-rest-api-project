import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'


export default function App() {
  return (
    <> 
       <Header/>
       <Outlet/>
    </>
  )
}
