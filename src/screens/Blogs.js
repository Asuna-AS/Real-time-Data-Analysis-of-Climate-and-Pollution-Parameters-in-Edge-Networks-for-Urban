import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Heading from '../components/Heading';
import useFetch from '../hooks/useFetch';
import fit from "../fit.png" 
import yb from "../yoga-brain.png" 
import yh from "../yoga-heart.png" 
const Blogs = () => {
    const [data] = useFetch('products');

    return (
        <section className="flex flex-col pt-40 px-24 items-center justify-evenly">
            {/*heading*/}
            <div>
            <Heading title="Blogs"/>
            </div>  
            {/* products  */}
            <div className="flex flex-col md:w-9/12 md:flex-row gap-5 mt-4">
                <Zoom left>
                <div style={{boxShadow: '1px 1px 20px white'}} className='bg-transparent p-4 rounded-lg shadow-xl shadow-cyan-500 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-200 hover:text-black hover:shadow- duration-300'><a href='https://www.credihealth.com/blog/things-to-do-to-stay-fit-and-healthy/'><img src={fit}></img><p className='text-center poppins pt-3'>How to stay fit and Healthy?</p></a></div>
                <div className='bg-white p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-200 hover:text-black duration-300'><a href="https://www.healthifyme.com/blog/best-indian-diet-plan-weight-loss/"><img src={yh}></img><p className='text-center poppins pt-3'>Diet chart to keep your body healthy</p></a></div>
                </Zoom>
                <Zoom right>
                <div className='bg-white p-4 rounded-lg shadow-lg shadow-cyan-500/50 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-200 hover:text-black duration-300'><a href="https://www.medicalnewstoday.com/articles/160774/"><img src={yb}></img><p className='text-center poppins pt-3'>Nutrition</p></a></div>
                </Zoom>
            </div>

        </section>
    )
}

export default Blogs
