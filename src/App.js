import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/SignInPage";
import Home from "./pages/LandingPage"
import Profile from "./pages/ProfilePage";
import Notifications from "./pages/NotificationsPage";
import Settings from "./pages/SettingsPage";
import RegistrationPage from "./pages/RegistrationPage";
import ArtUpload from "./pages/ArtUpload";
import ArtGallery from "./pages/ArtGallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pages/LandingPage.js" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route path="/pages/ProfilePage.js" element={<Navigate to="/profile" />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/pages/NotificationsPage.js" element={<Navigate to="/notifications" />} />
        <Route path="/notifications" element={<Notifications />} />

        <Route path="/pages/SettingsPage.js" element={<Navigate to="/settings" />} />
        <Route path="/settings" element={<Settings />} />
        
        <Route path="/pages/RegistrationPage.js" element={<Navigate to="/RegistrationPage" />} />
        <Route path="/RegistrationPage" element={<RegistrationPage />} />

        <Route path="/pages/ArtUpload.js" element={<Navigate to="/ArtUpload" />} />
        <Route path="/ArtUpload" element={<ArtUpload />} />

        <Route path="/pages/ArtGallery.js" element={<Navigate to="/ArtGallery" />} />
        <Route path="/ArtGallery" element={<ArtGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
