import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/SignInPage";
import Home from "./pages/LandingPage"
import Profile from "./pages/ProfilePage";
import Notifications from "./pages/NotificationsPage";
import Settings from "./pages/SettingsPage";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
