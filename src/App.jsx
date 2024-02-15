import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/Navbar'
import HomePage from './Components/Home-page'
import { Outlet } from "react-router-dom";
import ItemCard from './Components/Item-Card'

function App({numOfItems}) {
  function handleAddToCartBtn(e){
    e.preventDefault()
  }
  return (
    <div className='content'>
      <NavBar numOfItems={numOfItems}></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
