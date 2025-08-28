import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Dashboard from "./pages/TraineeDashboard";
import Tasks from "./pages/Tasks";
import Attendance from "./pages/Attendance";
import Meetings from "./pages/Meetings";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Assignments from "./pages/Assignments";
import Notification from "./pages/Notification"; // ✅ Added import

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/meetings" element={<Meetings />} />
          <Route path="/notifications" element={<Notification />} /> {/* ✅ Now works */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
