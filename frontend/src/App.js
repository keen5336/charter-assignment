import React, { useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router'
import RootLayout from './layouts/root'
import Home from './routes/home'

const Forward = () => {
  const navigation = useNavigate()
  useEffect(() => {
    navigation('/home')
  })
  return null
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="" element={<Forward />}></Route>
      </Route>
    </Routes>
  )
}
