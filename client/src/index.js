import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./containers/App"; // Correct the named import to default import if App is a default export
import "./index.css";
import { AuthProvider } from "./utils/auth";
import Loading from "./components/Loading"; // Ensure you have a Loading component

const LoginPage = lazy(() => import("./containers/LoginPage"));
const AdminPage = lazy(() => import("./containers/AdminPanel"));

ReactDOM.render(
  <AuthProvider>
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/adminpanel" element={<AdminPage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Suspense>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
