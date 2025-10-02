import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import info from "../constants/index.js";
import { categories, languages, signInData } from "../constants/index.js";
import { useState } from "react";


const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);
    const [showLanguages, setShowLanguages] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[1]); // Default to Hindi
    const [signIn, setSignIn] = useState(false);

    return (
        <>
        <nav className='navbar bg-[#121821] lg:h-18 w-[100vw] text-white flex flex-col lg:flex-row md:flex-row justify-between items-center'>
            <div className="navbar1 flex md:mx-0 flex-row md:w-[390px] items-center lg:w-60">
                <div className="logo flex flex-row w-[100vw] justify-evenly md:justify-center md:w-[390px]  md:gap-4 mx-3 items-center h-16 lg:w-40  ">
                    <IoMenu className="h-10 w-10 lg:w-10 md:block lg:hidden text-white md:mx-0.5" />
                    <a href='www.amazon.com'><img className='h-13 pt-3 ml-5 md:m-0 rounded-md border border-transparent hover:border-white transition' src='/assets/Images/White-Amazon-Logo-PNG-HD-Quality.png'></img></a>
                    <span className="flex flex-row items-center md:block md:flex-row lg:hidden ">Sign in <span className="flex"><SlArrowRight className="h-3 w-3" /> <FaUser className="h-3 w-3" /></span></span>
                    <div className="flex" ><SlBasket className="h-6 lg:w-6 md:block lg:hidden text-white cursor-pointer" />
                    <span className='text-[1rem] md:block lg:hidden font-bold h-auto '>Cart</span> </div>
                </div>

                <div className='delivery text-white lg:flex flex-row h-16 w-22 rounded-md border border-transparent hover:border-white transition hidden items-center'>
                    <img src='/assets/Images/map.png' className='h-5 hidden lg:block' />
                    <div id="address" className='flex flex-col justify-center'>
                        <span className='text-[0.7rem] h-auto hidden lg:block'>Deliver to</span>
                        <span className='text-[1rem] font-bold h-auto hidden lg:block'>India</span>
                    </div>
                </div>
            </div>

            <div className="navbar2">
                <div className="searchbar flex flex-row items-center h-18 md:mr-5 m-auto lg:m-0">
                    <div onClick={() => setShowCategories(!showCategories)} className="navleft hover:text-black flex flex-row items-center justify-evenly text-black bg-[#e7e6e7] h-10 w-16 rounded-l-md">
                        <span className=" text-gray-600 ">All</span>
                        <div>
                            <div className="dropdown">
                                <div className={`dropdown-content absolute z-20 bg-white text-black shadow-lg rounded-md mt-2 ${showCategories ? "block" : "hidden"}`}>
                                    {categories.map((category) => (
                                        <a key={category.id} href={category.url} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                            {category.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <SlArrowDown className="h-4 w-4 cursor-pointer" /></div>
                    <div className="searchbox h-10 md:w-[40vw] lg:w-[40vw] w-[70vw] m-auto lg:m-0 justify-start flex bg-blue-50 text-black "><input type="text"  placeholder="Search" className="p-2 rounded-md md:w-[40vw] lg:w-[40vw] w-[70vw]" /></div>
                    <div className="searchicon ml-0.1 bg-[#ffbd69] rounded-r-md flex justify-center items-center h-10 md:w-8 lg:w-12  w-[12vw]"><FaSearch className=" rounded-r-md text-black text-2xl cursor-pointer" /></div>
                </div>
            </div>
                <div className="language hidden lg:flex flex-row h-16 w-22 items-center justify-center rounded-md border border-transparent hover:border-white transition gap-1 relative" >
                    <img src='/assets/Images/7053.jpg' className='hidden lg:block h-6' />
                    <div className="relative">
                        <div 
                            onClick={() => setShowLanguages(!showLanguages)}
                            className="flex items-center gap-1 cursor-pointer"
                        >
                            <span className="text-[1rem] hidden lg:block font-bold">{selectedLanguage.code}</span>
                            <SlArrowDown className="h-4 w-4 hidden lg:block text-white cursor-pointer" />
                        </div>
                        <div className={`absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-md py-2 min-w-[120px] z-50 ${showLanguages ? "block" : "hidden"}`}>
                            {languages.map((language) => (
                                <div 
                                    key={language.id} 
                                    onClick={() => {
                                        setSelectedLanguage(language);
                                        setShowLanguages(false);
                                    }}
                                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                                >
                                    <span className="font-medium">{language.code}</span>
                                    <span>{language.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div id="SignIn" className='hidden lg:flex flex-col w-35 rounded-md border h-16 border-transparent hover:border-white transition item-center justify-center relative'>
                    <div 
                        onMouseEnter={() => setSignIn(true)} 
                        onMouseLeave={() => setSignIn(false)}
                        className="flex flex-col items-center justify-center h-full cursor-pointer"
                    >
                        <span className='text-[0.6rem] hidden lg:block h-auto'>Hello, sign in</span>
                        <span className='text-[0.8rem] hidden lg:block font-bold h-auto'>Account & Lists</span>
                    </div>
                    
                    <div 
                        className={`absolute top-full right-0 mt-2 bg-white text-black shadow-2xl rounded-md py-4 px-6 min-w-[400px] z-50 transition-all duration-200 ${signIn ? "opacity-100 visible" : "opacity-0 invisible"}`}
                        onMouseEnter={() => setSignIn(true)} 
                        onMouseLeave={() => setSignIn(false)}
                    >
                        {/* Sign In Button */}
                        <div className="text-center mb-4">
                            <button className='bg-yellow-400 text-black px-20 py-2 rounded-md hover:bg-yellow-500 transition-colors duration-200 font-medium'>
                                Sign in
                            </button>
                            <p className='text-sm text-gray-600 mt-2'>
                                New customer? 
                                <a href="https://www.amazon.in/ap/register" className='text-blue-600 hover:underline ml-1'>
                                    Start here.
                                </a>
                            </p>
                        </div>
                        
                        {/* Two Column Layout */}
                        <div className="flex gap-8">
                            {/* Your Lists */}
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-3">Your Lists</h3>
                                <ul className="space-y-2">
                                    {signInData.yourLists.map((item) => (
                                        <li key={item.id}>
                                            <a href={item.url} className="text-sm text-gray-700 hover:text-orange-600 hover:underline">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Your Account */}
                            <div className="flex-1">
                                <h3 className="font-bold text-gray-900 mb-3">Your Account</h3>
                                <ul className="space-y-2">
                                    {signInData.yourAccount.map((item) => (
                                        <li key={item.id}>
                                            <a href={item.url} className="text-sm text-gray-700 hover:text-orange-600 hover:underline">
                                                {item.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="Orders" className='hidden lg:flex flex-col rounded-md h-16 w-25 items-center border border-transparent hover:border-white transition justify-center'>
                    <span className='text-[0.8rem] h-auto'>Returns</span>
                    <span className='text-[0.9rem] font-bold h-auto '> & Orders</span>
                </div>

                <div className="cart hidden lg:flex flex-row items-center h-16 w-25 rounded-md border cursor-pointer border-transparent hover:border-white transition justify-center gap-1 mr-5">
                    <SlBasket className="lg:h-6 h-12 w-12 lg:w-6 hidden lg:block text-white cursor-pointer" />
                    <span className='text-[1rem] hidden lg:block font-bold h-auto '>Cart</span>
                </div>
        </nav>
        <div className="deliver w-full h-10 bg-[#121821] text-white lg:hidden flex justify-center gap-5 items-center">
            <img src='/assets/Images/map.png' className='h-5' /> <p>Deliver to India ....  </p>
        </div>

        <div className="more bg-[#0a112edf] w-full h-12 flex justify-start md:justify-evenly ">
            <ul className="flex justify-start items-center md:justify-evenly gap-6 lg:gap-12 p-3">
                <li><a href="#" className="text-white rounded-md border border-transparent hover:border-white transition h-10 lg:text-[1rem]  lg:flex font-semibold flex-row hidden text-[0.7rem] items-center cursor-pointer "><IoMenu className="h-8 w-8 text-white" /><p>All</p></a></li>
                {info.map((item) => (
                    <li key={item.id} className="text-white h-11 flex justify-center items-center font-semibold lg:text-[1rem] text-[0.7rem] cursor-pointer rounded-md border border-transparent hover:border-white transition"><a href={item.link}>{item.title}</a></li>
                ))}
            </ul>
        </div>

        </>
    )
}

export default Navbar