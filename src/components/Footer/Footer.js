import React from 'react';
import Fade from 'react-reveal/Fade';
import NavBrand from '../Navbar/NavBrand';
import { AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';
const Footer = () => {
    return (
        <Fade left>
            <footer className="text-white poppins bg-transparent p-4">
                {/* <div className="max-w-screen-xl px-6 py-24 mx-auto justify-evenly flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="md:mx-0 mx-auto text-center md:text-left">
                        <NavBrand />
                    </div>
                     
                    <div>
                        <h2 className="poppins text-xl text-white mb-3 font-semibold border-b-2 border-white text-center pb-2">Contact</h2>
                        <p className="pt-3">
                            <ul className='text-lg text-white'>
                                <li className='flex flex-row items-center'><a><AiFillFacebook/></a><a className='flex flex-row items-center gap-2' href="https://www.linkedin.com/in/arunim-singhal-0999a0181/"><AiFillLinkedin></AiFillLinkedin></a>{" "} Arunim Singhal</li>
                                <li className='flex flex-row items-center'><a><AiFillFacebook/></a><a className='flex flex-row items-center gap-2' href="https://www.linkedin.com/in/priya-sharma-2503b6204/"><AiFillLinkedin></AiFillLinkedin></a> {" "}Priya Sharma</li>                            </ul>
                        </p>
                    </div>
                </div> */}
                <div className="bg-transparent">
                    <div className="max-w-screen-xl mx-auto pt-3 px-5 flex flex-wrap flex-col justify-center sm:flex-row">
                        <p className="text-xl text-center sm:text-left">© Real-Time Climate Analysis
                            <a href="https://github.com/19smabtahinoot" rel="noopener noreferrer" className="text-white ml-1" target="_blank"></a>
                        </p>
                    </div>
                </div>
            </footer>
        </Fade>
    )
}

export default Footer
