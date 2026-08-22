import "../reservation/SuccessModal.css";

export default function SuccessModal({ booking, onClose }) {
  if (!booking) {
    return null;
  }

  return (
    <div
      className="success-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="success-modal-title"
      onClick={onClose}
    >
      <div
        className="success-modal__content" 
        onClick={(e)=>e.stopPropagation()}
      >
        <button
          type="button"
          className="success-modal__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="success-modal__badge" aria-hidden="true">
          ✓
        </div>

        <h2 id="success-modal-title">
          Booking confirmed
        </h2>

        <div className="success-modal__card">
          <p>
            <strong>Order for:</strong> {booking.name}
          </p>

           <p>
            <strong>Guests:</strong> {booking.guests}
          </p>

          <p>
            <strong>Date:</strong> {booking.date}
          </p>

          <p>
            <strong>Time:</strong> {booking.time}
          </p>

        </div>

        <button
          type="button"
          className="success-modal__button"
          onClick={onClose}
        >
          Make another booking
        </button>
      </div>
    </div>
  );
}