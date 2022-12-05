import React from "react";
import './modal.css'

export const Modal = ({active, setActive, children}) => {
   return(
    <div className={active ? "modal active" : 'modal'} onClick={()=> setActive(false)}>
        <div className={active ? "modal__content active" : 'modal__content'} onClick={(e) => {
            e.stopPropagation()
        }}>
            {children}
            <button className="modal__button" onClick={()=> setActive(false)}>Close</button>
        </div>
    </div>
   ) 
}