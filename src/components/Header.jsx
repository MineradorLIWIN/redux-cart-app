import React from 'react';
import { FaStoreAlt, FaHome, FaShoppingCart } from "react-icons/fa";
import SearchBar from './SearchBar';
import { NavLink, Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-900 text-gray-100 shadow-md py-3">
            <div className="max-w-7xl mx-auto px-4 flex items-center max-[450px]:justify-center justify-between flex-wrap gap-4">
                <Link to='/' className="logo flex items-center space-x-2">
                    <FaStoreAlt className="text-xl text-emerald-400" />
                    <h1 className="text-xl font-medium">Redux-Shop</h1>
                </Link>

                <div className="w-full md:w-1/2 mx-4 max-md:order-3">
                    <SearchBar />
                </div>

                <nav className="flex items-center space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex items-center space-x-1 hover:text-emerald-300 ${isActive ? 'text-emerald-400' : ''}`
                        }
                    >
                        <FaHome className="text-lg" />
                        <span>Home</span>
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className={({ isActive }) =>
                            `flex items-center space-x-1 hover:text-emerald-300 ${isActive ? 'text-emerald-400' : ''}`
                        }
                    >
                        <FaShoppingCart className="text-lg" />
                        <span>Cart</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;