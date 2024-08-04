"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LucideLoader, SmilePlus } from "lucide-react";
import { Input } from "@/components/ui/input";
import CoverPicker from "@/app/_components/CoverPicker";
import EmojiPickerComponent from "/Users/harshvardhanupadhyay/Elysium/elysium/app/_components/EmojiPickerComponent.jsx"
import { setDoc, doc } from "firebase/firestore";  // Correct import statement
import { db } from "@/config/firebaseConfig";
import { useAuth, useUser } from "@clerk/nextjs";

// used to create new workspace and save data in database

function CreateWorkspace() {
  const [coverImage, setCoverImage] = useState("/cover.jpg");
  const [workspaceName, setWorkspaceName] = useState();
  const [emoji, setEmoji] = useState();
  const { user } = useUser();
  const { orgId } = useAuth();
  const [loading, setLoading] = useState(false);

  const onCreateWorkspace = async () => {
    const docId = Date.now();

    setLoading(true);

    await setDoc(doc(db, 'Workspace', docId.toString()), {
      workspaceName: workspaceName,
      emoji: emoji,
      coverImage: coverImage,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      id: docId,
      orgId: orgId ? orgId : user?.primaryEmailAddress?.emailAddress,
    });

    setLoading(false);
    console.log("Data Inserted");
  }

  return (
    <div className="p-10 md:px-36 lg:px-64 xl:px-96 py-28">
      <div className="shadow-2xl rounded-xl">
        <CoverPicker setNewCover={(v) => setCoverImage(v)}>
          <div className="relative group cursor-pointer">
            <h2 className="hidden absolute p-4 w-full h-full items-center group-hover:flex justify-center ">
              Change Cover
            </h2>
            <div className="group-hover:opacity-50">
              <Image
                src={coverImage}
                width={400}
                height={400}
                className="w-full h-[150px] object-cover rounded-t-xl"
              />
            </div>
          </div>
        </CoverPicker>

        {/* Input section */}
        <div className="p-12">
          <h2 className="font-medium text-xl">Create New Workspace</h2>
          <h2 className="text-sm mt-2">
            This is a shared space where you can collaborate with your team. You
            can always rename it later.
          </h2>

          <div className="mt-8 flex justify-center gap-2">
            <EmojiPickerComponent setEmojiIcon={(v) => setEmoji(v)}>
              <Button variant="outline">
                {emoji ? emoji : <SmilePlus />}
              </Button>
            </EmojiPickerComponent>
            <Input
              placeholder="Workspace Name"
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
          </div>

          <div className="mt-7 flex gap-4 justify-end">
            <Button
              disabled={!workspaceName?.length || loading}
              onClick={onCreateWorkspace}
            >
              Create {loading && <LucideLoader className="animate-spin ml-2" />}
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateWorkspace;