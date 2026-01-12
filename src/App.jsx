import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import AiDesign from "./views/AiDesign";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="design/:productId" element={<AiDesign />} />
      </Route>
    </Routes>
  );
};

export default App;
