import React, { useState } from "react";
import registerImage from '../../assets/user/register&login/registerImagePet.jpg'
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/auth/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'


const Register = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading,error} = useSelector((state)=>state.auth)

  
  const [user,setUser] = useState({
    firstName:"Raman",
    lastName:"r",
    email:"raman@gmail.com",
    password:"r@123",
    role:"CUSTOMER"
  })

  const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;

      setUser((prev)=>({
          ...prev,
          [name]:value
      }))
  }
  
  const handleSubmit = (e) =>{
      e.preventDefault();

      dispatch(registerUser(user)).then((result)=>{
        if(result.payload){
          // console.log(result.payload);
          
          setUser({
            firstName: "",
            lastName  : "",
            email: "",
            password: ""
          });
          toast("Successfully Registered")
          navigate("/user/login")
        }
      }).catch((err)=>{
        console.log(err,'error in register');
        
      })
  }



  return (

    <div className="w-full flex py-10 space-x-12">

      <div className="basis-1/2 flex items-center ">
        <div className="w-full">
          <img src={registerImage} alt="registerImage" className="w-full h-auto object-cover md:object-contain" />
        </div>
      </div>


      <div className="basis-1/2 ">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="pt-2 pb-8 text-sm font-thin">Enter your details below</p>

        {error && <p className="text-red-500">{error}</p>}
         
        <form className="max-w-md" onSubmit={handleSubmit} >
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="first_name"
                aria-describedby="first_name_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border text-gray-900 bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                placeholder=" "
                onChange={handleChange}
                value={user.firstName}
                name="firstName"
              />
              <label
                htmlFor="first_name"
                className="absolute text-sm text-neutral-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                First Name
              </label>
            </div>
            {/* <p
              id="outlined_success_help"
              className="mt-2 text-xs text-green-600 dark:text-green-400"
            >
              <span className="font-medium">Well done!</span> Some success message.
            </p> */}

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="last_name"
                aria-describedby="last_name_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border text-gray-900 bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                placeholder=" "
                onChange={handleChange}
                value={user.lastName}
                name="lastName"
              />
              <label
                htmlFor="last_name"
                className="absolute text-sm text-neutral-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Last Name
              </label>
            </div>
            {/* <p
              id="outlined_success_help"
              className="mt-2 text-xs text-green-600 dark:text-green-400"
            >
              <span className="font-medium">Well done!</span> Some success message.
            </p> */}
          </div>

          <div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                id="email"
                aria-describedby="email_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border text-gray-900 bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                placeholder=" "
                onChange={handleChange}
                value={user.email}
                name="email"
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-neutral-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Email
              </label>
            </div>
            {/* <p
              id="outlined_success_help"
              className="mt-2 text-xs text-green-600 dark:text-green-400"
            >
              <span className="font-medium">Well done!</span> Some success message.
            </p> */}
          </div>

          <div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="password"
                id="password"
                aria-describedby="password_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border text-gray-900 bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-gray-300 peer"
                placeholder=" "
                onChange={handleChange}
                value={user.password}
                name="password"
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-neutral-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Password
              </label>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-green-300  font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
            >
              {loading?'Loading....':'Create Account'}
            </button>
            
          </div>

          <div className="flex items-center justify-center w-full bg-white">
            <button className="flex items-center justify-center w-full bg-white border border-gray-200 ou rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800  hover:bg-gray-200 focus:outline-none">
              <svg
                className ="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="-0.5 0 48 48"
                version="1.1"
              >
                {" "}
                <title>Google-color</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Icons"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  {" "}
                  <g
                    id="Color-"
                    transform="translate(-401.000000, -860.000000)"
                  >
                    {" "}
                    <g
                      id="Google"
                      transform="translate(401.000000, 860.000000)"
                    >
                      {" "}
                      <path
                        d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                        id="Fill-1"
                        fill="#FBBC05"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                        id="Fill-2"
                        fill="#EB4335"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                        id="Fill-3"
                        fill="#34A853"
                      >
                        {" "}
                      </path>{" "}
                      <path
                        d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                        id="Fill-4"
                        fill="#4285F4"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

          <p className="py-7 text-center font-thin text-sm ">Already have account?  <span className="hover:underline text-md font-semibold"><Link to="/user/login" >Log in</Link></span></p>

        </form>
       
      </div>
    </div>
  );
};

export default Register;
