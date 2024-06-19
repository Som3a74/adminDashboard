import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import React from 'react'
import Layout from "./Layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./utils/theme";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Team from "./Pages/Team/Team";
import Invoices from "./Pages/Invoices/Invoices";
import Calendar from "./Pages/Calendar/Calendar";
import Faq from './Pages/Faq/Faq';
import Bar from './Pages/Bar/Bar';
import Pie from './Pages/Pie/Pie';
import Line from './Pages/Line/Line';
import Geography from "./Pages/Geography/Geography";
import Form from './Pages/Form/Form';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from "./Pages/NotFound/NotFound";

import Register from './Pages/Register/Register';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Context/ProtectedRoute";

export default function App() {
 
  const [mode, setMode] = React.useState(localStorage.getItem('myMode') || 'light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout setMode={setMode} />}>

        <Route index element={<Dashboard />} />
        <Route path="/team" element={ <ProtectedRoute><Team /></ProtectedRoute>} />
        <Route path="/contacts" element={<Contacts />} />
        {/* <Route path="/invoices" element={<Invoices />} /> */}

        <Route path="/form" element={<Form />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/geography" element={<Geography />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );


  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}