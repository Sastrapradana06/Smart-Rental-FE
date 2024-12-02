/* eslint-disable react/prop-types */
import "./auth.css";
import { Button, Input } from "@mantine/core";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
export default function Login() {
  const [isShowPw, setIsShowPw] = useState(false);
  const [errorInput, setErrorInput] = useState({
    email: "",
    password: "",
  });
  const BtnEyes = () => {
    return (
      <button className="cursor-pointer" onClick={() => setIsShowPw(!isShowPw)}>
        {isShowPw ? <FaEyeSlash size={25} /> : <IoEyeSharp size={25} />}
      </button>
    );
  };

  const TextError = ({ message }) => {
    return <p className="mt-1 text-red-500 text-[.9rem]">{message}</p>;
  };

  const handleSubmit = () => {
    setErrorInput({
      email: "",
      password: "",
    });
    if (!errorInput.email) {
      setErrorInput({
        ...errorInput,
        email: "Email is required",
      });
    }
    if (!errorInput.password) {
      setErrorInput({
        ...errorInput,
        password: "Password is required",
      });
    }
  };

  return (
    <main className="login-container flex justify-center items-center">
      <section className="card-login">
        <main className="w-[450px] h-max text-white py-10 px-8 bg-blur-black">
          <h1 className="text-center benner text-[2rem] tracking-widest">
            Login
          </h1>
          <p className="text-center text-sm text-gray-300 mt-1">
            Access your account to continue.
          </p>
          <div className="w-full flex flex-col gap-8 mt-10 mb-10">
            <div className="">
              <Input
                type="email"
                placeholder="Email Address"
                size="lg"
                variant="filled"
                radius={"md"}
                error={errorInput.email}
                leftSection={<MdEmail size={20} />}
              />
              {errorInput.email && <TextError message={errorInput.email} />}
            </div>
            <div className="">
              <Input
                type={isShowPw ? "text" : "password"}
                placeholder="Password"
                size="lg"
                variant="filled"
                radius={"md"}
                rightSectionPointerEvents="all"
                error={errorInput.password}
                leftSection={<FaLock size={20} />}
                rightSection={<BtnEyes />}
              />
              {errorInput.password && (
                <TextError message={errorInput.password} />
              )}
            </div>
          </div>
          <Button
            size="lg"
            radius={"md"}
            fullWidth
            color="red"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </main>
      </section>
    </main>
  );
}
