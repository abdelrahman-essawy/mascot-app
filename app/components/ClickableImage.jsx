"use client"

import Image from 'next/image'
import React from 'react'

function ClickableImage({icon,refreshData}) {

    return (
        <div className='mb-2'>
        {console.log({icon,refreshData})}
            <Image onClick={()=>{refreshData}} src={icon} width={180} height={180} priority={true} className='hidden select-none active:scale-105 active:animate-none hover:animate-pulse  sm:block' />
            <Image  onClick={()=>{refreshData}} src={icon} width={140} height={140} priority={true} className='block  select-none active:scale-105 active:animate-none hover:animate-pulse sm:hidden' />
        </div>
        )
}

export default ClickableImage