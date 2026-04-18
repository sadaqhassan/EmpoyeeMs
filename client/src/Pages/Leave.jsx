import React, { useEffect, useState } from 'react'
import { dummyLeaveData } from '../assets/assets'
import { Check, X } from 'lucide-react'
import moment from 'moment'

const Leave = () => {
  const [content, setContent] = useState([])

  useEffect(() => {
    setContent(dummyLeaveData)
  }, [])

  const getStatusStyle = (status) => {
    switch (status) {
      case "APPROVED":
        return "bg-green-100 text-green-700"
      case "PENDING":
        return "bg-yellow-100 text-yellow-700"
      case "REJECTED":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-600"
    }
  }

  return (
    <div className="p-4">

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Leave Management
        </h1>
        <p className="text-gray-500 text-sm">
          Manage Employee Leave Applications
        </p>
      </div>

      {/* TABLE CONTAINER */}
      <div className="bg-white shadow-md  overflow-hidden">

        {/* TABLE HEADER */}
        <div className="grid grid-cols-6 bg-gray-100 text-gray-800 text-xs font-semibold px-6 py-3">
          <p>Employee</p>
          <p>Type</p>
          <p>Dates</p>
          <p>Reason</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {/* TABLE BODY */}
        <div>
          {content && content.length > 0 ? (
            content.map((data) => (
              <div
                key={data._id}
                className="grid grid-cols-6 px-6 py-4 border-b border-gray-200 text-sm items-center hover:bg-gray-50 transition"
              >
                <p className="font-medium text-gray-800">
                  {data.employee.firstName}
                </p>

                <p>{data.type}</p>

                <p>{moment(data.createdAt).fromNow()}</p>

                <p className="truncate text-sm">{data.reason}</p>

                {/* STATUS */}
                <span
                  className={`px-1 py-1 text-xs rounded w-fit ${getStatusStyle(
                    data.status
                  )}`}
                >
                  {data.status}
                </span>

                {/* ACTION */}
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-xs  text-green-600 rounded hover:border border-green-600">
                    <Check size={14}/>
                  </button>
                  <button className="px-2 py-1 text-xs  text-red-600 rounded hover:border border-red-600 ">
                    <X size={14}/>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="p-6 text-center text-gray-500">
              No data available
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Leave