/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard"; // Import the Dashboard component
import Form from "./scenes/productForm";
import Products from "./scenes/products";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Line from "./scenes/linechart";
import Login from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/linechart" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
