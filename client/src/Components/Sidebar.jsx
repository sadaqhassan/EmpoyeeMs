import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { LayoutDashboard, LogOut, MegaphoneIcon, MenuIcon, ReceiptIcon, Settings, User2Icon, UserMinus } from 'lucide-react'

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Employee", path: "/employee", icon: User2Icon },
  { name: "Leave", path: "/leave", icon: UserMinus },
  { name: "Attendance", path: "/attendence", icon: MegaphoneIcon },
  { name: "Pay Slips", path: "/pay-slips", icon: ReceiptIcon },
  { name: "Settings", path: "/settings", icon: Settings },
]

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navStyle = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
    ${isActive ? "bg-white text-black font-semibold" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`

  return (
    <div>
      {/* DESKTOP */}
      <div
        className={`hidden md:flex flex-col justify-between h-screen bg-gray-900 text-white p-3 transition-all duration-300 ${
          menuOpen ? "w-64" : "w-20"
        }`}
      >
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8 px-2 relative">
            <User2Icon size={24} />
            {menuOpen && <h2 className="text-lg font-bold">Employee MS</h2>}
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item, i) => {
              const Icon = item.icon
              return (
                <NavLink key={i} to={item.path} className={navStyle}>
                  
                  {/* ICON (always centered) */}
                  <div className="flex items-center justify-center w-6">
                    <Icon size={20} />
                  </div>

                  {/* TEXT */}
                  {menuOpen && (
                    <span className="text-sm">{item.name}</span>
                  )}
                </NavLink>
              )
            })}
          </div>
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500 transition">
          <div className="flex items-center justify-center w-6">
            <LogOut size={20} />
          </div>
          {menuOpen && <span>Logout</span>}
        </button>

        {/* TOGGLE */}
        <button
          className={`absolute bg-black p-2 rounded top-4 ${
            menuOpen ? "right-4" : "right-2"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon />
        </button>
      </div>

         {/* Mobile */}
      <div
        className={`flex md:hidden flex-col justify-between h-screen bg-gray-900 text-white p-3 transition-all duration-300 ${
          mobileMenuOpen ? "w-54" : "w-18"
        }`}
      >
        {/* TOP */}
        <div>
          {/* LOGO */}
          <div className="flex items-center gap-3 mb-8 px-2 relative">
            <User2Icon size={24} />
            {mobileMenuOpen && <h2 className="text-lg font-bold">Employee MS</h2>}
          </div>

          {/* MENU */}
          <div className="flex flex-col gap-2">
            {menuItems.map((item, i) => {
              const Icon = item.icon
              return (
                <NavLink key={i} to={item.path} className={navStyle}>
                  
                  {/* ICON (always centered) */}
                  <div className="flex items-center justify-center w-6">
                    <Icon size={20} />
                  </div>

                  {/* TEXT */}
                  {mobileMenuOpen && (
                    <span className="text-sm">{item.name}</span>
                  )}
                </NavLink>
              )
            })}
          </div>
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-500 transition">
          <div className="flex items-center justify-center w-6">
            <LogOut size={20} />
          </div>
          {mobileMenuOpen && <span>Logout</span>}
        </button>

        {/* TOGGLE */}
        <button
          className={`absolute bg-black p-2 rounded top-4 ${
            mobileMenuOpen ? "right-4" : "right-2"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <MenuIcon />
        </button>
      </div>


    </div>
  )
}

export default Sidebar