import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const { loginUser, user, googleSignIn } = useContext(AuthContext);
  console.log(loginUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  console.log(email, password);
  useTitle("Login");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);
      })
      .catch((err) => {
        setError("Email Or Password Does not Match");
      });
  };

  const googleLogin = () => {
    googleSignIn().then((result) => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex shadow-md">
          <div className="lg:w-1/2 flex flex-col justify-center bg-base-100  rounded px-8 pt-6 pb-8">
            <h2 className="my-title">Please Login</h2>
            <form onSubmit={handleLogin}>
              <div className="pt-5">
                {user ? <p className="text-error mb-2">{error}</p> : ""}
              </div>
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
                  className="px-8 py-8 my-btn"
                  style={{ padding: "16px 28px 16px 28px" }}
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
                <Link to="/register" className="link text-[#CF4B5A]">
                  Register
                </Link>
              </p>
            </div>
            <div className="flex justify-center mt-5">
              <button onClick={googleLogin} className="w-2/3 btn btn-outline ">
                <span className="flex items-center">
                  <FaGoogle className="text-[#CF4B5A] mr-2 " />
                  Sign in with Google
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
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
