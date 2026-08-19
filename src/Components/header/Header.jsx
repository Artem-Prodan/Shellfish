
import "./Header.css";
import logo from "../../assets/icons/logo1.png";
import { useLocation, useNavigate } from "react-router-dom";


export default function Header({showReserve}) {
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

  const isHome = location.pathname === "/";

  return (
    <header className="header">
      <div className="container header__inner">

          <div className="header__links">

          <button type="button" className="logo"
              onClick={()=>handleNavigation("/", "hero")}
              >
                <img src={logo} alt="Shellfish" />
                </button>

          <nav className="nav">

                {isHome ? (
                  <>
                  <button type="button"
                    onClick={()=>handleNavigation("/about", "about")}
                    >
                      About
                     </button>

                    <button type="button"
                      onClick={()=>handleNavigation("/", "visit")}
                      >
                        Visit
                      </button>
                      <button type="button"
                        onClick={()=>handleNavigation("/menu", "menu")}
                        >
                          Menu
                         </button>
                  </>
                ) : (
                <>
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
                  </>)}
          </nav>
          </div>

          {isHome ? (
            <button type="button"
                className={`header__reserve ${
                  showReserve ? "is-visible" : ""
                  }`}
                onClick={()=>handleNavigation("/reservation", "reservation")}
              >
                Reserve
                </button>
            ) :(
            <button type="button"
                className={`header__reserve is-visible`}
                onClick={()=>handleNavigation("/reservation", "reservation")}
              >
                Reserve
                </button>
          )}

      </div>
    </header>
  );
}