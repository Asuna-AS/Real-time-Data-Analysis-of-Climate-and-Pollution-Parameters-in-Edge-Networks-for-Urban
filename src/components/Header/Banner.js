import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';
import frontImg from '../Header/1.png'
import hp2 from './side.png'
import Faq from 'react-faq-component';
const Banner = () => {
    const history = useHistory();
    const data = {
        title: "FAQ's",
        rows: [
            {
                title: "What is Stillbirth?",
                content: "A baby who dies after 28 weeks of pregnancy, but before or during birth, is classified as a stillbirth. <br> There are nearly 2 million stillbirths every year – one every 16 seconds. Over 40% of all stillbirths occur during labour – a loss that could be avoided with improved quality and respectful care during childbirth including routine monitoring and timely access to emergency obstetric care when required."
            },
            {
                title: "Why it is important to take a test?",
                content: "You might have no idea if u can have a chance of stillbirth or not. It is equally important to take the test. <br> Stillbirth is further classified as either early, late, or term. <ul style='list-style-type: disc; padding-left: 30px; display:flex; flex-direction: column;'><li>An <b>early</b> stillbirth is a fetal death occurring between 20 and 27 completed weeks of pregnancy.</li><li>A <b>late</b> stillbirth occurs between 28 and 36 completed pregnancy weeks.</li><li>A <b>term</b> stillbirth occurs between 37 or more completed pregnancy weeks.</li></ul>"
            },
            {
                title: "How the prediction is done?",
                content: "Our Stillbirth risk calculator predicts the outcome using machine learning models which are developed by us. Mainly there are 3 models currently developed based on the 3 major contributing features in stillbirth (fetal, maternal and placental)."
            }]
    }

    return (
        <section className="max-w-screen-xl mx-auto pt-16">
            <div className="flex flex-col md:flex-row px-6 items-center justify-around gap-10 pt-8">
                <Zoom left>
                    <div className="flex w-4/5 flex-col justify-center m-auto h-full space-y-6">
                        <div className="flex flex-col">
                            {/* <img className="w-24" src="../../../assets/banner/medal.png" alt="banner" /> */}
                            <h1 className="poppins text-white font-semibold text-3xl lg:text-5xl"><p className='leading-tight'>Life's biggest miracle is the gift of life growing inside you.</p></h1>
                            <p className="text-white text-light text-xl pt-4"></p>
                        <div className='flex text-white text-center font-semibold text-xl'>Calculate the risk of stillbirth.</div>
                        </div>
                        <div className="bg-white md:w-8 w-full h-1 rounded-full"></div>
                        {/* button  */}
                        <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-2">
                            <button className="bg-blue-900 text-white rounded-lg hover:bg-white py-3 px-4 hover:text-black poppins w-48" onClick={() => history.push('/checkup')}>Get Started <span className='text-lg' aria-hidden="true">&rarr;</span></button>
                            <button className="rounded-lg bg-transparent border-2 border-white py-3 px-4 text-white poppins w-48 hover:bg-white hover:text-black shadow-lg" text="Reach us" onClick={() => history.push('/contact')}>Reach Us</button>
                        </div>
                        
                    </div>
                </Zoom>

                <Zoom right>
                    <div className="w-1/2">
                        <img src={hp2} width={462.33} alt="banner" />
                    </div>
                </Zoom>
            </div>
            <div className="flex flex-col px-12 items-center justify-cente">
                <Zoom left>
                    {/* <div className="flex flex-row justify-evenly h-full">
                        <div className="flex flex-col w-2/5 p-4 gap-5">
                            <h1 className="poppins text-black font-semibold text-3xl lg:text-3xl leading-relaxed"><span className="lg:text-5xl ">What is Stillbirth?</span></h1>
                            <p className="text-gray-700 text-light text-xl">Stillbirth generally refers to a birth at ≥ 20 weeks of gestation with no signs of life.
                                The incidence, risk factors, and etiology of stillbirth, as well as strategies for prevention, will
                                be reviewed here. Diagnosis and management of stillbirth, parental support and counseling,
                                and pathology evaluation are discussed separately.</p>
                        </div>
                        <div className="flex flex-row flex-wrap gap-5 ">
                            <img src={frontImg} width={300}></img>
                        </div>

                    </div> */}
                </Zoom>

                <Zoom right>
                    
                        <div className=''>
                            <Faq data={data} styles={{
                                bgColor: "transparent",
                                titleTextColor: "white",
                                rowTitleColor: "white",
                                rowTitleTextSize: 'large',
                                rowContentColor: "white",
                                rowContentTextSize: '16px',
                                rowContentPaddingTop: '10px',
                                rowContentPaddingBottom: '10px',
                                rowContentPaddingLeft: '50px',
                                arrowColor: "white",
                            }} config={{
                                tabFocus:true
                            }} />
                        </div>
                    
                </Zoom>
            </div>

        </section>
    )
}

export default Banner
