"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { LayoutGrid, AlignLeft } from "lucide-react";

function WorkspaceList() {
    const {user}=useUser();
  return (
    <div  className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
        
        <div className='flex justify-between'>
            <h2 className='font-bold text-2xl'>Hello, {user?.firstName}</h2>
            <Button>+</Button>
        </div>

        <div className='mt-10' >
            <div className='flex justify-between'>
                <h2 className='font-medium text-gray-500'>
                    Workspaces
                </h2>

                <div className='flex gap-2'>
                    <LayoutGrid/>
                    <AlignLeft/>
                </div>
            </div>
        </div>
     
    </div>
  )
}

export default WorkspaceList
