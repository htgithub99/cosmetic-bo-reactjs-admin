import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import AuthWrapper from "wrappers/AuthWrapper";

const Login = lazy(() => import("pages/Login"));

export default function AppWrapper() {
  return (
    <div className="root-wrapper">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<AuthWrapper />}>
        </Route>
      </Routes>
    </div>
  );
}
