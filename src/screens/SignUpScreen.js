import React, { useState } from 'react'
import Bounce from 'react-reveal/Bounce'
import { Link } from 'react-router-dom'
import Button from '../components/Form/Button'
import GoogleSignIn from '../components/Form/GoogleSignIn'
import TextField from '../components/Form/TextField'
import useAuth from '../hooks/useAuth'
import su from "../signup.png"
const SignUpScreen = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        image: '',
        password: '',
    })
    const { signUpUser } = useAuth()
    //form inputs
    const Inputs = [
        { id: 1, type: "text", placeholder: "Name", value: `${userInput.name}`, name: 'name' },
        { id: 2, type: "email", placeholder: "Email", value: `${userInput.email}`, name: 'email' },
        { id: 3, type: "text", placeholder: "Profile Picture Link", value: `${userInput.image}`, name: 'image' },
        { id: 4, type: "password", placeholder: "Password", value: `${userInput.password}`, name: 'password' },
    ]

    //handle change 
    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserInput(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    //handle submit form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        await signUpUser(userInput.email, userInput.password, userInput.name, userInput.image)
    }

    return (
        <main className="flex md:flex-row flex-col-reverse justify-around pt-32">
            
                {/* form  */}
                <Bounce left>
                    <div className="flex md:flex-row flex-col justify-center items-center pt-10">
                        {/* logo  */}
                        {/* sign up form  */}
                        <form className="bg-white mt-6 p-6 rounded-lg md:w-96 w-72 shadow-lg shadow-cyan-500/50" onSubmit={handleSubmit}>
                        <div className='text-center pb-5'><h1 className="text-2xl font-semibold text-black brand-font select-none">Sign Up</h1></div>
                            <div className="flex flex-col space-y-6">
                                {Inputs.map(input => (
                                    <TextField
                                        key={input.id}
                                        type={input.type}
                                        placeholder={input.placeholder}
                                        value={input.value}
                                        name={input.name}
                                        onChange={handleChange}
                                    />
                                ))}
                            </div>
                            <Button text ="Sign Up" />
                            <Link to ="/signin">
                                <p className="text-base text-primary text-center my-6 hover:underline">Already have an account ?</p>
                            </Link>
                            <GoogleSignIn text="Sign Up With Google" />
                        </form>
                    </div>
                </Bounce>
                {/* imagee  */}
                <Bounce right>
                    <div className="flex items-center justify-center">
                        <img className="md:w-96 w-64 pt-8" src={su} alt="signup" />
                    </div>
                </Bounce>
            
        </main>
    )
}

export default SignUpScreen
