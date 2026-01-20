<<<<<<< HEAD
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Save token and user info
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("username", data.username);
        localStorage.setItem("role", data.role);

        alert("Login Successful!");
        navigate("/"); // Redirect to Home
        window.location.reload(); // Optional: Reload to update Navbar state
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
=======
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {

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
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-18 rounded-3xl backdrop-blur-xs shadow-xl min-w-[350px"
      >
        <h2 className="font-bold text-3xl text-center text-white">Login</h2>
        <input
          type="text"
          name="username"
=======
      <form className="flex flex-col gap-4 p-18 rounded-3xl backdrop-blur-xs shadow-xl">
        <h2 className="font-bold text-3xl text-center">Login</h2>

        <input
          type="text"
          name="email"
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
          placeholder="Enter Your Email or Username"
          className="bg-white py-2 px-3 w-full rounded-xl outline-none"
          required
          value={formData.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          minLength={6}
          className="bg-white py-2 px-3 w-full rounded-xl"
          required
          value={formData.password}
          onChange={handleChange}
        />

        <Link
<<<<<<< HEAD
          to="/forgetpassword"
          className=" text-white underline hover:text-violet-500 text-sm"
=======
          to="/Forgetpassword"
          className="text-white underline hover:text-violet-500"
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
        >
          Forget Password?
        </Link>

        <button
          type="submit"
<<<<<<< HEAD
          className="bg-blue-400 text-white font-medium py-2 rounded-xl hover:cursor-pointer hover:bg-blue-500 transition-colors"
        >
          Login
        </button>
        <span className=" text-white text-center">
          Not have an account?{" "}
          <Link
            to="/signup"
            className=" text-white underline hover:text-violet-500 font-bold"
          >
=======
          className="bg-blue-400 text-white font-medium py-2 rounded-xl"
        >
          Login
        </button>

        <span className="text-white">
          Not have an account?{" "}
          <Link to="/signup" className="underline hover:text-violet-500">
>>>>>>> 8cebf9cbacd9c20cadc7c2d09073714c65950344
            Sign Up Here
          </Link>
        </span>

        
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
