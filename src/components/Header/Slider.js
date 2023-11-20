import React from 'react';
// import Swiper core and required modules
import SwiperCore, {
    Autoplay,
    Pagination
} from 'swiper';
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";


// install Swiper modules
SwiperCore.use([Pagination, Autoplay]);


const Slider = () => {

    const drugs = [
        { id: 1, img: '' },
        { id: 2, img: '' },
        { id: 3, img: '' },
    ]
    return (
        <div className="w-full">
            <Swiper pagination={true} className="mySwiper shadow-xl" slidesPerView={1} grabCursor={true} loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                speed={350}
            >
                {drugs.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <img className="h-full object-cover rounded-lg " src={item.img} alt={item.id} />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    )
}

export default Slider
