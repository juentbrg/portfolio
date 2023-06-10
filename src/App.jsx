import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Lab from "./pages/Lab";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/laboratory" element={<Lab />} />
      </Routes>
    </>
  );
}

export default App;