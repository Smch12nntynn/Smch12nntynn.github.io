import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-screen bg-black flex justify-center items-center p-4 pl-16' name='contact'>
            <form method='POST' action='https://getform.io/f/d04f0505-70ac-4b33-b12e-3a793ca79d38' className='flex flex-col max-w-[600px] w-full pl-2'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-red-900 text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - michelmarques.dev@outlook.com.br</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type='email' placeholder='Email' name='email' />
                <textarea className='bg-#ccd6f6 p-2' name='message' rows='10' placeholder='Message' />
                <button className='text-white border-2 hover:bg-red-900 hover:border-red-900 px-4 py-3 my-4 mx-auto flex items-center'>Let's Collaborate</button>
            </form>
        </div>
    )
}

export default Contact