
import { useEffect } from "react";
import "../reservation/ReservationModal.css";
import ReservationForm from "./ReservationForm.jsx";

export default function ReservationModal({onClose, onSubmit}) {

  useEffect(()=>{
    document.body.style.overflow = "hidden";

    return () =>{
      document.body.style.overflow = "";
    };
  },[]);

  return (
    <div className="overlay"
      onClick={onClose}
      >
        <div className="modal-window"
          onClick={(e)=>{e.stopPropagation()}}>

          <button 
            type="button"
            className="modal-btn"
            onClick={onClose}
            aria-label="Close Reservation"
          >x</button>

          <ReservationForm onSubmit={onSubmit}/>

        </div>
    </div>
  );
}