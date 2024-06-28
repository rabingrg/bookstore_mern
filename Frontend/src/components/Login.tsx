const Login = ({ handleTabChange }: { handleTabChange: () => void }) => {
  return (
    <>
      {" "}
      <p className="font-bold text-xl dark:text-black">Login</p>
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex flex-col gap-1">
          <span className="dark:text-black">Email</span>
          <input
            type="text"
            className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="dark:text-black">Password</span>
          <input
            type="text"
            className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-between pr-3 mt-5">
        <button className="btn btn-secondary w-1/4 text-base">Log in</button>
        <p className="text-lg">
          Not Registered?{" "}
          <button
            className="underline text-blue-600 ml-1"
            onClick={handleTabChange}
          >
            Signup
          </button>
        </p>
      </div>
    </>
  );
};

export default Login;
