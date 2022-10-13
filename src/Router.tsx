import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import LandingPage from "./pages/landingPage";
import Login from "./pages/login";
import MyRecords from "./pages/myRecords";

export function Router() {
  return (
    <Routes>
       <Route path="/" element={<LandingPage />} />
       <Route path="/login" element={<Login />} /> 
       <Route path="/dashboard" element={<Dashboard />} />
       <Route path="/meus-registros" element={<MyRecords />} />
    </Routes>
  );
}
