const Register = () => {
  return (
    <div>
      <form className="max-w-screen-sm mx-auto ">
        <div className=" flex flex-col justify-center items-center p-16 bg-slate-200 ">
          <div className="mb-8">
            <p className="text-slate-400 mx-2 text-sm">EMAIL ADDRESS</p>
            <input
              className="py-1 px-5 rounded-2xl"
              type="email"
              name="email"
            />
          </div>

          <div className=" ">
            <p className="text-slate-400 mx-2 text-sm">PASSWORD</p>
            <input
              className="py-1 px-5 rounded-2xl"
              type="password"
              name="password"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
