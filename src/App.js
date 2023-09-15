/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Routes, Route} from  "react-router-dom";
import { Theme } from "@fullcalendar/core/internal";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Transactions from "./scenes/transactions";
import Form from "./scenes/productForm";
import Products from "./scenes/products";
import Geography from "./scenes/geography";
import FAQ from "./scenes/faq";
import Calendar from "./scenes/calendar";
import Line from "./scenes/linechart";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar/>} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/linechart" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
