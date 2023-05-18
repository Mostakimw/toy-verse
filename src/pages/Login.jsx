import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex shadow-md">
          <div className="w-1/2 flex flex-col justify-center bg-base-100  rounded px-8 pt-6 pb-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
              Please Login
            </h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-4">
                  Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <div className="flex items-center justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <div>
              <p className="mt-6 text-center">
                New to{" "}
                <Link to="/" className="text-blue-500 hover:text-blue-700">
                  ToyVerse
                </Link>
                ? Please{" "}
                <Link to="/register" className="link">
                  Register
                </Link>
              </p>
            </div>
          </div>
          <div className="w-1/2">
            <img
              className="object-cover h-full w-full"
              src="https://img.freepik.com/free-vector/cute-panda-sipping-boba-milk-tea-cartoon-icon-illustration-animal-food-icon-concept-isolated-flat-cartoon-style_138676-2173.jpg?w=740&t=st=1684367508~exp=1684368108~hmac=76921a051c70d6bbb8d0098e573b02928bd97410572fc150a58f398660652fd0"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
