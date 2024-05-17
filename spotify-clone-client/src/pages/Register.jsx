import { useState } from "react";
import { RegisterUser } from "../services/Auth";
import { useNavigate } from "react-router-dom";


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
  
    navigate('/signin')
  };

  return (
    <div className="container flex items-center justify-center h-screen">
      <div className="flex flex-col w-full">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
            className="w-full p-4 mb-4 text-stone-100 rounded-full border border-stone-700 bg-stone-800"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Name"
              value={formValues.name}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
            className="w-full p-4 mb-4 text-stone-100 rounded-full border border-stone-700 bg-stone-800"
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Your Email"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            <input
            className="w-full p-4 mb-4 text-stone-100 rounded-full border border-stone-700 bg-stone-800"
              onChange={handleChange}
              type="password"
              name="password"
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            <input
            className="w-full p-4 mb-4 text-stone-100 rounded-full border border-stone-700 bg-stone-800"
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button className="btn-primary bg-orange-600 rounded-full" type="submit" onSubmit={handleSubmit}
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
    </div>
  );
};

export default Register;
