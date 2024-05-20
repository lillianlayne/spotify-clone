import { useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    await RegisterUser({
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
    });

    setFormValues({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    navigate("/signin");
  };

  return (
    <div className="flex container py-20 h-screen items-start px-10 justify-center flex-col">
      <h1 className="text-3xl leading-none w-full font-bold">
        Create <br /> your account
      </h1>
      <div className="w-full flex mt-12 flex-col gap-2">
        <form className="col" onSubmit={handleSubmit}>
          <div className="border-b border-stone-600 py-4">
            <input
              className="placeholder:text-stone-500"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="border-b border-stone-600 py-4">
            <input
              className="placeholder:text-stone-500"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your Email"
              value={formValues.email}
              required
            />
          </div>

          <div className="border-b border-stone-600 py-4">
            <input
              className="placeholder:text-stone-500"
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              required
            />
          </div>
          <div className="border-b border-stone-600 py-4">
            <input
              className="placeholder:text-stone-500"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            className="btn-primary bg-lime-700 font-medium rounded-full mt-8"
            type="submit"
            onSubmit={handleSubmit}
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Sign In
          </button>
        </form>
      </div>
        <div className="text-sm text-stone-400 font-thin h-full flex gap-2 items-end ">
          Already have an account?  
          <Link to="/signin">
         <p className="underline">
          Sign In
          </p> 
          </Link>
        </div>
    </div>
  );
};

export default Register;
