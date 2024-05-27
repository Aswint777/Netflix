import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./assets/pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />

          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
