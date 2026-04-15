import React, { useState } from 'react'

const Login = ({role,title}) => {
    const [inputData,setInputData] = useState({});

    const handleChange = async (e) => {
        setInputData((prev)=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
return (
    <div>
        <div className='flex flex-col md:flex-row'>
        {/* side */}
        <div className='customBack h-screen flex flex-col justify-center items-center text-center w-full md:w-1/2'>
            <div className='flex flex-col space-y-3 text-white'>
                <h1 className='text-2xl md:text-4xl font-medium'>
                    Employee Management System
                </h1>
                <p className='text-sm font-light text-start text-gray-300'>
                    Streamline your workforce operations, track<br/>
                    attendance, manage payroll, and empower your team<br/>
                    securely.
                </p>
            </div>
        </div>
        {/* login */}
        <div className='h-screen flex flex-col justify-center items-center text-center w-full md:w-1/2'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl md:text-3xl font-medium text-start'>{role === "admin" ? "Welcome Admin" : "Welcome Employee" } </h1>
                <p className='mt-4 text-start text-md text-gray-700 mb-3'>{title}</p>
                <input type="email" name='email' placeholder='Email'   className='my-5'/>
                <input onChange={handleChange} type="password"  name='password' placeholder='Password'/>
                <input onChange={handleChange} type="button"  value="Login" />
                <p className='mt-4 text-start text-xs text-gray-700'> &#169; { new Date().getFullYear() } Developed by sadak_Dev</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Login