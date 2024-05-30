import facebook from "../../../assets/Logo/facebook.png";
import google from "../../../assets/Logo/66903-google-pay-gboard-platform-logo-cloud.png";
import X from "../../../assets/Logo/X.png";
import introImg from "../../../assets/Logo/512px-Taskful_Logo.svg.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        // navigate user to home page
        navigate(location?.state ? location.state : "/mytasks");
      })
      .catch((error) => {
        console.log(error.message);
        setError("Invalid password or Emails");
      });
  };

  return (
    <div>
      <div className="max-w-screen-sm mx-auto font-poppins">
        <div className="flex flex-col justify-center items-center">
          <div className="mt-16">
            <img className="w-2/6 mx-auto" src={introImg} alt="" />
          </div>
          <h2 className="text-2xl font-semibold text-indigo-500 text-center mt-5">
            {"Let's"} get started!
          </h2>
        </div>

        <form onSubmit={handleLogin} className="  mt-5 p-2 mb-3">
          <div className=" flex flex-col justify-center items-center mb-5  ">
            <div className="mb-3 w-2/3 ">
              <p className="text-slate-400 mx-2 text-xs mb-1">EMAIL ADDRESS</p>
              <input
                className="py-1 px-5 w-full mx-auto  rounded-2xl focus:outline-none  bg-blue-50 dark:focus:bg-slate-700 "
                type="email"
                name="email"
              />
            </div>

            <div className="w-2/3 relative ">
              <div>
                <p className="text-slate-400 mx-2 text-xs mb-1">PASSWORD</p>
                <input
                  className="py-1 px-5 w-full rounded-2xl focus:outline-none bg-blue-50 dark:focus:bg-slate-700 "
                  type={showPassword ? "text" : "password"}
                  name="password"
                />
              </div>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-7 right-2"
              >
                {showPassword ? (
                  <FaRegEye></FaRegEye>
                ) : (
                  <FaRegEyeSlash></FaRegEyeSlash>
                )}
              </span>
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-xs text-center mb-4">{error}</p>
          )}

          <div className="text-center">
            <button className=" font-semibold text-sm bg-indigo-500 hover:bg-indigo-600 px-6 py-2 text-white rounded-2xl">
              Sign up
            </button>
          </div>
        </form>

        {/* social auth */}
        <div>
          <p className="text-slate-400 text-xs text-center">or sign up with</p>

          <div className="flex justify-center items-center mt-2">
            <button>
              <img className="w-12" src={facebook} alt="" />
            </button>

            <button>
              <img className="w-12" src={google} alt="" />
            </button>

            <button>
              <img className="w-12" src={X} alt="" />
            </button>
          </div>
        </div>

        {/* send to Login */}

        <div className="mt-5">
          <p className="text-slate-400 text-xs text-center">
            {"Don't"} have an account?{" "}
            <span className="text-indigo-500">
              <Link to="/register">Register here</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
