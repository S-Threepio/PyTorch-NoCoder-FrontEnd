import React, { useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { CreationComponentProps } from "./creation/types";
import { LandingPage } from "./landingPage";
import { CreationComponent } from "./creation";
import GenerationComponent from "./generation";
import { GenerationProps } from "./generation/types";

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
      <Route path="/generate" element={<GenerationComponent />} />
    </Routes>
  );
}

export default MyRouter;
