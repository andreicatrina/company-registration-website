import { Route, Routes } from "react-router-dom";
import "./App.css";

import { LandingPage } from "./pages/LandingPage/LandingPage";
import { PrivacyPage } from "./pages/PrivacyPage/PrivacyPage";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { FaqPage } from "./pages/FaqPage/FaqPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy-policy" element={<PrivacyPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  );
}

export default App;
