/* eslint-disable react/prop-types */
import "./auth.css";
import { Button, Input } from "@mantine/core";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

export default function Login() {
  const [isShowPw, setIsShowPw] = useState(false);

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

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    password: Yup.string()
      .min(6, "Password minimal 6 karakter")
      .required("Password harus diisi"),
  });

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
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
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, values, touched, handleChange }) => (
              <Form>
                {console.log(touched)}
                <div className="w-full flex flex-col gap-8 mt-10 mb-10">
                  <div className="">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      size="lg"
                      variant="filled"
                      radius={"md"}
                      error={touched.email && errors.email}
                      value={values.email}
                      onChange={handleChange}
                      leftSection={<MdEmail size={20} />}
                    />
                    {touched.email && errors.email && (
                      <TextError message={errors.email} />
                    )}
                  </div>
                  <div className="">
                    <Input
                      name="password"
                      type={isShowPw ? "text" : "password"}
                      placeholder="Password"
                      size="lg"
                      variant="filled"
                      radius={"md"}
                      rightSectionPointerEvents="all"
                      error={touched.password && errors.password}
                      value={values.password}
                      onChange={handleChange}
                      leftSection={<FaLock size={20} />}
                      rightSection={<BtnEyes />}
                    />
                    {touched.password && errors.password && (
                      <TextError message={errors.password} />
                    )}
                  </div>
                </div>
                <Button
                  size="lg"
                  radius={"md"}
                  fullWidth
                  color="red"
                  type="submit"
                  // disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </main>
      </section>
    </main>
  );
}
