import "./auth.css";
import { Button, Input } from "@mantine/core";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextErrorInput from "../../components/ui/text-error-input";
import BtnEyesInput from "../../components/ui/btn-eyes-input";
import { Alert, useHandleAlert } from "sstra-alert";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/layout/loading";
import { useUserLogin } from "../../api/queries/useUserQuery";
export default function Login() {
  const [isShowPw, setIsShowPw] = useState(false);

  const { status, data, handleAlert } = useHandleAlert();
  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email tidak valid")
      .required("Email harus diisi"),
    password: Yup.string()
      .min(5, "Password minimal 6 karakter")
      .required("Password harus diisi"),
  });

  const login = useUserLogin();

  const handleSubmit = async (values) => {
    login.mutate(values, {
      onSuccess: () => {
        handleAlert("success", "Login berhasil");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      },
      onError: (err) => {
        console.log(err);
        handleAlert("error", err.message);
      },
    });
  };

  return (
    <main className="login-container flex justify-center items-center">
      <Alert
        status={status}
        type={data.type}
        message={data.message}
        background={"bg-white"}
      />
      {login.isPending && <Loading />}
      <section className="card-login">
        <main className="w-[450px] h-max text-white py-10 px-8 bg-blur-black">
          <h1 className="text-center benner text-[2rem] tracking-widest">
            Login
          </h1>
          <p className="text-center text-sm text-gray-300 mt-1">
            Access your account to continue.
          </p>
          <Formik
            initialValues={{ email: "admin@gmail.com", password: "admin123" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, values, touched, handleChange }) => (
              <Form>
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
                      <TextErrorInput message={errors.email} />
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
                      rightSection={
                        <BtnEyesInput state={isShowPw} setState={setIsShowPw} />
                      }
                    />
                    {touched.password && errors.password && (
                      <TextErrorInput message={errors.password} />
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
