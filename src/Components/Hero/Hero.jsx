import { Link } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>Shellfish</h1>
          <p>It's okay to be Shellfish.</p>

          <Link to="/reservation" className="hero__button">
            Reserve
          </Link>
        </div>
      </div>
    </section>
  );
}