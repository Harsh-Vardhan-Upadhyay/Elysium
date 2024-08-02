"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SmilePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "/Users/harshvardhanupadhyay/Elysium/elysium/app/_components/EmojiPickerComponent.jsx"

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.jpg");
  const [workspaceName, setWorkspaceName] = useState();
  const [emoji,setEmoji]=useState();

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">

      <CoverPicker setNewCover={(v)=>setCoverImage(v)}>

        <div className="relative group cursor-pointer">
          <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center ">
            Change Cover
          </h2>
          <div className="group-hover:opacity-50">
            {" "}
            <Image
              src={coverImage}
              width={400}
              height={400}
              className="w-full h-[150px] object-cover rounded-t-xl"
            />
          </div>
        </div>
        </CoverPicker >


      {/* Input section */}

      <div className="p-12">
        <h2 className="font-medium text-xl">Create New Workspace</h2>
        <h2 className="text-sm mt-2">
          This is a shared space where you can collaborate with your team. You
          can always rename it later
        </h2>

        <div className="mt-8 flex justify-center gap-2">
          <EmojiPickerComponent setEmojiIcon={(v)=>setEmoji(v)}>
          <Button variant="outline">
           {emoji?emoji: <SmilePlus />}
          </Button>
          </EmojiPickerComponent>
          <Input
            placeholder="Workspace Name"
            onChange={(e) => setWorkspaceName(e.target.value)}
          />
        </div>

        <div className="mt-7 flex gap-4 justify-end">
          <Button disabled={!workspaceName?.length}>Create</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default CreateWorkspace;
