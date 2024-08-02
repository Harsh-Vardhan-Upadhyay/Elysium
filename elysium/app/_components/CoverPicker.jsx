import React, { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter
} from "@/components/ui/dialog";
import CoverOption from '../_shared/CoverOption';
import { Button } from '@/components/ui/button';

function CoverPicker({ children,setNewCover }) {

  const [selectedCover,setSelectedCover]=useState();
  return (
    <div>
      <Dialog>
        <DialogTrigger className='w-full'>
          {children}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Cover</DialogTitle>
            <DialogDescription>
              <div  className= ' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-3'>
                {CoverOption.map((cover, index) => (
                  <div onClick={()=>setSelectedCover(cover?.imageUrl)} key={cover.id || index}
                  className={`${selectedCover==cover?.imageUrl&&'border-primary border-2'} p-1 rounded-md`} > {/* Added unique 'key' prop */}
                    <Image
                      src={cover?.imageUrl}
                      width={200}
                      height={140}
                      className='h-[70px] w-full rounded-md object-cover'
                    />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button type="button" onClick={()=>setNewCover(selectedCover)}>
              Update
            </Button>
          </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CoverPicker;