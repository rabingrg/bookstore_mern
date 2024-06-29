import { SubmitHandler, useForm } from "react-hook-form";
import { request } from "../api/request";
export interface RegisterFields {
  fullName: string;
  emailId: string;
  password: string;
  phoneNumber: number;
}

const Register = ({ handleTabChange }: { handleTabChange: () => void }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFields>();

  const onSubmit: SubmitHandler<RegisterFields> = async (data) => {
    const signupData: RegisterFields = {
      fullName: data?.fullName,
      emailId: data?.emailId,
      password: data?.password,
      phoneNumber: data?.phoneNumber,
    };
    try {
      const res = await request.user.signup(signupData);
      if (res?.data) {
        alert("Registration Successful");
        reset();
      } else {
        alert("Error registering user");
      }
    } catch (error) {
      if (error?.response) {
        alert(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      {" "}
      <p className="font-bold text-xl dark:text-black">Sign Up</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex flex-col gap-1">
            <span className="dark:text-black">Full Name</span>
            <input
              type="text"
              className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
              placeholder="Enter your full name"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="text-red-500 text-sm">
                Full Name is required
              </span>
            )}
          </div>
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
              type="text"
              className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">Password is required</span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <span className="dark:text-black">Phone Number</span>
            <input
              type="text"
              className="grow w-full bg-slate-50 rounded-lg p-3 outline-none border-[1px]"
              placeholder="Enter your phone number"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                Phone Number is required
              </span>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-between pr-3 mt-5">
          <button className="btn btn-secondary w-1/4 text-base" type="submit">
            Sign up
          </button>
          <p className="text-lg">
            Already Registered?{" "}
            <button
              className="underline text-blue-600 ml-1"
              onClick={handleTabChange}
            >
              Login
            </button>
          </p>
        </div>
      </form>
    </>
  );
};

export default Register;
