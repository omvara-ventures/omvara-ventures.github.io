import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AutomotivePage from "./pages/AutomotivePage";
import VehiclesPage from "./pages/VehiclesPage";
import GlenVyraPage from "./pages/GlenVyraPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortMachineryPage from "./pages/PortMachineryPage";
import PortMachineryModelPage from "./pages/PortMachineryModelPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/automotive" element={<AutomotivePage />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
        <Route path="/port-machinery" element={<PortMachineryPage />} />
        <Route path="/port-machinery/:modelId" element={<PortMachineryModelPage />} />
        <Route path="/glen-vyra" element={<GlenVyraPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
