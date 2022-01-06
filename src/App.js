import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
