import { useState } from "react";
import { Link } from "react-router-dom";

export async function loader() {
  return null;
}
const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  function handleFormChange(e){
    const {name, value} =e.target
    setLoginForm(prevLoginForm =>({
        ...prevLoginForm,
        [name]: value
    }))
  }

  return (
    <div className="loginForm">
      <h1>Login form</h1>
      <form>
        <div>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleFormChange}
            placeholder="email address"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleFormChange}
            placeholder="password"
          />
        </div>
        <span>
        <Link to="forgotpassword">forgot password</Link>
        <Link to="newaccount">new account</Link>
        </span>
    

        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
