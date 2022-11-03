import React from 'react'
import { Flex, Button, Image } from '@aws-amplify/ui-react'
import { FaHome, FaUser, FaBell, FaEllipsisH, FaUpload } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, MenuButton} from '@aws-amplify/ui-react';
import './NavBar.css'
import SignOutButton from './SignOutButton';

import logo from "../logo.png"

const NavBar = () => {
  const navigate=useNavigate();

  return (
    <nav className="navbar">
       
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem">

        <Image 
          className="navbar-logo"
          alt="Art Guardian Logo"
          src={logo}
          width="15%"
          height="auto"
          onClick={() => {navigate('../pages/LandingPage.js')}} />

        <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="rem">
          <Button variation="menu" size="large" onClick={() => {navigate('../pages/LandingPage.js')}}>
            <FaHome
              ariaLabel="Home"
              fill='white'
              />
          </Button>

<Menu     trigger={
      <MenuButton variation="primary" size="large" width="40%">
        <FaUser
              ariaLabel="Profile"
              fill='white'
              />
      </MenuButton>
    }>

<MenuItem onClick={() => {navigate('../pages/ProfilePage.js')}}>Profile</MenuItem>
<MenuItem onClick={() => {navigate('../pages/UserArtGalleryPage.js')}}>Art Gallery and Upload</MenuItem>
</Menu>
            

          <Button variation="menu" size="large" onClick={() => {navigate('../pages/NotificationsPage.js')}}>
            <FaBell
              ariaLabel="Notifications"
              fill='white'
              />
          </Button>
          <Button variation="menu" size="large" onClick={() => {navigate('../pages/SettingsPage.js')}}>
            <FaEllipsisH
              ariaLabel="Settings"
              fill='white'
              />
          </Button>
          <SignOutButton/>
        </Flex>
      </Flex>
    </nav>
  )
}

export default NavBar