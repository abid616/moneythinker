import React, { useState, useEffect } from 'react'
import { fetchAPI } from '../../lib/api'

export const Form = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [discription, setDiscription] = useState('')

    async function addRequest(){
       
        const requestInfo = {
            name: fullName,
            email: email,
            phoneNumber: phoneNumber,
            discription: discription
        }

        const add = await fetch("/requests" ,{
            method:"POST",
            body: JSON.stringify(requestInfo)
        })

        const addResponse = await add.json()

        console.log(addResponse)
    }

    return (
        <div className="w-full max-w-xs">
            <form className="sm:pt-6 pt-2 sm:pb-8 pb-0 sm:mb-4 mb-2">
                <div className="sm:mb-4 mb-2">
                    <input 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Full name" 
                        onChange={e=> setFullName(e.target.value)} value={fullName}
                    />
                </div>
                <div className="sm:mb-4 mb-2">
                    <input 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                        id="username" 
                        type="text" 
                        placeholder="Email" 
                        onChange={e => setEmail(e.target.value)} value={email}
                    />
                </div>
                <div className="sm:mb-6 mb-2">
                    <input 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="number" 
                        placeholder="PhoneNumber" 
                        onChange={e => setPhoneNumber(e.target.value)} value={phoneNumber}
                    />
                </div>
                <div className="sm:mb-6 mb-2">
                    <input 
                        className="shadow appearance-none border rounded-full w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="body" 
                        type="text" 
                        placeholder="What time are you available for a call back"
                        onChange={e => setDiscription(e.target.value)} value={discription}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" 
                        type="button"
                        onClick={()=> addRequest()}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
