import React from 'react'
import Bounce from 'react-reveal/Bounce';
import 'react-vertical-timeline-component/style.min.css';

const HistoryScreen = () => {
    return (
        <main>
            <section className="flex flex-col gap-10 max-w-screen-xl py-36 mx-auto px-6 overflow-y-hidden">
                {/* heading  */}
                <Bounce left>
                
                    <div className="flex flex-col items-center space-x-2 pb-4">
                    <h1 className="text-white poppins text-3xl">Our {" "} <span className="text-red-200 font-semibold select-none">Hospitals</span></h1>
                        <div className="bg-red-200 flex items-center justify-center w-16 h-1 mt-2 rounded-full"></div>
                    </div> 
                </Bounce>
            </section>
            </main>
    )
}

export default HistoryScreen