"use client";

import Image from "next/image";
import logo from "@public/logo.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";
interface ISignupForm {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("필수 정보입니다."),
  email: Yup.string().email("이메일 형태가 아닙니다.").required("필수 정보입니다."),
  password: Yup.string().required("필수 정보입니다.").min(6, "6자리 이상 입력해주세요."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 정보입니다."),
});

const Singup = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const SignupForm: ISignupForm = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values: ISignupForm) => {
    setIsLoading(true);
    await axios
      .post("/signup", {
        username: values.username,
        email: values.email,
        password: values.password,
      })
      .then(res => {
        setIsLoading(false);
        res.status === 200 && alert("회원가입이 완료되었습니다.");
        window.location.href = "/user/login";
      })
      .catch(err => {
        console.log("오류가 발생하였습니다.\n" + err);
      });
  };

  return (
    <div className="g-6 container flex h-full min-h-3/4 flex-wrap items-center justify-center px-4 py-5 text-neutral-800 md:container dark:text-neutral-200 md:mx-auto">
      <div className="block w-full rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        <div className="g-0 lg:flex lg:flex-wrap">
          <div className="flex items-center justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
            <Image src={logo} alt="" />
          </div>
          <div className="px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12">
              <Formik
                initialValues={SignupForm}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
              >
                {formik => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative mb-6">
                      <label className="block">
                        <span className="block  text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                          아이디
                        </span>
                        <input
                          type="text"
                          id="username"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                          {...formik.getFieldProps("username")}
                        />
                        {formik.touched.username && formik.errors.username ? (
                          <div className="text-sm text-red-500">{formik.errors.username}</div>
                        ) : null}
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                          이메일
                        </span>
                        <input
                          type="email"
                          id="email"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                          placeholder="you@example.com"
                          {...formik.getFieldProps("email")}
                        />
                        {formik.touched.email && formik.errors.email ? (
                          <div className="text-sm text-red-500">{formik.errors.email}</div>
                        ) : null}
                      </label>
                    </div>

                    <div className="relative mb-6">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                          비밀번호
                        </span>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                          {...formik.getFieldProps("password")}
                        />
                        {formik.touched.password && formik.errors.password ? (
                          <div className="text-sm text-red-500">{formik.errors.password}</div>
                        ) : null}
                      </label>
                    </div>
                    <div className="relative mb-6">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                          비밀번호 재확인
                        </span>
                        <input
                          type="password"
                          id="confirmPassword"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                          {...formik.getFieldProps("confirmPassword")}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className="text-sm text-red-500">
                            {formik.errors.confirmPassword}
                          </div>
                        ) : null}
                      </label>
                    </div>
                    <div className="flex flex-row items-center justify-between text-center lg:text-left">
                      <button
                        disabled={isLoading}
                        type="submit"
                        className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        {isLoading ? (
                          <svg
                            className="h-5 w-5 animate-spin text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            ></path>
                          </svg>
                        ) : (
                          <>회원가입</>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singup;
