import { useState } from "react";
import "./Reservation.css";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export default function ReservationForm({ onSubmit }) {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
  });

  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split("T")[0];

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "guests" ? Number(value) : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  }

  function validate() {
    const validationErrors = {};

    if (!form.date) {
      validationErrors.date = "Select date";
    } else if (form.date < today) {
      validationErrors.date = "Past date not allowed";
    }

    if (!form.time) {
      validationErrors.time = "Select time";
    }

    if (form.guests < 1) {
      validationErrors.guests = "Min 1 guest";
    }

    return validationErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSubmit?.(form);
  }

  return (
    <div id="reservation" className="reservation-form">
      <h2 className="reservation-form__title">
        Book a Table
      </h2>

      <form
        className="reservation-form__form"
        onSubmit={handleSubmit}
      >
        <label className="reservation-form__field">
          <span>Date</span>

          <input
            type="date"
            name="date"
            value={form.date}
            min={today}
            onChange={handleChange}
            className={errors.date ? "input-error" : ""}
          />

          {errors.date && (
            <span className="reservation-form__error">
              {errors.date}
            </span>
          )}
        </label>

        <label className="reservation-form__field">
          <span>Time</span>

          <select
            name="time"
            value={form.time}
            onChange={handleChange}
            className={errors.time ? "input-error" : ""}
          >
            <option value="">Select time</option>

            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>

          {errors.time && (
            <span className="reservation-form__error">
              {errors.time}
            </span>
          )}
        </label>

        <label className="reservation-form__field">
          <span>Guests</span>

          <input
            type="number"
            name="guests"
            min="1"
            max="10"
            value={form.guests}
            onChange={handleChange}
            className={errors.guests ? "input-error" : ""}
          />

          {errors.guests && (
            <span className="reservation-form__error">
              {errors.guests}
            </span>
          )}
        </label>

        <button
          type="submit"
          className="reservation-form__button"
        >
          Confirm reservation
        </button>
      </form>
    </div>
  );
}