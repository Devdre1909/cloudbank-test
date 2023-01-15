import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./layout/dashboard";
import LoanDashboard from "./pages/dashboard/loan";
import HomeDashboard from "./pages/dashboard/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/loan" />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index path="home" element={<HomeDashboard />} />
          <Route index path="loan" element={<LoanDashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
