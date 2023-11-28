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
                        {!user.photoURL.endsWith("g") ? (
                            <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 0 24 24" fill='#fff' id="account"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>
                        ) : (
                            <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full z-50" />
                        )}
                        <div className='flex flex-col'>
                            <p className='text-white'>Welcome!</p>
                            <p className="text-white text-sm poppins hidden md:block lg:block">{user.displayName}</p>
                        </div>
                        <button className="cursor-pointer" onClick={signOutUser}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' version="1.1" id="Layer_1" x="0px" y="0px" width="45px" height="35px" viewBox="0 0 91.839 122.88" enable-background="new 0 0 91.839 122.88" ><g><path d="M81.75,64.617H41.365c-1.738,0-3.147-1.423-3.147-3.178c0-1.756,1.409-3.179,3.147-3.179h40.383L68.559,43.155 c-1.146-1.31-1.025-3.311,0.271-4.469c1.297-1.159,3.278-1.037,4.425,0.273l17.798,20.383c1.065,1.216,1.037,3.029-0.011,4.21 L73.254,83.92c-1.146,1.311-3.128,1.433-4.425,0.273c-1.296-1.158-1.417-3.16-0.271-4.47L81.75,64.617L81.75,64.617z M70.841,99.629c0-1.756,1.423-3.179,3.178-3.179c1.756,0,3.179,1.423,3.179,3.179v14.242c0,2.475-1.017,4.729-2.648,6.36 c-1.633,1.632-3.887,2.648-6.36,2.648H9.009c-2.475,0-4.73-1.014-6.363-2.646C1.016,118.603,0,116.352,0,113.871V9.009 c0-2.48,1.013-4.733,2.644-6.365C4.275,1.013,6.528,0,9.009,0h59.18c2.479,0,4.731,1.016,6.362,2.646 c1.633,1.633,2.646,3.889,2.646,6.363V23.25c0,1.755-1.423,3.178-3.179,3.178c-1.755,0-3.178-1.423-3.178-3.178V9.009 c0-0.722-0.301-1.385-0.785-1.869c-0.482-0.482-1.144-0.783-1.867-0.783H9.009c-0.726,0-1.389,0.3-1.87,0.782 C6.656,7.62,6.357,8.283,6.357,9.009v104.862c0,0.724,0.301,1.385,0.783,1.867c0.484,0.484,1.147,0.785,1.869,0.785h59.18 c0.72,0,1.381-0.302,1.865-0.786c0.485-0.484,0.787-1.146,0.787-1.866V99.629L70.841,99.629z"/></g></svg>
                        </button>
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



