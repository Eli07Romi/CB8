import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import NotFound from "./routes/NotFound";
import Searched from "./pages/Searched";
import Food from "./routes/Food";
import Menu from "./components/navBar/Category/Menu";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/food/:type" element={<Food />} />
        <Route path="/search/:searchItem" element={<Searched />} />
        <Route path="/recipes/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
