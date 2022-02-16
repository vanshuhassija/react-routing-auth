import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <h1>Landing Page</h1>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </>
  );
}

export default LandingPage;
