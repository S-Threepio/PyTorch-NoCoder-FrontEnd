import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Creation from "./creation";
import LandingPage from "./LandingPage";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/create" element={<Creation />} />
    </Routes>
  );
}

export default MyRouter;
