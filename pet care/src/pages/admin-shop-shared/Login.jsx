import React, { useContext, useState } from "react";
import { json, useNavigate } from "react-router-dom";
import { login } from "../../services/api/Auth";
import AuthContext from "../../providers/AuthProvider";
import { checkShopIfExist } from "../../services/api/shop/ShopManagement";

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const [input, setInput] = useState({
    email: "",
    password: "",
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

    try {
      const response = await login(input.email, input.password);
      console.log(response.data);
      

     const authData = {
        token:response.data.token,
        firstName:response.data.firstName,
        email:response.data.email,
        role:response.data.role
      }

      setAuth(authData);

      localStorage.setItem("auth",JSON.stringify(authData))
 

      const { role, token } = response.data;

      if (role === "ADMIN") {
        alert("Successfully logged into admin dashboard");
        navigate("/admin");

      } else if (role === "SHOP_OWNER") {
        alert("Successfully logged in as shop owner");

        try{
          const response = await checkShopIfExist(token);

          if (response && (response.status === 200 || response.status === 201)) {
            alert("Successfully logged in to shop dashboard");
            navigate("/shop");
          } else {
            const errorMessage =
              response.data?.message ||
              "Error checking shop existence";
            alert(errorMessage);
          }

        }catch(error){

          const errorMsg = error.response?.data?.message || " Please add shop.";
          alert(errorMsg);
          navigate("/shop/addShop");
        }
      } else {
        alert("Unknown role");
      }
    } catch (error) {
      alert("Please enter correct email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-sm w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form action="" onSubmit={handleSubmit}>
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

          <div className="flex items-center justify-between mb-4">
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign In
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

export default Login;
