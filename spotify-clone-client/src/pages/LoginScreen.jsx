import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";
import { SignInUser } from "../services/Auth";

const LoginScreen = (props) => {
  let navigate = useNavigate();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const login = async (e) => {
    e.preventDefault();
    try {
      const loginInfo = {
        email: formValues.email,
        password: formValues.password,
      };

      const res = await SignInUser(loginInfo);

      props.setUser(res);
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  return (
    <div className="flex-col mx-auto px-4">
      <h1>Welcome Back</h1>
      <form className="flex flex-col gap-2 w-full" onSubmit={login}>
        <input
          className="text-stone-900 w-full px-2 h-14"
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Your Email"
          value={formValues.email}
          required
        />
        <input
          className="text-stone-900 w-full px-2 h-14"
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          value={formValues.password}
          required
        />
        <button
          className="btn-primary bg-slate-500"
          disabled={!formValues.email || !formValues.password}
        >
          Sign In
        </button>
      </form>
      <Link to="/auth/register">
          <button className="btn-primary mt-2 bg-slate-700">Create Account</button>
        </Link>
    </div>
  );
};

export default LoginScreen;
