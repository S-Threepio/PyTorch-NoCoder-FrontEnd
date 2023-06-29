import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import CreationComponent from "./creation";
import { CreationComponentProps, propsData } from "./creation/types";
import { LandingPage } from "./landingPage/LandingPage";

function MyRouter() {
  const [propsData, setPropsData] = useState<propsData | null>(null);

  function handlePropsData(propsData: propsData) {
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
        element={<CreationComponent propsData={propsData} />}
      />
    </Routes>
  );
}

export default MyRouter;
