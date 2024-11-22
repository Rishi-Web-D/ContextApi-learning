import React from "react";
import UserContext from "../context/userContext";

const Home = () => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="text-2xl">
          <h1>{user?.name}</h1>
          <button className="underline" onClick={()=> window.location.href = "/profile"}>Go to profile</button>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default Home;
