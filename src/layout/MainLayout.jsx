import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MainLayout() {
  const [showHeaderReserve, setShowHeaderReserve] = useState(false);

  return (
    <div className="app-layout">

      {/* Header recieves state value for Reserve Button */}
      <Header showReserve={showHeaderReserve}/>

      {/* Home recieves setter function for Reserve Button (visible or not)*/}
      <main className="app-main">
        <Outlet context={{setShowHeaderReserve}}/>
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;