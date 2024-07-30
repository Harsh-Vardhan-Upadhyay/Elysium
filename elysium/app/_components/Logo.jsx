import Image from 'next/image'
import React from 'react'

function logo() {
  return (
    <div className='flex items-center gap-0'>
      <Image src={'/logo.png'}
      width={50} height={50}/>
      <h2 className='font-bold text-xl'>Elysiym</h2>
    </div>
  )
}

export default logo
