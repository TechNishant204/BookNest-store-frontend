import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [message, setMessage] = useState("");
  const { registerUser, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await registerUser(data.email, data.password);
      alert("User registered successfully!");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.error(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      alert("Login successful!");
      // navigate("/");
    } catch (error) {
      alert("Google sign in failed!");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-10 py-12 relative overflow-hidden border border-blue-200">
        {/* Decorative Blobs */}
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-tr from-pink-400 via-purple-400 to-blue-400 opacity-30 rounded-full blur-2xl z-0"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-2xl z-0"></div>

        <div className="relative z-10">
          <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-6 drop-shadow">
            Create your account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                placeholder="you@email.com"
                className={`transition-all duration-200 shadow-sm border ${
                  errors.email
                    ? "border-pink-500 focus:border-pink-500"
                    : "border-gray-300 focus:border-blue-400"
                } rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/80`}
              />
              {errors.email && (
                <span className="text-pink-500 text-xs mt-1 block">
                  Email is required
                </span>
              )}
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-semibold mb-1"
                htmlFor="password"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                placeholder="••••••••"
                className={`transition-all duration-200 shadow-sm border ${
                  errors.password
                    ? "border-pink-500 focus:border-pink-500"
                    : "border-gray-300 focus:border-blue-400"
                } rounded-xl w-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white/80`}
              />
              {errors.password && (
                <span className="text-pink-500 text-xs mt-1 block">
                  Password is required
                </span>
              )}
            </div>
            {message && (
              <p className="text-pink-500 text-xs italic mb-2">{message}</p>
            )}
            <button
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="submit"
            >
              Register
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="mx-4 text-gray-400 font-medium text-xs">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-gray-200 shadow hover:bg-blue-50 hover:scale-105 transition-all duration-200 font-semibold text-gray-700"
          >
            <FaGoogle className="text-lg text-pink-500" />
            Sign in with Google
          </button>

          <p className="text-center text-sm mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
        <p className="mt-8 text-center text-gray-400 text-xs relative z-10">
          ©2025 Book Store. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Register;
