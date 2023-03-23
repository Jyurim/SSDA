import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import logo from "../../public/logo.png";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("필수 정보입니다."),
  email: Yup.string().email("이메일 형태가 아닙니다.").required("필수 정보입니다."),
  password: Yup.string().required("필수 정보입니다.").min(6, "6자리 이상 입력해주세요."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 정보입니다."),
});

const Singup = () => {
  return (
    <section className="h-screen">
      <div className="h-1/2">
        <div
          className="g-6 flex h-full flex-wrap items-center justify-center"
          style={{ margin: "50px auto" }}
        >
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Image src={logo} alt="" className="w-1/2" style={{ margin: "0 auto" }} />
          </div>

          <div
            className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12"
            style={{ paddingRight: "100px" }}
          >
            <Formik
              initialValues={{
                username: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                // same shape as initial values
                console.log(values);
              }}
            >
              {formik => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="block">
                      <span className="text-slate-700  block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                        닉네임
                      </span>
                      <input
                        type="text"
                        id="username"
                        className="border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 mt-1 block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                        {...formik.getFieldProps("username")}
                      />
                      {formik.touched.username && formik.errors.username ? (
                        <div className="text-sm text-red-500">{formik.errors.username}</div>
                      ) : null}
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="block">
                      <span className="text-slate-700 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                        이메일
                      </span>
                      <input
                        type="email"
                        id="email"
                        className="border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 mt-1 block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                        placeholder="you@example.com"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-sm text-red-500">{formik.errors.email}</div>
                      ) : null}
                    </label>
                  </div>

                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="block">
                      <span className="text-slate-700 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                        비밀번호
                      </span>
                      <input
                        type="password"
                        id="password"
                        className="border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 mt-1 block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                        {...formik.getFieldProps("password")}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-sm text-red-500">{formik.errors.password}</div>
                      ) : null}
                    </label>
                  </div>
                  <div className="relative mb-6" data-te-input-wrapper-init>
                    <label className="block">
                      <span className="text-slate-700 block text-sm font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
                        비밀번호 재확인
                      </span>
                      <input
                        type="password"
                        id="confirmPassword"
                        className="border-slate-300 placeholder-slate-400 focus:border-sky-500 focus:ring-sky-500 mt-1 block w-full rounded-md border bg-white px-3 py-2 shadow-sm focus:outline-none focus:ring-1 sm:text-sm"
                        {...formik.getFieldProps("confirmPassword")}
                      />
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="text-sm text-red-500">{formik.errors.confirmPassword}</div>
                      ) : null}
                    </label>
                  </div>
                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      sign up
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singup;
