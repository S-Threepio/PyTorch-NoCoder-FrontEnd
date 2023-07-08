import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CreationComponentProps } from "./creation/types";
import { LandingPage } from "./landingPage";
import { CreationComponent } from "./creation";

function MyRouter() {
  const [propsData, setPropsData] = useState<CreationComponentProps | null>(
    null
  );

  function handlePropsData(propsData: CreationComponentProps) {
    setPropsData(propsData);
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<LandingPage handlePropsData={handlePropsData} />}
      />
      <Route
        path="/create"
        element={
          propsData ? <CreationComponent {...propsData} /> : <Navigate to="/" />
        }
      />
    </Routes>
  );
}

export default MyRouter;
