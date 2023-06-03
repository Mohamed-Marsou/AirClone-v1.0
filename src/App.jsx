import React from "react"
<<<<<<< Updated upstream
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from "./pages/app/Home.jsx";
import FAQ from "./pages/app/F&Q.jsx"
import Contact from "./pages/app/Contact.jsx"
import Login from "./pages/Users/Login.jsx"
import Register from "./pages/Users/Register.jsx"
import Dashboard from "./pages/admin/dashboard.jsx"
=======
import Properties from "./pages/Properties.jsx"
>>>>>>> Stashed changes

function App() {

  return (
    <>
<<<<<<< Updated upstream
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
=======
        <Properties/>
>>>>>>> Stashed changes
    </>
  )
}

export default App
