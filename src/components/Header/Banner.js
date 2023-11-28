import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';
import { useHistory } from 'react-router-dom';
import Button from '../Form/Button';
import frontImg from '../Header/1.png'
import hp2 from './side.png'
import Faq from 'react-faq-component';
import clim from './clim.png'
import "../../styles/button.css"
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
        <section className="max-w-screen-xl h-full mx-auto pt-16">
            <div className="flex flex-col md:flex-row px-6 items-center justify-around gap-10 pt-8">
                <Zoom left>
                    <div className="flex flex-col justify-center py-16 mx-auto h-full space-y-6">
                        <div className="flex flex-col">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" version="1.0" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml: space="preserve"><g><path d="M82,52.2c-1.5-3.1-4.2-5.3-7.4-6.1c-1.8-8.4-8.9-14.4-17.2-14.4c-3.9,0-7.6,1.3-10.7,3.8c-2.3-3.6-6.2-5.9-10.6-5.9   c-6.3,0-11.6,4.8-12.6,11.2c-2.8,0.4-5.1,2.3-6.1,4.9c-3.4,0.1-6.1,3-6.1,6.6c0,2.8,1.6,5.1,3.9,6.1c0,0.1,0,0.1,0,0.2   c-0.1,0.5-0.1,1-0.1,1.6c0,6.2,4.8,11.4,10.7,11.6c0.1,0,0.1,0,0.2,0h55.5c0.1,0,0.3,0,0.4-0.1c4.8-0.5,8.4-4.8,8.4-9.8   C90.3,57,86.7,52.8,82,52.2z M81.3,68.8c-0.1,0-0.1,0-0.2,0h-55c0,0-0.1,0-0.2,0c-4.4-0.1-7.9-3.9-7.9-8.6c0-0.4,0-0.8,0.1-1.2   c0.5-4.2,4-7.4,8-7.4c0.1,0,0.2,0,0.3,0l0.2,0c0.7,0,1.3-0.4,1.5-1c1.5-4.5,5.6-7.6,10.2-7.6c1.4,0,2.8,0.3,4.1,0.9   c0.7,0.3,1.6,0,2-0.7c1-2,2.4-3.8,4.1-5.2c2.6-2.1,5.7-3.3,9-3.3c7.2,0,13.3,5.4,14.5,12.9c0.1,0.7,0.6,1.2,1.3,1.3   c2.9,0.4,5.4,2.4,6.5,5.3c0.2,0.6,0.8,1,1.4,1c3.5,0.1,6.3,3.2,6.3,6.9C87.3,65.6,84.7,68.6,81.3,68.8z" /></g></svg> */}
                            {/* <img className="w-32 mx-auto bg-transparent" src={clim} alt="banner" /> */}
                            <h1 className="poppins text-white font-semibold text-3xl text-center lg:text-5xl"><p className='leading-tight'>Measure AQI</p></h1>
                            <p className="text-white text-light text-xl pt-4"></p>
                            <div className='flex text-white text-center font-semibold text-xl'>Have an advantage of Real Time Climate Analysis</div>
                        </div>
                        {/* <div className="bg-white md:w-8 w-full h-1 rounded-full"></div> */}
                        {/* button  */}
                        <div className="flex flex-col md:flex-row justify-center mx-auto lg:justify-start gap-2">
                            <button className='btn' onClick={() => history.push('/checkup')}><p className='mx-auto'>Analyze <span className='text-lg' aria-hidden="true">&rarr;</span></p></button>
                            <button className='btn' onClick={() => history.push('/contact')}><p className='text-center w-full'>Reach Us</p></button>
                        </div>

                    </div>
                </Zoom>

                {/* <Zoom right>
                    <div className="w-1/2"> */}
                {/* <img src={hp2} width={462.33} alt="banner" /> */}

                {/* </div>
                </Zoom> */}
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

                    {/* <div className=''>
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
                            tabFocus: true
                        }} />
                    </div> */}

                </Zoom>
            </div>

        </section>
    )
}

export default Banner
