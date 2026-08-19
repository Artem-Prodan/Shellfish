import Hero from "../components/hero/Hero.jsx";
import Visit from "../components/visit/Visit.jsx";
import About from "../components/about/About.jsx";
import Menu from "../components/menu/Menu.jsx";
import ReservationForm from "../components/reservation/ReservationForm.jsx";
import "./Home.css";
import PartnerTicker from "../components/logoTickers/PartnerTicker.jsx";
import { useOutletContext } from "react-router-dom";

export default function Home() {
  const {setShowHeaderReserve} = useOutletContext();

  return (
    <>
        <Hero setShowHeaderReserve={setShowHeaderReserve}/>
        <About />
        <PartnerTicker />

        <Visit />
        <Menu />

        <div className="home__reservation">
          <ReservationForm
            onSubmit={(data) => {
              console.log(data);
            }}
          />
        </div>
    </>
  );
}