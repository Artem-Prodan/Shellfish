import { Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Route>
    </Routes>
  );
}

export default App;