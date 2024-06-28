import { useState } from "react";
import Login from "../Login";
import Register from "../Register";

const LoginRegisterModal = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false);

  const handleModalClose = () => {
    setIsRegister(false);
  };

  const handleTabChange = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <dialog id="login_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={handleModalClose}
            >
              ✕
            </button>
          </form>
          {isRegister ? (
            <Login handleTabChange={handleTabChange} />
          ) : (
            <Register handleTabChange={handleTabChange} />
          )}
        </div>
      </dialog>
    </>
  );
};

export default LoginRegisterModal;
