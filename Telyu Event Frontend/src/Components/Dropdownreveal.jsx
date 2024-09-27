import React, { useState } from 'react';
import caretup from '../assets/caretup.png';

const DropdownReveal = ({ header, desc }) => {
  const [select, setSelect] = useState(false);

  return (
    <div className="dropdown-reveal">
      <div className="header" onClick={() => setSelect(!select)}>
        {header}
        {select ? (
          <img src={caretup} alt="" style={{ width: 10, height: 12, verticalAlign: 'middle', float: 'right', opacity:'0.3' }} />
        ) : (
          <img src={caretup} alt="" style={{ width: 10, height: 12, verticalAlign: 'middle', float: 'right', transform: 'scaleY(-1)' , opacity:'0.3'}} />
        )}
      </div>
      {select && (
        <div className="text-container">
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default DropdownReveal;