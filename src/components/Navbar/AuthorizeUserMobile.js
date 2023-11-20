import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { useHistory } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import useOrder from '../../hooks/useOrder';
import Button from '../Form/Button';

const AuthorizeUserMobile = () => {
    const { user, signOutUser } = useAuth();
    const history = useHistory();
    const { orders } = useOrder();

    return (
        <>
            {
                user.displayName ? (
                    <>
                        <div className="flex flex-col items-center">
                            {!user.photoURL.endsWith("g") ? (<img src="https://cdn-icons-png.flaticon.com/512/236/236832.png" alt={user.displayName} className="w-10 h-10 rounded-full" />) : (
                                <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
                            )}
                            <Button className="btn-primary w-full py-3 poppins" onClick={signOutUser} text="Logout" />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex flex-row items-center justify-center space-x-6">
                            <button className="text-black text-sm border-2 p-3 rounded-xl poppins hover:text-white hover:bg-black hover:border-black" onClick={() => history.push('/signin')}>Sign In</button>
                            <button className="text-sm text-white bg-black p-4 poppins rounded-xl hover:bg-white hover:text-black" onClick={() => history.push('/signup')}>Sign Up</button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default AuthorizeUserMobile
