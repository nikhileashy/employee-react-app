import { useState } from 'react'
import AddEmployee from './components/AddEmployee'
import SearchEmployee from './components/SearchEmployee'
import NavBar from './components/NavBar'
import DeleteEmployee from './components/DeleteEmployee'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
  <Route index element={<AddEmployee />} />
  <Route path="add" element={<AddEmployee />} />
  <Route path="search" element={<SearchEmployee />} />
  <Route path="delete" element={<DeleteEmployee />} />
</Routes>
     </BrowserRouter>
    </>
  )
}

export default App
