import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Home";
import Resume from "./components/Resume";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Resume Page */}
        <Route path="/resume" element={<Resume />} />

      </Routes>
    </BrowserRouter>
  );
}