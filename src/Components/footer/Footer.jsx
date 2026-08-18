import "./Footer.css";
import logo from "../../assets/icons/logo1.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId) =>{
    // If we currently on Home page, scroll to chosen element
    if (location.pathname === "/" && sectionId){
      document.getElementById(sectionId)?.scrollIntoView();
      return;
    }
    // If we on any other page, redirect to right page
    navigate(path);
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">

          <div className="footer__links">
            <button type="button"
              onClick={()=>handleNavigation("/", "hero")}
              >
                Home
                </button>
              <button type="button"
              onClick={()=>handleNavigation("/about", "about")}
              >
                About
                </button>
              <button type="button"
              onClick={()=>handleNavigation("/menu", "menu")}
              >
                Menu
                </button>
              <button type="button"
              onClick={()=>handleNavigation("/reservation", "reservation")}
              >
                Reservation
                </button>
          </div>

          <div className="footer__brand">
              <div className="footer__logo">
                <img src={logo} alt="II" />
              </div>

              <div className="footer__info">
                  <div className="footer__address">
                    <h3>Address</h3>
                    <address>Street Name, Avenu 22 <br/> 00-000</address>
                  </div>

                  <div className="footer__op-hours">
                    <h3>Opening hours</h3>
                    <p>Mon–Thu 11:00–22:00 <br/>
                      Fri–Sat 11:00–23:00 <br/>
                      Sun 12:00–21:00
                    </p>
                  </div>

                  <div className="footer__social">
                    <h3>Social</h3>
                      <div className="footer__medias">
                        <a href="#media">Instagram</a>
                        <a href="#media">Facebook</a>
                        <a href="#media">Twitter</a>
                      </div>
                  </div>
              </div>
          </div>

          <div className="footer__copyright">
            <p>© {new Date().getFullYear()} Shellfish Restaurant. All rights reserved.</p>
          </div>

      </div>
    </footer>
  );
}