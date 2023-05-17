"use client";
import Menu from "../Menu";
import { Formik } from "formik";
import * as Yup from "yup";

const UserCheckSchema = Yup.object().shape({
  password: Yup.string().required("비밀번호를 입력해주세요."),
});

const UserCheck = () => {
  return (
    <div className="flex">
      <div className="">
        <Menu />
      </div>
      <div className="w-full">
        <div className=" px-3 py-4">
          <section className="gradient-form h-full">
            <div className="container flex h-full flex-col justify-center px-4 py-5 md:container md:mx-auto">
              <div className="g-6 flex h-full flex-wrap text-neutral-800 dark:text-neutral-200">
                <div className="w-7/12">
                  <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                    <div className="px-4 md:px-0 lg:w-10/12">
                      <div className="md:mx-6 md:p-12">
                        <Formik
                          initialValues={{
                            password: "",
                          }}
                          validationSchema={UserCheckSchema}
                          onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                          }}
                        >
                          {formik => (
                            <form onSubmit={formik.handleSubmit}>
                              <div className="relative mb-6">
                                <input
                                  type="password"
                                  id="password"
                                  className="peer block min-h-[auto] w-full rounded border-slate-300 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                  placeholder="Password"
                                  {...formik.getFieldProps("password")}
                                />
                                <label
                                  // className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                  className="absolute left-2 -top-3 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:-mt-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-5 peer-focus:text-sm peer-focus:text-blue-600"
                                  htmlFor="password"
                                >
                                  비밀번호
                                </label>
                                {formik.touched.password && formik.errors.password ? (
                                  <div className="text-sm text-red-500">
                                    {formik.errors.password}
                                  </div>
                                ) : null}
                              </div>

                              <div className="text-center lg:text-left">
                                <button
                                  type="submit"
                                  className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                                >
                                  확인
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
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserCheck;
