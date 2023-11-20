import React from 'react';
import Zoom from 'react-reveal/Zoom';
import ContactForm from '../components/Contact/ContactForm';

const ContactScreen = () => {
    return (
        <section className="flex flex-col items-center justify-evenly pt-40 px-6 gap-10 overflow-y-hidden">
            {/* heading  */}
            <Zoom>
                <div className="flex flex-col">
                    <h1 className="text-black poppins font-semibold text-3xl">Contact<span className="text-white  poppins font-semibold text-3xl select-none"> Us</span></h1>
                    <div className="bg-black w-8 h-1 mt-2 rounded-full"></div>
                </div>
            </Zoom>
            {/* form  */}
            <Zoom right>
            <div className='bg-white w-2/5 flex flex-col rounded-lg overflow-hidden shadow-green-500/50 md:shadow-xl md:shadow-green-500 z-10'>
            <ContactForm />
            </div>
            </Zoom>
        </section>
    )
}

export default ContactScreen
