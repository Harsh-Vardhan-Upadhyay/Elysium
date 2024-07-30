import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Header from '/Users/harshvardhanupadhyay/Elysium/elysium/app/(routes)/dashboard/_components/Header.jsx'
import WorkspaceList from './_components/WorkspaceList'

function dashboard() {
  return (
    <div>
      <Header/>
      <WorkspaceList/>

    </div>
  )
}

export default dashboard
