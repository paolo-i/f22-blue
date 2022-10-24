import React from 'react'
import { Tabs, TabItem } from '@aws-amplify/ui-react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
        <h1>Art Guardian</h1>
        <Tabs className='amplify-tabs' justifyContent="flex-end" gap="2rem">
            <TabItem title="1"></TabItem>
            <TabItem title="2"></TabItem>
            <TabItem title="3"></TabItem>
            <TabItem title="4"></TabItem>
        </Tabs>
    </nav>
  )
}

export default NavBar