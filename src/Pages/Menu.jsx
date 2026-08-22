
import { useState } from "react";
import "./Menu.css";
import menuCategories from "../data/menu.js";
import menuArrow from "../assets/icons/menuArrow.svg";
import ReservationForm from "../components/reservation/ReservationForm.jsx";
import SuccessModal from "../Components/reservation/SuccessModal.jsx";

export default function Menu() {
  const [openCategory, setOpenCategory] = useState(null);

  const [booking, setBooking] = useState(null);

  const handleReservationSubmit = (newBooking) => {
    setBooking(newBooking);
  };

  function toggleCategory(id) {
    setOpenCategory((current) =>
      current === id ? null : id
    );
  }

  return (
    <section className="container menu">

      <div className="menu__head">

        <h1>Menu</h1>

        <h2>Our delightful selection</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur. Vitae enim mattis massa amet orci odio mi tortor quam. Eleifend lectus faucibus arcu cursus maecenas quis sit. Sit aliquet ultrices pellentesque
        </p>

      </div>


      <div className="menu__body">

        <div className="menu__column">
          {menuCategories.slice(0, 3).map((category) => (
            <MenuCategory
              key={category.id}
              category={category}
              isOpen={openCategory === category.id}
              onToggle={toggleCategory}
            />
          ))}
        </div>


        <div className="menu__column">
          {menuCategories.slice(3, 6).map((category) => (
            <MenuCategory
              key={category.id}
              category={category}
              isOpen={openCategory === category.id}
              onToggle={toggleCategory}
            />
          ))}
        </div>

      </div>

      <div className="menu__reservation">
        <ReservationForm 
          onSubmit={handleReservationSubmit}
        />

        {booking && (
          <SuccessModal
            booking={booking}
            onClose={() => setBooking(null)}
          />
        )}

      </div>

    </section>
  );
}


function MenuCategory({ category, isOpen, onToggle }) {
    return (
      <div className={`menu__category ${isOpen ? "is-open" : ""}`}>

        <button
          type="button"
          className="menu__category-header"
          onClick={() => onToggle(category.id)}
        >
          <h2>{category.title}</h2>

          <span className="menu__arrow">
            <img src={menuArrow} alt="<"></img>
          </span>
        </button>

        <div className="menu__dishes">
          <div className="menu__dishes-inner">

              {category.dishes.map((dish) => (
                <div className="menu__dish" key={dish.id}>

                  <div className="menu__dish-header">
                    <h3>{dish.name}</h3>
                    <span className="menu__price">
                      {dish.price}
                    </span>
                  </div>

                  <p>{dish.description}</p>

                </div>
                ))}
          </div>

        </div>

      </div>
    );
  }