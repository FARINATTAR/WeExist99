import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import BreakTheChains from "./pages/BreakTheChains";
import WhatWeDo from "./pages/WhatWeDo";
import GamifiedGiving from "./pages/GamifiedGiving";
import DonationPage from "./pages/Donate";
import LeftOverToLife from "./pages/LeftOverToLife";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leftover-to-life" element={<LeftOverToLife />}/>
        <Route path="/gamified-giving" element={<GamifiedGiving />} />
        <Route path="/what-we-do" element={<WhatWeDo />}/>
        <Route path="/donate" element={<DonationPage />} />
      </Routes>
    </div>
  );
};

export default App;
