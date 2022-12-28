import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import NavigationBar from "./pages/Navigation bar.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Portfolio Creator (Clone)/navigation bar" element={<NavigationBar />} />
    </Routes>
  );
}
