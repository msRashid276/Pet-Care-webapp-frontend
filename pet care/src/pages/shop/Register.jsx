import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../providers/AuthProvider";
import { register } from "../../services/api/admin/UserManagement";

const Register = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  //fetching data from input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInput({
      ...input,
      [name]: value,
    });
  };

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(input);

    try {
      const response = await register(
        input.firstName,
        input.lastName,
        input.email,
        input.password,
        input.role,
        auth.token
      );

      alert("Successfully Added");
      navigate("/admin/users");
    } catch (error) {
      alert("Please enter correct");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={input.firstName}
              onChange={handleChange}
              placeholder="Enter your First Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={input.lastName}
              onChange={handleChange}
              placeholder="Enter your Last Name"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={input.role}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="SHOP_OWNER">SHOP_OWNER</option>
            </select>
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
