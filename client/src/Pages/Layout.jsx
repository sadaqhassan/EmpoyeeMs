import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex gap-4 space-x-5'>
        <Sidebar/>
        <main className='z-40 mt-6'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout