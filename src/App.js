import "./styles.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
