import React from 'react';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import userIcon from './userIcon.png';
import logOut from './logOut.png'
const AuthorizeUser = () => {
    const { user, signOutUser } = useAuth();
    const history = useHistory();
    const { orders } = useOrder();

    return (
        <>
            {user.displayName ? (
                <>
                    
                    <div className="flex items-center justify-end gap-4">
                        {!user.photoURL.endsWith("g") ? (<img src={userIcon} alt={user.displayName} className="w-10" />) : (
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full z-50" />
                        )}
                        <div className='flex flex-col'>
                        <p className='text-white'>Welcome!</p>
                        <p className="text-white text-sm poppins hidden md:block lg:block">{user.displayName}</p>
                        </div>
                        <button className="cursor-pointer w-20 h-6 text-sm text-white" onClick={signOutUser}><img src={logOut} className='w-6'></img></button>
                    </div>


                </>
            ) : (
                <div className='flex items-center justify-end space-x-6'>
                    <button className="text-white text-sm border-2 p-3 rounded-xl poppins hover:text-black hover:bg-white" onClick={() => history.push('/signin')}>Sign In</button>
                    <button className="text-sm text-black bg-white p-4 poppins rounded-xl hover: hover:text-black" onClick={() => history.push('/signup')}>Sign Up</button>
                </div>
            )
            }
        </>
    )
}

export default AuthorizeUser



