import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import ProjectBoard from "./pages/ProjectBoard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectBoard />} />
      </Routes>
    </BrowserRouter>
  );
}
