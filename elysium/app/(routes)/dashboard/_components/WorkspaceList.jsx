"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs'
import React from 'react'
import { LayoutGrid, AlignLeft } from "lucide-react";
import { useState } from 'react';
import { ButtonIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

function WorkspaceList() {
    const {user}=useUser();

    const [workspaceList,setWorkspaceList] = useState([]);

  return (
    <div  className='my-10 p-10 md:px-24 lg:px-36 xl:px-52'>
        
        <div className='flex justify-between'>
            <h2 className='font-bold text-2xl'>Hello, {user?.firstName}</h2>
            
            <Link href={'/createworkspace'} >
            <Button >+</Button>
            </Link>
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
     

     {workspaceList?.length==0?
     
     <div className='flex flex-col justify-center items-center my-20 '>
        <h2>Create new Workspace</h2>
        <Link href={'/createworkspace'} >   <Button variant ="outline" className="my-3" >+ New Workspace</Button> </Link>
     </div>
:
    <div>
        Workspace List
    </div>
     }
    </div>
  )
}

export default WorkspaceList
