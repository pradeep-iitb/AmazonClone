import React from 'react'

const SignIn = () => {
  return (
    <div className='flex relative border-t-gray-500 border-b-gray-500 top-15 flex-col items-center justify-center '>
        <span className='font-bold text-xl px-2 py-1 text-black'>See personalized recommendations</span>
        <button className='bg-yellow-400 text-black px-30 py-2 rounded-4xl mt-4 hover:bg-yellow-500 active:scale-95 transition-transform duration-100'>Sign in</button>
        <span className='text-sm text-gray-600 mt-4 px-2 py-1'>New customer? <a href="https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex" className='text-blue-600 hover:underline'>Start here.</a></span>
    </div>  
  )
}

export default SignIn