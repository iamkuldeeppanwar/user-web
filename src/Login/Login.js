import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const Navigate = useNavigate();

  const Login = async (e) => {
    e.preventDefault();
    await fetch(`https://user-api-users.herokuapp.com/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.user) {
          setError("Unable to login!");
        } else {
          localStorage.setItem("Authorization", res.token);
          Navigate("/profile");
        }
      });
  };

  return (
    <div className="userContainer">
      <div>
        <p className="Error">{error}</p>
      </div>
      <form onSubmit={Login}>
        <div>
          <label>Email</label>
          <input
            className="Email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email..."
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
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password..."
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
          <Link className="redirect" to="/Signup">
            Create an Account?
          </Link>
        </div>
        <br />
      </form>
    </div>
  );
}

export default Login;
