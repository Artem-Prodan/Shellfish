import "./Visit.css";
import { Link } from "react-router-dom";

export default function Visit() {
  return (
    <section id="visit" className="visit">
      <div className="container">

        <div className="visit__header">

          <div className="visit__description">
            <h2 className="visit__title">
              Your Visit is all about You
            </h2>

            <p className="visit__text">
              Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa
              amet orci odio mi tortor quam. Eleifend lectus faucibus arcu
              cursus maecenas quis sit. Sit aliquet ultrices pellentesque lacus
              suspendisse felis rhoncus mauris. Porta dolor elit nullam magnis
              libero nibh. Nisl vitae nibh rhoncus ut sit tristique.
            </p>
          </div>

          <div className="visit__info">
            <p className="visit__accessibility">
              Accessibility info
            </p>

            <address>
              Super Mariano street 676767
              <br />
              14:00 - 22:00
            </address>
          </div>

        </div>

      </div>
    </section>
  );
}