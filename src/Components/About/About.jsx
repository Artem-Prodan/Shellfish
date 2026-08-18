import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">

        <div className="about__info">
          <h2 className="about__title">Our Shellfish story</h2>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa amet orci odio mi tortor quam. Eleifend lectus faucibus arcu cursus maecenas quis sit. Sit aliquet ultrices pellentesque lacus suspendisse felis rhoncus mauris. Porta dolor elit nullam magnis libero nibh. Nisl vitae nibh rhoncus ut sit tristique. Adipiscing a eu orci suscipit porttitor. Volutpat neque congue mattis nisi pharetra et porta aenean quis. Id platea sed scelerisque turpis tortor mauris accumsan purus.
          </p>
          <Link to="/about" className="about__button">
                View
           </Link>
        </div>

        <div className="about__images">
          <p></p>
        </div>

      </div>
    </section>
  );
}