import facebook from "../../../assets/Logo/facebook.png";
import google from "../../../assets/Logo/66903-google-pay-gboard-platform-logo-cloud.png";
import X from "../../../assets/Logo/X.png";
import introImg from "../../../assets/Logo/512px-Taskful_Logo.svg.png";

import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="max-w-screen-sm mx-auto font-poppins">
      <div className="flex flex-col justify-center items-center">
        <div className="mt-16">
          <img className="w-2/6 mx-auto" src={introImg} alt="" />
        </div>
        <h2 className="text-2xl font-semibold text-indigo-500 text-center mt-5">
          {"Let's"} get started!
        </h2>
      </div>

      <form className="  mt-5 p-2 mb-3">
        <div className=" flex flex-col justify-center items-center mb-5  ">
          <div className="mb-3 w-2/3   ">
            <p className="text-slate-400 mx-2 text-xs mb-1">EMAIL ADDRESS</p>
            <input
              className="py-1 px-5 w-full mx-auto  rounded-2xl focus:outline-none  bg-blue-50 "
              type="email"
              name="email"
            />
          </div>

          <div className="w-2/3 ">
            <p className="text-slate-400 mx-2 text-xs mb-1">PASSWORD</p>
            <input
              className="py-1 px-5 w-full rounded-2xl focus:outline-none bg-blue-50  "
              type="password"
              name="password"
            />
          </div>
        </div>
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
          Already have an account?{" "}
          <span className="text-indigo-500">
            <Link to="/login">Log in</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
