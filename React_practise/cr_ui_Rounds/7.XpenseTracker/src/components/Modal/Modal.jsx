// import React from "react";
// import "./Modal.css";

// const Modal = () => {
//   return (
//     <>
//       <div className="modalConntainer">Modal</div>
//     </>
//   );
// };

// export default Modal;

// --------------below modal---------

import React from "react";
import "./Modal.css";

const Modal = ({ title, type, onClose }) => {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h2>{title}</h2>
        <button onClick={onClose} className="closeBtn">
          X
        </button>
        {/* Form ya input fields yaha add kar sakta hai */}
      </div>
    </div>
  );
};

export default Modal;
