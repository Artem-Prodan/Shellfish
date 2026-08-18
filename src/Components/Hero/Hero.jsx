import { Link } from "react-router-dom";

import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1>It's okay to be <br/>a little Shellfish</h1>

          <a href="#reservation" className="hero__button">
            Reserve
          </a>
        </div>
      </div>
    </section>
  );
}