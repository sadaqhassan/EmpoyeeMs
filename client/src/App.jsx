import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast' 
import Login from './Pages/Login'
import Layout from './Pages/Layout'
import Dashboard from './Pages/Dashboard'
import Attendence from './Pages/Attendence'
import Employee from './Pages/Employee'
import Leave from './Pages/Leave'
import Payslips from './Pages/Payslips'
import PrintPayslips from './Pages/PrintPayslips'
import Settings from './Pages/Settings'

const App = () => {
  return (
    <div>

    <Toaster/>
      <Routes>
        <Route path='/login' element={<Login/>}/>

        <Route path='/' element={<Layout/>}>
        <Route path='dashboard' element={<Dashboard/>}/>
        <Route path='attendence' element={<Attendence/>}/>
        <Route path='employee' element={<Employee/>}/>
        <Route path='leave' element={<Leave/>}/>
        <Route path='payslips' element={<Payslips/>}/>
        <Route path='settings' element={<Settings/>}/>
        </Route>

        <Route path='print/payslips/:id' element={<PrintPayslips/>}/>
        <Route path='*' element={<Navigate to="/dashboard" replace/>}/>

      </Routes>
    </div>
  )
}

export default App