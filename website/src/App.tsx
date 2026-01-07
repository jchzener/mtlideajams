// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PastJamsPage from "./pages/PastJamsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jams" element={<PastJamsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
