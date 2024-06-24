import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../Actions/User';
import img from '../../../public/th.jpeg'

const Header = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <header className=" bg-slate-500 text-white py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <Link to="/" className="flex items-center space-x-2">
                    <img
                        src={img} // Replace with your logo URL
                        alt="Logo"
                        className="h-8 w-8"
                    />
                    <h1 className="text-xl sm:text-2xl font-bold">Ecommerce</h1>
                </Link>
                
                <nav className="flex items-center space-x-4">
                    <Link to="/" className="text-lg hover:text-gray-300">Products</Link>
                    <Link to="/cart" className="text-lg hover:text-gray-300">Cart</Link>
                    <Link to="/orders" className="text-lg hover:text-gray-300">Orders</Link>
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-2">
                            <Avatar src="/broken-image.jpg" alt="User Avatar" />
                            <button
                                onClick={handleLogout}
                                className="text-lg hover:text-gray-300"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <Link to="/login" className="text-lg hover:text-gray-300">Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
