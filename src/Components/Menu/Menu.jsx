import "./Menu.css";
import menuBanner from "../../assets/images/plchldr.png";

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="container">

        <div className="menu__header">
            <h2 className="menu__title">Our delightful selection</h2>
            <p className="menu__description">Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa amet orci odio mi tortor quam. Eleifend lectus faucibus arcu cursus maecenas quis sit. Sit aliquet ultrices pellentesque lacus suspendisse felis rhoncus mauris. Porta dolor elit nullam magnis libero nibh. Nisl vitae nibh rhoncus ut sit tristique.
            </p>
        </div>

        <div className="menu__banner">
          <img
            src={menuBanner}
            alt="Dishes selection from our Menu"/>

            <div className="menu__banner-content">
              <p>Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa amet orci odio mi tortor quam.</p>

              <a href="/menu" className="menu__button">
                Menu
              </a>
            </div>
        </div>

      </div>
    </section>
  );
}