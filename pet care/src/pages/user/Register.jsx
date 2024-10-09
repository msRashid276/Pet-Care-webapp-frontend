import React from "react";

const Register = () => {
  return (
    <div className="w-full flex">
      <div className="basis-1/2"></div>
      <div className="basis-1/2">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p>Enter your details below</p>

        <form className="max-w-md">
          <div>
            <div className="relative">
              <input
                type="text"
                id="outlined_success"
                aria-describedby="outlined_success_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm border text-gray-900 bg-transparent rounded-lg border-1 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=" "
              />
              <label
                for="outlined_success"
                className="absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
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
          </div>


         
     
        </form>
      </div>
    </div>
  );
};

export default Register;
