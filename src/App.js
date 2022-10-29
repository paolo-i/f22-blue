import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/SignInPage";
import Home from "./pages/LandingPage";
import Profile from "./pages/ProfilePage";
import Notifications from "./pages/NotificationsPage";
import Settings from "./pages/SettingsPage";
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
          path="/pages/ProfilePage.js"
          element={<Navigate to="/profile" />}
        />
        <Route path="/profile" element={<Profile />} />

        <Route
          path="/pages/NotificationsPage.js"
          element={<Navigate to="/notifications" />}
        />
        <Route path="/notifications" element={<Notifications />} />

        <Route
          path="/pages/SettingsPage.js"
          element={<Navigate to="/settings" />}
        />
        <Route path="/settings" element={<Settings />} />

        <Route
          path="/pages/LoginAndRegistrationPage.js"
          element={<Navigate to="/settings" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
