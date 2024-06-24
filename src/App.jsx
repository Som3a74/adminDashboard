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
import Login from "./Pages/Login/Login";
import ProtectedRoute from "./Context/ProtectedRoute";
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';

export default function App() {

  const [mode, setMode] = React.useState(localStorage.getItem('myMode') || 'light');
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout setMode={setMode} />}>

        <Route index element={<Dashboard />} />
        <Route path="/team" element={<ProtectedRoute><Team /></ProtectedRoute>} />
        <Route path="/contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
        {/* <Route path="/invoices" element={<Invoices />} /> */}

        <Route path="/form" element={<ProtectedRoute><Form /></ProtectedRoute>} />
        <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
        <Route path="/faq" element={<Faq />} />

        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/line" element={<Line />} />
        <Route path="/geography" element={<Geography />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        {/* <Route path="/UpdateProfile" element={<UpdateProfile />} /> */}

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