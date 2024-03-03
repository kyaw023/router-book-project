import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Auth } from "../../service/user.service";
import { data } from "autoprefixer";

const AdminPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const nav = useNavigate();

  useEffect(() =>{
    const data = localStorage.getItem("auth")

    if(data){
        nav("/dashboard");
    }
  },[])

  const submitHandler = async (e) => {
    e.preventDefault();

    const user = await Auth("user", formData);

    if (user) {
      localStorage.setItem("auth", JSON.stringify(user));
      nav("/dashboard", { state: { user } });
    }
  };
  return (
    <div className="container-layout bg-slate-50">
      <div className=" flex items-center justify-center h-screen space-x-20">
        <div>
          <img
            className=" w-[400px] h-[400px] mt-20"
            src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?t=st=1709125358~exp=1709128958~hmac=7cb6f1596b9a83d6c8d76336a767e4991e2593435671569579263a00edfc5ebe&w=740"
            alt=""
          />
        </div>
        <div>
          <h1 className=" text-2xl font-bold text-slate-950">
            Welcome to Boo<span className=" text-red-600">Va</span>
          </h1>
          <div className=" mt-5">
            <form onSubmit={submitHandler} className="max-w-xl mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your email
                </label>
                <input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@gmail.com"
                  required=""
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Your password
                </label>
                <input
                  value={formData.password}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      password: e.target.value,
                    }))
                  }
                  type="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required=""
                />
              </div>
              <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    defaultValue=""
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    required=""
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className=" w-full text-white bg-slate-900 hover:bg-slate-8900 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
