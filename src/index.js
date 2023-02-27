import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/home";
import Error from "./pages/ErrorPage";
import { ProdsProvider } from "./components/Context";
import ProdPage from "./pages/ProdPage";
import AllProducts from "./pages/AllProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./components/Shared";
import Contact from "./components/contact/Contact";
import Services from "./components/Services";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProdsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shared />}>
            <Route index element={<Home />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="rooms" element={<AllProducts />}></Route>
            <Route path="room" element={<ProdPage />}></Route>
            <Route path="services" element={<Services />}></Route>
            <Route path="room" element={<ProdPage />}></Route>
            <Route path="rooms/room" element={<ProdPage />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ProdsProvider>
  </React.StrictMode>
);
