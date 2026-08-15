import Hero from "../components/hero/Hero.jsx";
import Specials from "../components/Specials/Specials.jsx";
import About from "../components/about/About.jsx";
import Menu from "../components/menu/Menu.jsx";
import ReservationForm from "../components/reservation/ReservationForm.jsx";
import "./Home.css";

export default function Home() {
  return (
    <>
        <Hero />
        <Specials />
        <Menu />
        <About />

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