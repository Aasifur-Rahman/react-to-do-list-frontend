import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { CgAdd } from "react-icons/cg";
import { SlCalender } from "react-icons/sl";
import { BsTag } from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { CiWarning } from "react-icons/ci";
import { RiUploadCloudFill } from "react-icons/ri";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const BottomNav = () => {
  const { saveData } = useContext(AuthContext);

  const handleTaskInput = (e) => {
    e.preventDefault();

    const input1 = e.target.title.value;
    const input2 = e.target.content.value;

    console.log(input1, input2);

    saveData(input1, input2)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className=" fixed bottom-0 left-0 w-full h-15 dark:bg-base-200 ">
      <ul className="  bg-base-200   flex justify-around items-center">
        <li className="">
          <Link to="/">
            <IoHome className="text-xl mt-1 text-gray-400 hover:text-indigo-500 " />
          </Link>
        </li>
        <li>
          <div className=" relative  ">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className=" absolute bottom-1/2  -right-4 "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <CgAdd className="text-3xl  text-indigo-500 mx-auto " />
            </button>
            <dialog id="my_modal_3" className="modal  justify-center  ">
              <div>
                <div className="modal-box w-full p-10  ">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  <form onSubmit={handleTaskInput}>
                    <h3 className="font-bold text-lg mb-3 ">
                      What would you like to do?
                    </h3>
                    <div>
                      <input
                        className="px-2 py-2 w-full rounded-lg text-md outline-none"
                        type="text"
                        placeholder="Title"
                        required
                        name="title"
                      />
                      <textarea
                        className="px-2 py-2 w-full rounded-lg text-sm outline-none"
                        name="content"
                        id=""
                      ></textarea>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center justify-evenly gap-5">
                        <div>
                          <button className="">
                            <SlCalender className="text-xl text-indigo-500" />
                          </button>
                        </div>
                        <div>
                          <button>
                            <CiWarning className="text-xl text-indigo-400" />
                          </button>
                        </div>
                        <div>
                          <button>
                            <BsTag className="text-xl text-indigo-400" />
                          </button>
                        </div>
                        <div>
                          <button>
                            <LuListTodo className="text-xl text-indigo-400" />
                          </button>
                        </div>
                      </div>

                      <button>
                        <RiUploadCloudFill className="text-2xl text-indigo-400" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </li>

        <li>
          <button className="">
            <SlCalender className="text-xl text-gray-400 mt-2 hover:text-indigo-500" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default BottomNav;
