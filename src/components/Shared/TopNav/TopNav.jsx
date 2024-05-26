import moment from "moment";
import "./TopNav.css";
import { RxDashboard } from "react-icons/rx";
import { PiDotsThreeOutline } from "react-icons/pi";
import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="bg-indigo-400 w-full   pt-6  pb-3 ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between  ">
          {/* Dashboard */}
          <div>
            <Link>
              <RxDashboard className="text-lg lg:text-2xl text-white dashboard" />
            </Link>
          </div>

          {/* Search bar */}
          <div className="w-1/2">
            <input type="text" className="rounded-xl w-full lg:py-1 " />
          </div>

          {/* Label and Priority option */}
          <div>
            <PiDotsThreeOutline className="text-lg lg:text-2xl text-white labels" />
          </div>
        </div>

        {/* Date and Title */}

        <div className="text-white mt-2">
          <p>Today, {moment().format("MMM D")}</p>
          <h4 className="text-xl">My tasks</h4>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
