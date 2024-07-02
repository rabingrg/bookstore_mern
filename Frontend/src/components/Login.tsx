import { SubmitHandler, useForm } from "react-hook-form";
import { request } from "../api/request";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export interface LoginFields {
  emailId: string;
  password: string;
}

const Login = ({ handleTabChange }: { handleTabChange: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFields>();
  const { handleAuthUser } = useContext(AuthContext);

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    const loginData: LoginFields = {
      emailId: data?.emailId,
      password: data?.password,
    };
    try {
      const res = await request.user.login(loginData);
      if (res?.data) {
        alert("Successfully logged in!");
        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        handleAuthUser(res?.data?.user);
        setTimeout(() => {
          document?.getElementById("login_modal")?.close();
          reset();
        }, 600);
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="font-bold text-xl dark:text-black">Login</p>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex flex-col gap-1">
            <span className="dark:text-black">Email</span>
            <input
              type="text"
              className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
              placeholder="Enter your email"
              {...register("emailId", { required: true })}
            />
            {errors.emailId && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="dark:text-black">Password</span>
            <input
              type="password"
              className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-between pr-3 mt-5">
          <button className="btn btn-secondary w-1/4 text-base" type="submit">
            Log in
          </button>
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
      </form>
    </>
  );
};

export default Login;
