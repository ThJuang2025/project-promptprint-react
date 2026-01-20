<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Registration Successful! Please login.");
        navigate("/login");
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
=======
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function Register() {

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log("Google Login Success:", tokenResponse);
      // ส่ง tokenResponse.access_token ไป backend ได้
    },
    onError: () => {
      console.log("Google Login Failed");
    },
  });

>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
<<<<<<< HEAD
      <form
        onSubmit={handleRegister}
        className="flex flex-col gap-4 p-18 rounded-3xl backdrop-blur-xs shadow-xl min-w-[350px"
      >
        <h2 className="font-bold text-3xl text-center text-white">Sign up</h2>
=======
      <form className="flex flex-col gap-4 p-18 rounded-3xl backdrop-blur-xs shadow-xl">
        <h2 className="font-bold text-3xl text-center">Sign up</h2>

>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
        <input
          type="text"
          name="username"
          placeholder="Enter Your Username"
          className="bg-white py-2 px-3 w-full rounded-xl"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          className="bg-white py-2 px-3 w-full rounded-xl"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
<<<<<<< HEAD
          minLength={6}
          className="bg-white py-2 px-3 w-full rounded-xl"
          required
          value={formData.password}
          onChange={handleChange}
=======
          minLength={8}
          maxLength={20}
          className="bg-white py-2 px-3 w-80 rounded-xl"
          required

>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
        />

        <input
          type="password"
<<<<<<< HEAD
          name="confirmPassword"
          placeholder="Confirm Password"
          className="bg-white py-2 px-3 w-full rounded-xl"
=======
          placeholder="Confirm Password"
          className="bg-white py-2 px-3 w-80 rounded-xl"
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
          required
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <button
          type="submit"
<<<<<<< HEAD
          className="bg-blue-400 text-white font-medium py-2 rounded-xl hover:cursor-pointer hover:bg-blue-500 transition-colors"
        >
          Sign Up
        </button>
        <span className="text-white text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white underline hover:text-violet-500 font-bold"
          >
            Login
          </Link>
        </span>
        <hr className="border-white/20" />
=======
          className="bg-blue-400 text-white font-medium py-2 rounded-xl"
        >
          Sign Up
        </button>

        <span className="text-white">
          Already have an account?{" "}
          <Link to="/Login" className="underline hover:text-violet-500">
            Login
          </Link>
        </span>

        <hr />

        <button
          type="button"
          onClick={() => loginWithGoogle()}
          className="flex items-center justify-center gap-2 bg-white text-black py-2 px-4 rounded-xl shadow hover:bg-gray-100"
        >
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google"
            className="w-5 h-5"
          />
          Log In With Google
        </button>

>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
        <Link
          to="/"
          className="bg-gray-300 text-black py-2 rounded-xl text-center hover:bg-gray-400 transition-colors"
        >
          Back to Home
        </Link>
      </form>
    </div>
  );
}
