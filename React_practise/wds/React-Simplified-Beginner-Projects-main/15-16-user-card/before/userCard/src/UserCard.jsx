/* import React from "react";

const UserCard = ({ name, phoneNumber, age, address }) => {
  // Corrected to receive props as an object
// We received all the props in an object form from the parent, which is why we used object destructuring.
// Alternatively, you can access props directly without destructuring, as shown below.
// Note:  you need to use all the javascript expression in curly bracket inside jsx code
  return (
    <div className="card">
      <h2 className="name">{name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{age}</div>
        <div className="label">Phone:</div>
        <div>{phoneNumber}</div>
        <div className="label">Address:</div> 
        <div>{address}</div>
      </div>
    </div>
  );
};

export default UserCard;
*/

import React from "react";

const UserCard = (props) => {
  return (
    <div className="card">
      <h2 className="name">{props.name}</h2>
      <div className="body">
        <div className="label">Age:</div>
        <div>{props.age}</div>
        <div className="label">Phone:</div>
        <div>{props.phoneNumber}</div>
        <div className="label">Address:</div>
        <div>{props.address}</div>
      </div>
    </div>
  );
};

export default UserCard;
