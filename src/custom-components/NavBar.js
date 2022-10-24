import React from 'react'
import { Flex, Button } from '@aws-amplify/ui-react'
import { FaHome, FaUser, FaBell, FaEllipsisH } from 'react-icons/fa';
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem">

        <h1>Art Guardian</h1>

        <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem">
          <Button variation="menu" size="large">
            <FaHome
              ariaLabel="Home"
              fill='white'
              />
          </Button>
          <Button variation="menu" size="large">
            <FaUser
              ariaLabel="Profile"
              fill='white'
              />
          </Button>
          <Button variation="menu" size="large">
            <FaBell
              ariaLabel="Notifications"
              fill='white'
              />
          </Button>
          <Button variation="menu" size="large">
            <FaEllipsisH
              ariaLabel="Settings"
              fill='white'
              />
          </Button>
        </Flex>
      </Flex>
    </nav>
  )
}

export default NavBar