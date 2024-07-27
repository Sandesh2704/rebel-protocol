import React from 'react'

export default function Footer() {
    return (
        <>
            <div className='bg-black/50 w-full  py-6  mx-auto flex items-center justify-center md:justify-between flex-wrap py-2 px-3 sm:px-7 lg:px-28 text-sm  font-medium gap-y-5 border-t-2 border-t-[#FFFFFF1A]' >
                <div className="flex justify-center md:justify-start">
                    <p className='hover:text-[#cc3cd9] text-center pr-2 border-r-2 border-r-[#FFFFFF1A]  hover:underline underline-offset-4 '>Privacy Policy</p>
                    <p className='hover:text-[#cc3cd9] text-center px-2  border-r-2 border-r-[#FFFFFF1A]  hover:underline underline-offset-4 '>Terms And Condition</p>
                    <p className='hover:text-[#cc3cd9] text-center pl-2  hover:underline underline-offset-4 '>Contact Us</p>
                </div>
                <p className='text-center'>@Rebel</p>
            </div>
        </>
    )
}
