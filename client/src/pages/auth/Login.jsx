import React, { useEffect, useState } from "react";
import loginImg from "../../assets/img/login.png";
import { postWithoutToken } from "../../api/fetch";
import { endPoint } from "../../utils/url";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slice/authSlice";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { token, role } = useSelector((state) => state.auth)

  const handleRegister = async () => {
    const data = {
      name: name ? name : "pny",
      email,
      password,
    };
    const res = await postWithoutToken(endPoint.register, data);

    localStorage.setItem("token", res.accessToken);
    localStorage.setItem("user", JSON.stringify(res.content));
    if (res.content.role == 'user') {
      window.location.href = "/profile";
    } else {
      window.location.href = "/admin";
    } window.location.href = "/profile";
  };

  const handleLogin = async () => {
    try {
      const data = {
        email,
        password,
      };

      const res = await postWithoutToken(endPoint.login, data);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("role", res.content.role);
      localStorage.setItem("user", JSON.stringify(res.content));
      console.log(res)
      dispatch(login(res))

      if (res.content.role == 'user') {
        navigate("/profile");
      } else {
        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (role == 'user' && token) {
      navigate("/");
    }

  }, [])



  return (
    <div className="container  flex items-center justify-center bg-white">
      <div className="w-[40%] h-full flex items-center justify-center mr-4">
        <img src={loginImg} className="object-cover h-[100vh] rounded-2xl" />
      </div>

      <div className="w-[40%] py-12">
        <h2 className="text-green-600 text-2xl font-bold text-center mb-2">
          Sign {isRegister ? "up" : "in"}
        </h2>
        <p className="text-center text-gray-800 mb-6">
          Sign {isRegister ? "up" : "in"} to continue shopping
        </p>

        {isRegister && (
          <>
            <label className="block text-sm font-medium text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-green-400"
            />
          </>
        )}

        <label className="block text-sm font-medium text-gray-700">
          Email <span className="text-red-500">*</span>
          <span className="flex float-right text-green-500 font-normal text-xs">
            Use Phone Instead
          </span>
        </label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(text) => setEmail(text.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-green-400"
        />

        <label className="block text-sm font-medium text-gray-700">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(text) => setPassword(text.target.value)}
          placeholder="Enter your password"
          className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-green-400"
        />

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-1" /> Remember Me
          </label>
          <a href="#" className="text-green-500 hover:underline">
            Forgot Password
          </a>
        </div>

        <button
          onClick={() => (isRegister ? handleRegister() : handleLogin())}
          className="w-full bg-green-600  text-white py-2 rounded-full font-semibold"
        >
          {!isRegister ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-4 text-center text-gray-500 text-md">
          Don't have an account?
          <button
            onClick={() => setIsRegister(!isRegister)}
            className="text-green-500 font-semibold"
          >
            {isRegister ? "Sign In" : "Sign Up"}
          </button>
        </p>
        {!isRegister && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-800 mb-3">
              For quick demo login click below
            </p>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-orange-500 text-white py-2 rounded-md text-xs">
                Admin
              </button>
              <button className="bg-green-500 text-white py-2 rounded-md text-xs">
                Customer
              </button>
              <button className="bg-blue-500 text-white py-2 rounded-md text-xs">
                Manager
              </button>
              <button className="bg-purple-500 text-white py-2 rounded-md text-xs">
                POS Operator
              </button>
              <button className="bg-pink-500 text-white py-2 rounded-md text-xs">
                Delivery Boy
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
