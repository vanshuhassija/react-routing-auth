import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    // "", null , undefined are falsy values
    if (!username || !password) {
      setError("Username and password are required");
    } else if (password.length < 5) {
      setError("Minimum required length for pasword is 5");
    } else {
      // Navigate to Welcome Page
      //Conditional Navigation
      navigate("/welcome");
    }
  }
  return (
    <form>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit" onClick={handleLogin}>
        Log In
      </button>
      {error ? <h2>{error}</h2> : null}
    </form>
  );
}

export default Login;

// 1. Define State for every Field
// 2. value={variableName}
// 3. Event Handeller---> onChange in most of the cases
