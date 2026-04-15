import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className=' h-screen w-full'>
        <Sidebar/>
        <main className='flex-1 overflow-auto'>
            <div className='max-w-400 pt-16 sm:p-6 mx-auto'>
                <Outlet/>
            </div>
        </main>
    </div>
  )
}

export default Layout