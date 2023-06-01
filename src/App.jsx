import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/app/Home.jsx";
import FAQ from "./pages/app/F&Q.jsx"
import Contact from "./pages/app/Contact.jsx"
import Login from "./pages/Users/Login.jsx"
import Register from "./pages/Users/Register.jsx"
import Dashboard from "./pages/admin/dashboard.jsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/faq' element={<FAQ/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
