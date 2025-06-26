import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [message, setMessage] = useState("");
  const { loginUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await loginUser(data.email, data.password);
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successful!");
      navigate("/");
    } catch (error) {
      alert("Google sign in failed!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white/90 shadow-2xl rounded-3xl px-10 py-12 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-tr from-pink-400 to-blue-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          Welcome Back 👋
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              placeholder="you@email.com"
              className={`transition-all duration-200 border-2 ${
                errors.email
                  ? "border-pink-500 focus:border-pink-500"
                  : "border-gray-200 focus:border-blue-400"
              } rounded-xl w-full py-3 px-4 focus:outline-none bg-gray-50 shadow-sm`}
            />
            {errors.email && (
              <span className="text-pink-500 text-xs mt-1 block">
                Email is required
              </span>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              placeholder="••••••••"
              className={`transition-all duration-200 border-2 ${
                errors.password
                  ? "border-pink-500 focus:border-pink-500"
                  : "border-gray-200 focus:border-blue-400"
              } rounded-xl w-full py-3 px-4 focus:outline-none bg-gray-50 shadow-sm`}
            />
            {errors.password && (
              <span className="text-pink-500 text-xs mt-1 block">
                Password is required
              </span>
            )}
          </div>
          {message && (
            <p className="text-pink-500 text-sm text-center">{message}</p>
          )}
          <button
            className="w-full bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg transition-all duration-200 transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400 font-medium text-sm">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 bg-white border-2 border-blue-400 hover:bg-blue-50 text-blue-600 font-semibold py-3 rounded-xl shadow transition-all duration-200 hover:shadow-lg focus:outline-none"
        >
          <FaGoogle className="text-lg" />
          Sign in with Google
        </button>
        <p className="text-center text-gray-500 text-sm mt-8">
          Haven&apos;t an account?{" "}
          <Link
            to="/register"
            className="text-pink-500 hover:underline font-semibold"
          >
            Register
          </Link>
        </p>
        <p className="mt-6 text-center text-gray-400 text-xs">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
