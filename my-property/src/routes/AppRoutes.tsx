import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import HomePage from "../pages/public/HomePage";


function PropertiesPage() {
  return <h1 className="p-10 text-3xl font-bold">Properties</h1>;
}

function PropertyDetailsPage() {
  return <h1 className="p-10 text-3xl font-bold">Property Details</h1>;
}

function LoginPage() {
  return <h1 className="p-10 text-3xl font-bold">Login</h1>;
}

function RegisterPage() {
  return <h1 className="p-10 text-3xl font-bold">Register</h1>;
}

function DashboardPage() {
  return <h1 className="p-10 text-3xl font-bold">Dashboard</h1>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route
            path="/properties/:propertyId"
            element={<PropertyDetailsPage />}
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}