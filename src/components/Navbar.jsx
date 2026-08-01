import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
    <h2>The Horizon School</h2>
      <div className="nav-links"> 
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/academics">Academics</Link> |{" "}
      <Link to="/admissions">Admissions</Link> |{" "}
      <Link to="/faculty">Faculty</Link> |{" "}
      </div>
    </nav>
  );
}

export default Navbar;