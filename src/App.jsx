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
    console.log('gi')
  }
  return (
    <div className='content'>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <NavBar numOfItems={numOfItems}></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default App
