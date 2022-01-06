import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const [data, setData] = React.useState("");
  const [error, setError] = React.useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Authorization")) {
      Navigate("/");
    } else {
      getUser();
    }
  }, []);

  const getUser = () => {
    fetch(`https://user-api-users.herokuapp.com/users/me`, {
      method: "GET",
      headers: {
        Authorization: `${localStorage.getItem("Authorization")}`,
      },
    })
      .then((user) => user.json())
      .then((user) => {
        if (user) {
          setData(user);
        } else {
          setError("User not Found!");
        }
      });
  };
  return (
    <div className="userProfile">
      <h1>Your Profile</h1>
      {error && <p className="Error">{error}</p>}
      <div>
        <label>Name</label>
        <p>
          {data.firstname} {data.lastname}
        </p>
      </div>
      <div>
        <label>Email</label>
        <p>{data.email}</p>
      </div>
      <div>
        <label>Phone</label>
        <p>{data.phone}</p>
      </div>
      <div>
        <label>Address</label>
        <p>{data.address}</p>
      </div>
    </div>
  );
}

export default Profile;
