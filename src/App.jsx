import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./layout/dashboard";
import DashboardHome from "./pages/dashboard/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/dashboard" exact element={<Dashboard />}>
          <Route index path="home" exact element={<DashboardHome />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
