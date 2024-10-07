import React, { useState, useEffect, useRef } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, Routes, Route } from 'react-router-dom';
import NavbarContents from './NavbarContents';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (

        <div>
            <IconContext.Provider value={{ color: '#fff' }}>
                {/* Navbar */}
                <div className="bg-gray-800 h-20 flex items-center z-50 text-center text-white text-4xl justify-center">
                    <div className="flex-1 flex justify-start ml-8">
                        <Link to="#" className="text-2xl">
                            <FaIcons.FaBars onClick={showSidebar} className="text-white cursor-pointer" />
                        </Link>
                    </div>
            
                    <div className="flex-1 flex justify-end mr-8"></div>
                </div>

                {/* Sidebar */}
                <nav className={`bg-gray-800 w-60 h-screen flex z-30 justify-center fixed top-0 transition-all duration-350 ${sidebar ? 'left-0' : '-left-full'}`}>
                    <ul className="w-full">
                        <li className="bg-gray-800 h-20 flex items-center justify-start">
                            <div className="ml-8 text-2xl cursor-pointer">
                                <AiIcons.AiOutlineClose className="text-white" onClick={showSidebar} />
                            </div>
                        </li>
                        {NavbarContents.map((item, index) => (
                            <li key={index} className="flex items-center h-16 px-4">
                                <Link
                                    to={item.path}
                                    className="w-full h-full flex items-center text-white text-lg no-underline hover:bg-blue-600 transition-colors duration-200 rounded-md"
                                >
                                    {item.icon}
                                    <span className="ml-4">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {NavbarContents.map((item, index) => (
                    <Link key={index} to={item.path} />
                ))}

            </IconContext.Provider>
        </div>
    );
}

export default Navbar;
