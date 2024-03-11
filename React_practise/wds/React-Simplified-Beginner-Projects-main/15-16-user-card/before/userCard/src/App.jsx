import React from "react";
import user from "../../user.json"; // Assuming user.json is properly imported
import UserCard from "./UserCard";
import "./App.css";

const App = () => {
  return (
    <>
      <UserCard
        name={user.name}
        phoneNumber={user.phoneNumber}
        age={user.Age} // Corrected to match the casing in user.json
        address={user.address}
      />
    </>
  );
};

export default App;
