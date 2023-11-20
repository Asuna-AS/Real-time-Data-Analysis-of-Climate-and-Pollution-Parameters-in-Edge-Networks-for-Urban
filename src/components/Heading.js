import React from 'react';
import Zoom from 'react-reveal/Zoom';

const Heading = ({title}) => {
    return (
        <Zoom>
            <div className="flex flex-col pb-4">
                <h1 className="text-white poppins font-semibold text-3xl">Our <span className="text-black lg:text-4xl select-none">{title}</span></h1>
                <div className="bg-white w-8 h-1 mt-2 rounded-full"></div>
            </div>
        </Zoom>
    )
}

export default Heading
