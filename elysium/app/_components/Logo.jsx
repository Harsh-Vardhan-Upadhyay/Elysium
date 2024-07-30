import Image from 'next/image'
import React from 'react'

function logo() {
  return (
    <div className='flex items-center gap-0'>
      <Image src={'/logo.png'}
      width={35} height={35}/>
      <h2 className='font-bold text-xl'>Elysium</h2>
    </div>
  )
}

export default logo
