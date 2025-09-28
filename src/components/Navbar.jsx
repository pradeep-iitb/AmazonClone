import { FaSearch } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { SlBasket } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import info from "../constants/index.js";


const Navbar = () => {
    return (
        <>
        <nav className='navbar bg-[#121821] lg:h-18 w-[100vw] text-white flex flex-col lg:flex-row md:flex-row justify-between items-center'>
            <div className="navbar1 flex md:mx-0 flex-row md:w-[390px] items-center lg:w-60">
                <div className="logo flex flex-row w-[100vw] justify-evenly md:justify-center md:w-[390px]  md:gap-4 mx-3 items-center h-16 lg:w-40  ">
                    <IoMenu className="h-10 w-10 lg:w-10 md:block lg:hidden text-white md:mx-0.5" />
                    <a href='www.amazon.com'><img className='h-13 pt-3 ml-5 md:m-0 rounded-md border border-transparent hover:border-white transition' src='src\assets\Images\White-Amazon-Logo-PNG-HD-Quality.png'></img></a>
                    <span className="flex flex-row items-center md:block md:flex-row lg:hidden ">Sign in <span className="flex"><SlArrowRight className="h-3 w-3" /> <FaUser className="h-3 w-3" /></span></span>
                    <div className="flex" ><SlBasket className="h-6 lg:w-6 md:block lg:hidden text-white cursor-pointer" />
                    <span className='text-[1rem] md:block lg:hidden font-bold h-auto '>Cart</span> </div>
                </div>

                <div className='delivery text-white lg:flex flex-row h-16 w-22 rounded-md border border-transparent hover:border-white transition hidden items-center'>
                    <img src='src\assets\Images\map.png' className='h-5 hidden lg:block' />
                    <div id="address" className='flex flex-col justify-center'>
                        <span className='text-[0.7rem] h-auto hidden lg:block'>Deliver to</span>
                        <span className='text-[1rem] font-bold h-auto hidden lg:block'>India</span>
                    </div>
                </div>
            </div>

            <div className="navbar2">
                <div className="searchbar flex flex-row items-center h-18 md:mr-5 m-auto lg:m-0">
                    <div className="navleft flex flex-row items-center justify-center text-black bg-[#e7e6e7] h-10 w-16 gap-3 rounded-l-md">
                        <span className="opacity-90 ">All</span>
                        <SlArrowDown className="h-4 w-4 cursor-pointer" /></div>
                    <div className="searchbox h-10 md:w-[40vw] lg:w-[40vw] w-[70vw] m-auto lg:m-0 justify-start flex bg-blue-50 text-black "><input type="text" placeholder="Search" className="p-2 rounded-md md:w-[40vw] lg:w-[40vw] w-[70vw]" /></div>
                    <div className="searchicon ml-0.1 bg-[#ffbd69] rounded-r-md flex justify-center items-center h-10 md:w-8 lg:w-12  w-[12vw]"><FaSearch className=" rounded-r-md text-black text-2xl cursor-pointer" /></div>
                </div>
            </div>
                <div className="language hidden lg:flex flex-row  h-16 w-22 items-center justify-center rounded-md border border-transparent hover:border-white transition gap-1" >
                    <img src='src\assets\Images\7053.jpg' className='hidden lg:block h-6' />
                    <span className=" text-[1rem] hidden lg:block font-bold ">HI</span>
                    <SlArrowDown className="h-4 w-4 hidden lg:block text-white cursor-pointer" />
                </div>

                <div id="SignIn" className='hidden lg:flex flex-col w-35 rounded-md border h-16 border-transparent hover:border-white transition item-center justify-center'>
                    <span className='text-[0.6rem] hidden lg:block h-auto'>Hello , sign in</span>
                    <span className='text-[0.8rem] hidden lg:block font-bold h-auto '>Account & Lists</span>
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
            <img src='src\assets\Images\map.png' className='h-5' /> <p>Deliver to India ....  </p>
        </div>

        <div className="more bg-[#0a112edf] w-full h-12 flex justify-start md:justify-evenly ">
            <ul className="flex justify-start items-center md:justify-evenly gap-6 lg:gap-12 p-3">
                <li><a href="#" className="text-white rounded-md border border-transparent hover:border-white transition h-10 lg:text-[1rem]  lg:flex font-semibold flex-row hidden text-[0.7rem] items-center cursor-pointer hover:underline"><IoMenu className="h-8 w-8 text-white" /><p>All</p></a></li>
                {info.map((item) => (
                    <li key={item.id} className="text-white font-semibold lg:text-[1rem] text-[0.7rem] cursor-pointer rounded-md border border-transparent hover:border-white transition"><a href={item.link}>{item.title}</a></li>
                ))}
            </ul>
        </div>

        </>
    )
}

export default Navbar