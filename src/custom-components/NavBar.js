import React from "react";
import { Flex, Button, Image } from "@aws-amplify/ui-react";
import { FaHome, FaBell, FaCog } from "react-icons/fa";
import { TfiGallery } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, MenuButton } from "@aws-amplify/ui-react";
import "./NavBar.css";
import SignOutButton from "./SignOutButton";

import logo from "../logo.png";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Flex
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        alignContent="flex-start"
        wrap="nowrap"
        gap="1rem"
      >
        <Image
          className="navbar-logo"
          alt="Art Guardian Logo"
          src={logo}
          width="15%"
          height="auto"
          onClick={() => {
            navigate("../pages/LandingPage.js");
          }}
        />

        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="rem"
        >
          <Button
            variation="menu"
            size="large"
            onClick={() => {
              navigate("../pages/LandingPage.js");
            }}
          >
            <FaHome ariaLabel="Home" fill="white" />
          </Button>

          <Button
            variation="menu"
            size="large"
            onClick={() => {
              navigate("../pages/UserArtGalleryPage.js");
            }}
          >
            <TfiGallery ariaLabel="Gallery" fill="white" />
          </Button>

          <Menu
            trigger={
              <MenuButton variation="menu" size="large">
                <FaBell ariaLabel="Alerts" fill="white" />
              </MenuButton>
            }
          >
            <MenuItem
              onClick={() => {
                navigate("../pages/NotificationsPage.js");
              }}
            >
              Notifications
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("../pages/CatalogingPage.js");
              }}
            >
              Cataloging
            </MenuItem>
          </Menu>

          <Button
            variation="menu"
            size="large"
            onClick={() => {
              navigate("../pages/SettingsPage.js");
            }}
          >
            <FaCog ariaLabel="Settings" fill="white" />
          </Button>
          <SignOutButton />
        </Flex>
      </Flex>
    </nav>
  );
};

export default NavBar;
