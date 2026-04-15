import React from 'react'

const LoginLanding = () => {
  return (
    <div className='flex'>
        {/* side */}
        <div className='customBack h-screen flex flex-col justify-center items-center text-center w-1/2'>
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
        <div className='h-screen flex flex-col justify-center items-center text-center w-1/2'>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-2xl md:text-3xl font-medium text-start'>Welcome Back</h1>
                <p className='mt-4 text-start text-md text-gray-700 mb-3'>Select your portal to securely access the system</p>
                <input type="button"  value={"Admin portal"} className='my-5'/>
                <input type="button" value={"Employee portal"} />
                <p className='mt-4 text-start text-xs text-gray-700'> &#169; { new Date().getFullYear() } Developed by sadak_Dev</p>
            </div>
        </div>
    </div>
  )
}

export default LoginLanding