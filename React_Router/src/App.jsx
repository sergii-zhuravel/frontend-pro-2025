import { Link, NavLink, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Settings from "./pages/Settings";

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "3px" }}>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="settings/:id?" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
