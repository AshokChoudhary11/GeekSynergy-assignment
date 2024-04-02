import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes
import SignupForm from "./components/SignUp/index.jsx";
import LoginForm from "./components/logIn/index.jsx";
import Dashboard from "./components/Dashboard/index.jsx";
import CompanyInfo from "./components/CompanyInfo/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          {" "}
          {/* Wrap your Routes */}
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? <Dashboard /> : <LoginForm onLogin={handleLogin} />
            }
          />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
