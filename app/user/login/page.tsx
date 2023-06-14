"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@public/logo.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
interface ILoginForm {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("아이디를 입력해주세요."),
  password: Yup.string().required("비밀번호를 입력해주세요."),
});

const Login = () => {
  const LoginForm: ILoginForm = {
    username: "",
    password: "",
  };

  const handleSubmit = async (values: ILoginForm) => {
    await signIn("credentials", {
      username: values.username,
      password: values.password,
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <div className="g-6 container flex min-h-3/4 flex-wrap items-center justify-center px-4 py-5 text-neutral-800 md:container dark:text-neutral-200 md:mx-auto">
      <div className="block w-full rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        <div className="g-0 lg:flex lg:flex-wrap">
          <div className="flex items-center justify-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
            <Image src={logo} alt="" />
          </div>
          <div className="px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12">
              <Formik
                initialValues={LoginForm}
                validationSchema={LoginSchema}
                onSubmit={handleSubmit}
              >
                {formik => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative mb-6">
                      <input
                        type="text"
                        id="username"
                        className="... peer peer block min-h-[auto] w-full rounded border-inherit bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="아이디"
                        {...formik.getFieldProps("username")}
                      />
                      <label
                        className="absolute -top-3 left-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:-mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                        htmlFor="username"
                      >
                        아이디
                      </label>
                      {formik.touched.username && formik.errors.username ? (
                        <div className="text-sm text-red-500">{formik.errors.username}</div>
                      ) : null}
                    </div>

                    <div className="relative mb-6">
                      <input
                        type="password"
                        id="password"
                        className="peer block min-h-[auto] w-full rounded border-inherit bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        placeholder="Password"
                        {...formik.getFieldProps("password")}
                      />
                      <label
                        // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                        className="absolute -top-3 left-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:-mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                        htmlFor="password"
                      >
                        비밀번호
                      </label>
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-sm text-red-500">{formik.errors.password}</div>
                      ) : null}
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                        <input
                          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-blue-600 checked:bg-blue-600 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-blue-600 dark:checked:bg-blue-600"
                          id="remember"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="inline-block pl-[0.15rem] hover:cursor-pointer"
                          htmlFor="remember"
                        >
                          로그인 상태 유지
                        </label>
                      </div>
                      <a href="reset">비밀번호 찾기</a>
                    </div>

                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        로그인
                      </button>
                      <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                        계정이 없으신가요?{" "}
                        <Link
                          href="/user/signup"
                          className="text-red transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700"
                        >
                          회원가입
                        </Link>
                      </p>
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

export default Login;
