import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className=" fixed bottom-0 left-0 w-full h-10 dark:bg-base-200 ">
      <ul className="  bg-base-200 rounded-box  flex justify-around items-center">
        <li className="">
          <Link to="/">
            <IoHome className="text-xl mt-1 hover:text-indigo-500 " />
          </Link>
        </li>
        <li>
          <div className=" relative  ">
            <button className=" absolute bottom-1/2  -right-4   ">
              <CgAdd className="text-3xl text-indigo-500 mx-auto " />
            </button>
          </div>
        </li>
        <li>
          <button className="">
            <SlCalender className="text-xl mt-2 hover:text-indigo-500" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
<h1>This is Navbar</h1>;
