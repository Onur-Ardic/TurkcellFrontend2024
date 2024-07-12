'use client'
import { useSelector } from 'react-redux';
import Logout from '../LogOut';

const UserPage = () => {
    const currentUser = useSelector((state) => state.user.loggedInUser);

    return (
        <main className='container mt-5' style={{ height: "60vh" }}>
            {
                currentUser ? (<>
                    <h2>Hoşgeldin, {currentUser}</h2>
                    <Logout />
                </>) : ""
            }

        </main>
    );
};

export default UserPage;
