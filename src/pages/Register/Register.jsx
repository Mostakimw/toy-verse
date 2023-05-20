import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  useTitle("Register");
  // ! registration handler
  const handleRegister = (e) => {
    e.preventDefault();

    // password validation check
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      setError("password should be 8 char with uppercase");
      return;
    }

    registerUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(result.user, name, photoUrl);
        setUser(loggedUser);
        setSuccess("Registration Successful");
      })
      .catch((error) => {
        setError("Something went wrong");
      });
  };

  // ! update profile information
  const updateUserProfile = (user, name, photoUrl) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch((err) => {
        setError(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex shadow-md">
          <div className="lg:w-1/2 flex flex-col justify-center bg-base-100  rounded px-8 pt-6 pb-8 ">
            <h2 className="my-title">Register Now</h2>
            <form onSubmit={handleRegister}>
              <div className="pt-5">
                {user ? (
                  <p className="text-success mb-2">{success}</p>
                ) : (
                  <p className="text-error mb-2">{error}</p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
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
              <div className="mb-6">
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
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-4">
                  Photo URL
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Photo Url"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-center">
                <button
                  className="my-btn"
                  type="submit"
                  style={{ padding: "16px 28px 16px 28px" }}
                >
                  Register
                </button>
              </div>
            </form>
            <div>
              <p className="mt-6 text-center">
                Already Have an Account in{" "}
                <Link to="/" className="text-blue-500 hover:text-blue-700">
                  ToyVerse
                </Link>
                ? Please{" "}
                <Link to="/login" className="link text-[#CF4B5A]">
                  Login
                </Link>
              </p>
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

export default Register;
