import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import NormalFeatures from '../components/TabComponent/NormalFeatures'
import AdvancedFeatures from '../components/TabComponent/AdvancedFeatures'
import Doctor from './doctor.png' 
import Patient from './patient.png'
import {AiOutlineArrowLeft} from 'react-icons/ai' 
import { useHistory } from 'react-router-dom';
let CheckupScreen = () => { 
    let history = useHistory();
    return (
        <section className="max-w-screen-xl pt-32 mx-auto overflow-y-hidden">
            {/* heading  */}
            <div className="flex flex-col">
                <Zoom>
                    <div className="flex flex-col mx-auto pb-4">
                        <h1 className="text-black poppins font-semibold text-3xl">Check<span className="text-white lg:text-4xl select-none">Up</span></h1>
                        <div className="bg-black w-8 h-1 mt-2 rounded-full"></div>
                    </div>
                </Zoom>
                <div className='flex flex-col flex-wrap w-4/5 mx-auto'>
                    <Zoom>
                        <div className='items-center flex justify-center'><h1 className='text-center text-xl text-white pb-8 poppins pt-3'>Calculate the Risk of having stillbirth</h1>
                        </div>
                    </Zoom>
                    <Zoom left>
                            <div className='items-center flex justify-around mx-0 text-white sm:flex-row flex-col gap-8 sm:gap-0'>
                                <div className='bg-transparent flex flex-col justify-center'>
                                    
                                    <button className='border mx-auto p-4 w-1/2 hover:text-black hover:bg-gray-100' type="button" onClick={() => history.push('/doctorForm')}><img  src={Doctor}></img>Are You a doctor?</button>
                                </div>
                                <div className='bg-transparent flex flex-col justify-center'> 
                                    
                                    <button className='bg-white mx-auto w-1/2 text-black border p-4 hover:text-white hover:bg-transparent' type="button" onClick={() => history.push('/patientForm')}><img src={Patient}></img>Are You a Patient?</button>
                                </div>  
                            </div>
                    </Zoom>

                </div>
            </div>
        </section>
    )
}

export default CheckupScreen