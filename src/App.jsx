import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import PageNotFound from "./pages/PageNotFound";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
