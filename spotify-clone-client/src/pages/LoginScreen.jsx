import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";
import { useUser } from "../context/userContext";
import { GetUser } from "../services/UserServices";

const LoginScreen = ({ setUser }) => {
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

      setUser(res);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex container h-screen items-start px-10 justify-center flex-col">
      <h1 className="text-3xl leading-none w-full font-bold">
        Log into <br /> your account
      </h1>
      <form onSubmit={login} className="w-full flex mt-12 flex-col gap-2">
        <div className="border-b border-stone-500 py-4">
          <input
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Your Email"
            value={formValues.email}
            required
          />
        </div>
        <div className="border-b border-stone-500 py-4">
          <input
            onChange={handleChange}
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            required
          />
        </div>
        <button
          className="btn-primary bg-lime-700 font-medium rounded-full mt-8"
          type="submit"
          onSubmit={login}
        >
          Log In
        </button>
      </form>
      <Link className="w-full" to="/register">
        <button
          className="btn-primary border w-full text-lime-700 border-lime-700 font-medium rounded-full mt-4"
          type="submit"
          onSubmit={login}
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default LoginScreen;
