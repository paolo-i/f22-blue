import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/LandingPage";
import UserArtGallery from "./pages/UserArtGalleryPage";
import Notifications from "./pages/NotificationsPage";
import Profile from "./pages/ProfilePage";
import AccountSettings from "./pages/AccountSettingsPage";
import LoginAndRegistrationPage from "./pages/LoginAndRegistrationPage";
import ESignaturePage from "./pages/ESignaturePage";
import ArtGallery from "./pages/UserArtGalleryPage";
import Settings from "./pages/SettingsPage";
import Confirmation from "./pages/ConfirmationPage";

import Catalog from "./pages/CatalogingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/LoginAndRegister" />} />
        <Route
          path="/LoginAndRegister"
          element={<LoginAndRegistrationPage />}
        />

        <Route
          path="/pages/ConfirmationPage.js"
          element={<Navigate to="/confirmation" />}
        />
        <Route path="/confirmation" element={<Confirmation />}/>

        <Route path="/pages/LandingPage.js" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />

        <Route
          path="/pages/ProfilePage.js"
          element={<Navigate to="/Profile" />}
        />
        <Route path="/Profile" element={<Profile/>} />

        <Route
          path="/pages/NotificationsPage.js"
          element={<Navigate to="/notifications" />}
        />
        <Route path="/notifications" element={<Notifications />} />

        <Route
          path="/pages/SettingsPage.js"
          element={<Navigate to="/settings" />}
        />
        <Route path="/Settings" element={<Settings />} />

        <Route
          path="/pages/AccountSettingsPage.js"
          element={<Navigate to="/AccountSettings" />}
        />
        <Route path="/AccountSettings" element={<AccountSettings />} />


        <Route
          path="/pages/ESignaturePage.js"
          element={<Navigate to="/esign" />}
        />
        <Route path="/esign" element={<ESignaturePage />} />

        <Route
          path="/pages/UserArtGalleryPage.js"
          element={<Navigate to="/ArtGallery" />}
        />
        <Route path="/ArtGallery" element={<ArtGallery />} />

        <Route
          path="/pages/LoginAndRegistrationPage.js"
          element={<Navigate to="/LoginAndRegistrationPage" />}
        />

        <Route
          path="/pages/CatalogingPage.js"
          element={<Navigate to="/cataloging" />}
        />
        <Route path="/cataloging" element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
