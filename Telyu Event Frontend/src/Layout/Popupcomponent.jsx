import './Popupcomponent.css'
import { useState } from 'react'
const Popupcomponent =({ isOpen })=>{
    if (!isOpen) return null;

    return (
      <div className="popup-container">
        <div className="popup-content">
          <p>🎊Kamu berhasil mendaftar!</p>
        </div>
      </div>
    );
}

export default Popupcomponent