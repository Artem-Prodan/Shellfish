
import { useState } from "react";
import "./Reservation.css";
import SuccessModal from "../../components/reservation/SuccessModal";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export default function ReservationForm({ onSubmit }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,

  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // success modal state
  const [lastBooking, setLastBooking] = useState(null);

  function getToday() {

    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");

    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const today = getToday();

  function handleChange(e) {
    const { name, value } = e.target;

    const newValue =
      name === "guests"
        ? value === ""
          ? ""
          : Number(value)
        : value;

    const newForm = {
      ...form,
      [name]: newValue,
    };

    setForm(newForm);

    if (touched[name] || submitted) {

      const validationErrors = validate(newForm);

      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name] || "",
      }));

    }

  }

  function handleBlur(e) {

    const { name } = e.target;

    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const validationErrors = validate(form);

    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name] || "",
    }));

  }

  //// VALIDATION ////
  function validate(values = form) {

    const validationErrors = {};

    const name = values.name.trim();
    const email = values.email.trim();
    const phone = values.phone.trim();

    // NAME
    if (!name) {
      validationErrors.name = "Enter your name";
    } else if (name.length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    } else if (name.length > 30) {
      validationErrors.name = "Name is too long";
    } else if (!/^[\p{L}][\p{L}\s'-]*$/u.test(name)) {
      validationErrors.name = "Enter a valid name";
    }

    // EMAIL
    if (!email) {
      validationErrors.email = "Enter your e-mail";
    } else if (email.length > 40) {
      validationErrors.email = "E-mail is too long";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      validationErrors.email = "Enter a valid e-mail";
    }

    // PHONE
    if (!phone) {
      validationErrors.phone = "Enter your phone number";
    } else {
      const digitsOnly = phone.replace(/\D/g, "");
      if (digitsOnly.length < 9) {
        validationErrors.phone = "Enter a valid phone number";
      } else if (digitsOnly.length > 18) {
        validationErrors.phone = "Phone number is too long";
      } else if (!/^[+\d\s()-]+$/.test(phone)) {
        validationErrors.phone = "Enter a valid phone number";
      }
    }

    // GUESTS
    if (!Number.isInteger(values.guests)) {
      validationErrors.guests = "Enter a valid number of guests";
    } else if (values.guests < 1) {
      validationErrors.guests = "Minimum 1 guest";
    } else if (values.guests > 10) {
      validationErrors.guests = "Maximum 10 guests";
    }

    // DATE
    if (!values.date) {
      validationErrors.date = "Select a date";
    } else {
      const selectedDate = new Date(`${values.date}T00:00:00`);
      const todayDate = new Date(`${today}T00:00:00`);
      if (Number.isNaN(selectedDate.getTime())) {
        validationErrors.date = "Enter a valid date";
      } else if (selectedDate < todayDate) {
        validationErrors.date = "Past date is not allowed";
      }
    }

    // TIME
    if (!values.time) {
      validationErrors.time = "Select a time";
    } else if (!availableTimes.includes(values.time)) {
      validationErrors.time = "Select a valid time";
    }
    return validationErrors;
  }


  function handleSubmit(e) {

    e.preventDefault();

    setSubmitted(true);

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const cleanedForm = {
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),

    };
    setLastBooking(cleanedForm);

    onSubmit?.(cleanedForm);

  }

  return (

    <div id="reservation" className="reservation-form">

      <h2 className="reservation-form__title">
        Make some time to be Shellfish
      </h2>

      <form
        className="reservation-form__form"
        onSubmit={handleSubmit}
        noValidate
      >

        <div className="fields-box">
          <div className="fields-wrapper">
            <label className="reservation-form__field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                onBlur={handleBlur}
                minLength={2}
                maxLength={30}
                required
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                className={errors.name ? "input-error" : ""}
              />

              <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.name || submitted) && errors.name)}
                >
                  {(touched.name || submitted) && errors.name && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.name}
                    </>
                  )}
               </span>

            </label>

            <label className="reservation-form__field">
              <span>E-mail</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={40}
                required
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                className={errors.email ? "input-error" : ""}
              />

                <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.email || submitted) && errors.email)}
                >
                  {(touched.email || submitted) && errors.email && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.email}
                    </>
                  )}
               </span>

            </label>

            <label className="reservation-form__field">
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                maxLength={18}
                required
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                className={errors.phone ? "input-error" : ""}
              />

              <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.phone || submitted) && errors.phone)}
                >
                  {(touched.phone || submitted) && errors.phone && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.phone}
                    </>
                  )}
               </span>

            </label>
          </div>


          <div className="fields-wrapper">
            <label className="reservation-form__field">
              <span>Guests</span>
              <input
                type="number"
                name="guests"
                min="1"
                max="10"
                value={form.guests}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(errors.guests)}
                className={errors.guests ? "input-error" : ""}
              />

              <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.guests || submitted) && errors.guests)}
                >
                  {(touched.guests || submitted) && errors.guests && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.guests}
                    </>
                  )}
               </span>
            </label>

            <label className="reservation-form__field">
              <span>Date</span>
              <input
                type="date"
                name="date"
                value={form.date}
                min={today}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(errors.date)}
                className={errors.date ? "input-error" : ""}
              />

              <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.date || submitted) && errors.date)}
                >
                  {(touched.date || submitted) && errors.date && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.date}
                    </>
                  )}
               </span>
            </label>

            <label className="reservation-form__field">
              <span>Time</span>
              <select
                name="time"
                value={form.time}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-invalid={Boolean(errors.time)}
                className={errors.time ? "input-error" : ""}
              >

                <option value="">Select time</option>

                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>

              <span
                  className="reservation-form__error"
                  role="alert"
                  aria-hidden={!((touched.time || submitted) && errors.time)}
                >
                  {(touched.time || submitted) && errors.time && (
                    <>
                      <span className="reservation-form__error-icon">!</span>
                      {errors.time}
                    </>
                  )}
               </span>
            </label>
          </div>
        </div>

        <div className="button-wrapper">
          <button
            type="submit"
            className="reservation-form__button"
          >
            Confirm reservation
          </button>

        </div>
      </form>

      {lastBooking && (
          <SuccessModal
            booking={lastBooking}
            onClose={() => setLastBooking(null)}
          />
        )}

    </div>

  );

}