import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("이메일 형태가 아닙니다.").required("이메일을 입력해주세요."),
});

const Reset = () => {
  return (
    <section className="h-screen">
      <div className="container flex flex-col justify-center px-4 py-5 md:container md:mx-auto">
        <div className="g-6 flex h-full flex-wrap justify-center">
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className="text-center">
              <h1 className="text-4xl font-bold">Reset Password</h1>
              <p className="my-4 py-2 text-xl text-gray-400">
                Enter your email to reset your password.
              </p>
            </div>
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
                alert("이메일 전송이 완료되었습니다");
              }}
            >
              {formik => (
                <form onSubmit={formik.handleSubmit}>
                  <div className="relative mb-6">
                    <label className="block">
                      <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500">
                        이메일
                      </span>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                        placeholder="you@example.com"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className="text-sm text-red-500">{formik.errors.email}</div>
                      ) : null}
                    </label>
                  </div>
                  <div className="text-center lg:text-left">
                    <button
                      type="submit"
                      className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    >
                      이메일 전송
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

export default Reset;
