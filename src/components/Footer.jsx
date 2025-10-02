import React, { useState } from 'react'
import { AiOutlineGlobal } from "react-icons/ai";
import { PiCaretUpDownFill } from "react-icons/pi";
import { Get_to_Know_Us, Connect_with_Us , Make_Money_with_Us , Let_us_Help_You, languages } from '../constants/index.js';

const Footer = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English
  return (<div className='footer bg-white h-20 w-full '>
  <div className='w-full py-3 relative bg-[#37475a] top-30 text-white flex justify-center items-center ' ><span className='p-2'><a href='#'>Back to Top</a></span></div>
  <div className='w-full relative top-30 bg-[#222f3e] text-white text-[0.8rem] flex justify-evenly items-centre flex-row '>
    <div className='w-full h-auto py-10 px-20 flex flex-row justify-evenly items-start gap-20'>
    <div className="know">
      <span className='font-extrabold'>Know More</span>
      {Get_to_Know_Us.map((item) => (
        <div key={item.id}>
          <a href='#'>{item.title}</a>
        </div>
      ))}
    </div>
    <div className="connect">
      <span className='font-extrabold'>Connect with Us</span>
      {Connect_with_Us.map((item) => (
        <div key={item.id}>
          <a href='#'>{item.title}</a>
        </div>
      ))}
    </div>
    <div className="money">
      <span className='font-extrabold'>Money Matters</span>
      {Make_Money_with_Us.map((item) => (
        <div key={item.id}>
          <a href='#'>{item.title}</a>
        </div>
      ))}
    </div>
    <div className="help">
      <span className='font-extrabold'>Help Centre</span>
      {Let_us_Help_You.map((item) => (
        <div key={item.id}>
          <a href='#'>{item.title}</a>
        </div>
      ))}
    </div>
    </div>
  </div>
  <div className="language bg-[#222f3e] flex flex-row justify-center items-center w-full text-white border-t-[#5e646a] border-t-2 gap-10 relative top-30">
    <div className="logo p-5 m-5 relative top-2 h-20 w-40 " ><a href='www.amazon.in'><img src='public/assets/Images/White-Amazon-Logo-PNG-HD-Quality.png' /></a></div>
    <div className="languageandcountry flex flex-row justify-center items-center space-x-4 p-5">
      <div className="relative">
        <button 
          onClick={() => setShowLanguages(!showLanguages)}
          className='bg-[#222f3e] flex flex-row justify-center items-center py-2 px-8 rounded-md border-2 border-[#5e646a] relative'
        > 
          <AiOutlineGlobal />
          <span className='px-2'>{selectedLanguage.name}</span>
          <PiCaretUpDownFill />
        </button>
        <div className={`absolute bottom-full left-0 mb-2 bg-white text-black shadow-lg rounded-md py-2 min-w-[150px] z-50 ${showLanguages ? "block" : "hidden"}`}>
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
      <button className='bg-[#222f3e] flex flex-row justify-center items-center py-2 px-8 rounded-md border-2 border-[#5e646a]'>
        <img src='/assets/Images/7053.jpg' className='w-5 h-5'/>
        <span className='px-2'>India</span>
      </button>
    </div>
  </div>
  
  <div className='w-full bg-[#121b23] flex flex-col justify-center items-center py-5 text-white relative top-30' >
    <pre>Conditions of Use & SalePrivacy Notice   Privacy Notice   Interest-Based Ads</pre>
    <pre>© 1996-2025, Amazon.com, Inc. or its affiliates</pre>
  </div>
  </div>
  )
}

export default Footer