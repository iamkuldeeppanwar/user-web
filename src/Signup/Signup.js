import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const Navigate = useNavigate();

  const Signup = (e) => {
    e.preventDefault();
    fetch(`https://user-api-users.herokuapp.com/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstname: fname,
        lastname: lname,
        email,
        address,
        phone,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.keyValue) {
          setError("User already exist!");
        } else if (res.errors) {
          setError("invalid res input!");
        } else {
          localStorage.setItem("Authorization", res.token);
          Navigate("/profile");
        }
      });
  };

  return (
    <div className="userContainer">
      <form onSubmit={Signup}>
        <div>{error && <p className="Error">{error}</p>}</div>
        <div>
          <label>FirstName</label>
          <input
            className="Email"
            type="text"
            name="fname"
            value={fname}
            placeholder="FirstName..."
            onChange={(e) => setFname(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>LastName</label>
          <input
            className="Email"
            type="text"
            name="lname"
            value={lname}
            placeholder="LastName..."
            onChange={(e) => setLname(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <input
            className="Email"
            type="email"
            name="email"
            value={email}
            placeholder="Email..."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Address</label>
          <input
            className="Email"
            type="text"
            name="address"
            value={address}
            placeholder="Address..."
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <input
            className="Email"
            type="Number"
            name="phone"
            value={phone}
            placeholder="Phone..."
            onChange={(e) => setPhone(e.target.value)}
            min="10"
            required
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            className="Password"
            type="password"
            name="password"
            value={password}
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            minLength="7"
            required
          />
        </div>
        <label>Password must be greater than 7 characters</label>
        <br />
        <div>
          <input className="loginbtn" type="submit" value="Login" />
        </div>
        <div className="or">or</div>
        <div>
          <Link className="redirect" to="/">
            Already have an Account?
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Signup;
