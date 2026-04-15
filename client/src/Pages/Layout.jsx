import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' h-screen w-full text-white'>
        <Sidebar/>
        <main>
            <div>
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default Layout