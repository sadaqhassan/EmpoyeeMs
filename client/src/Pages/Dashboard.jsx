import { ReceiptIcon, School, User2Icon, UserIcon, UserMinus2, Users } from 'lucide-react'
import React from 'react'

const Dashboard = () => {

const content = [
  { name: "Total_Employers", num: "34", icon: <Users/> },
  { name: "Todays_Attendence", num: "2", icon: <UserIcon/> },
  { name: "Departments", num: "10", icon: <School/> },
  { name: "Pending leaves", num: "2", icon: <UserMinus2/> }
]

  return (

    <div className='h-screen overflow-x-hidden overflow-y-scroll'>
      <div className='flex flex-col items-start'>
        <h1 className='text-xl font-medium text-gray-700'>Welcome Admin</h1>
        <p className='text-gray-600 text-sm'>Here is Your Over-view Dashboard</p>
      </div>

      <div className='grid grid-cols-2 overflow-x-scroll  xs:sm:flex wrap sm:flex-wrap  md:grid-cols-3 md:gap-6 gap-8 mt-5 '>
        {
          content.map((item,index)=>(
          <div className={`bg-white shadow-xl md:w-66 border-l-2 ${item.name === "Pending leaves" &&  "border-r-[#c64c00]" , item.name === "Todays_Attendence" && "border-r-[#009f20]" , item.name === "Total_Employers" && "border-[#0b466d]" , item.name === "Departments" && "border-r-green-900"} px-2 py-2 rounded`} key={index}>
            <p className='text-sm text-[#001b2e] font-medium'>{item.name}</p>
            <div className='flex justify-between px-2 py-3'>
              <p className='text-[#022239] font-bold'>{item.num}</p>
              <p>{item.icon}</p>
            </div>
        </div>
        ))
        }
      </div>
    </div>
  )
}

export default Dashboard