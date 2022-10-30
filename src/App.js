import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/LandingPage";
import UserArtGallery from "./pages/UserArtGalleryPage";
import Notifications from "./pages/NotificationsPage";
import AccountSettings from "./pages/AccountSettingsPage";
import LoginAndRegistrationPage from "./pages/LoginAndRegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginAndRegister" />} />
        <Route
          path="/LoginAndRegister"
          element={<LoginAndRegistrationPage />}
        />

        <Route path="/pages/LandingPage.js" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/pages/UserArtGalleryPage.js"
          element={<Navigate to="/profile" />}
        />
        <Route path="/profile" element={<UserArtGallery />} />

        <Route
          path="/pages/NotificationsPage.js"
          element={<Navigate to="/notifications" />}
        />
        <Route path="/notifications" element={<Notifications />} />

        <Route
          path="/pages/SettingsPage.js"
          element={<Navigate to="/settings" />}
        />
        <Route path="/accountsettings" element={<AccountSettings />} />

        <Route
          path="/pages/LoginAndRegistrationPage.js"
          element={<Navigate to="/settings" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
