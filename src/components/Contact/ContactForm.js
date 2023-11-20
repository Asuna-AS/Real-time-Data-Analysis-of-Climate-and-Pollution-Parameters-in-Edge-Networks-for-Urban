import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import TextField from '../Form/TextField';
import { db } from '../../config/firebase.js'
import { addDoc, collection } from 'firebase/firestore'
import contactimage from './contact.png'

const ContactForm = () => {
    //form inputs
    // const Inputs = [
    //     { id: 1, type: "text", placeholder: "Full Name" },
    //     { id: 2, type: "email", placeholder: "Email" },
    //     { id: 3, type: "number", placeholder: "Phone Number" },
    // ]

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const userCollectionRef = collection(db, "contactData")

    const handleSubmit = () => {
        addDoc(userCollectionRef, { name: name, email: email, phone: phone, message: message })
    }
    return (
        <form className="flex flex-row justify-evenly items-center p-8 w-full" onSubmit={(e) => e.preventDefault()}>
            <div> <img src = {contactimage} className="w-32"></img> </div>
            <div className="flex flex-col space-y-6">
                    <div className='flex m-auto flex-row'>
                    <div className='border-2 p-1 hover:bg-green-200 rounded-md border-green-200'><TextField
                        type={name}
                        placeholder="Full Name"
                        onChange={(event) => { setName(event.target.value) }}
                    />
                    </div>
                    </div>
                    <div className='flex m-auto flex-row'>
                        
                    <div className='border-2 p-1 hover:bg-green-200 rounded-md border-green-200'><TextField
                        type={email}
                        placeholder="Email"
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                    </div>
                    </div>
                    <div className='flex m-auto flex-row'>
                        
                    <div className='border-2 p-1 rounded-md hover:bg-green-200 border-green-200'><TextField
                        type={phone}
                        placeholder="Phone Number"
                        onChange={(event) => { setPhone(event.target.value) }}
                    />
                    </div>
                    </div>
                    <div className='flex m-auto flex-row'>
                        
                    <div className='border-2 p-1 hover:bg-green-200 rounded-md border-green-200'><TextField
                        className="w-full px-4 py-3 h-36 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"
                        type={message}
                        placeholder="Message"
                        onChange={(event) => { setMessage(event.target.value) }}
                    />
                    </div>
                    </div>
            <Zoom left>
                <div>
                    <button type="submit" onClick={handleSubmit} className="rounded-lg bg-black py-3 px-4 text-white poppins lg:w-32 mt-6 hover:bg-gray-700 hover:text-white shadow-xl">
                        Submit
                    </button>
                </div>
            </Zoom>
            </div>
            {/* text field  */}
        </form>

    )
}

export default ContactForm
