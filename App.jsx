
import "./App.css"
import Header from './components/Header.jsx'
import { Outlet } from 'react-router'
import {ThemeProvider } from './contexts/ThemeContext.js';



export default function App() {
  return (
       
       <ThemeProvider>
        <Header/>
        <Outlet/>
       </ThemeProvider>
  )
}
