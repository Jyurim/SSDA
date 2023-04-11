import { Formik } from "formik";
import * as Yup from "yup";

const ResetPasswordSchema = Yup.object().shape({
  password: Yup.string().required("필수 정보입니다.").min(6, "6자리 이상 입력해주세요."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required("필수 정보입니다."),
});

const ResetPassword = () => {
  return (
    <div className="g-6 container flex h-full flex-wrap justify-center px-4 py-5 md:container md:mx-auto">
      <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="px-4 md:px-0">
            <div className="md:mx-6 md:p-12">
              <div className="text-center">
                <h1 className="text-4xl font-bold">비밀번호 재설정</h1>
                <p className="my-4 py-2 text-xl text-gray-400">새로운 비밀번호를 입력해주세요.</p>
              </div>
              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={ResetPasswordSchema}
                onSubmit={values => {
                  // same shape as initial values
                  console.log(values);
                  alert("회원가입이 완료되었습니다.\n로그인 페이지로 이동합니다.");
                  window.location.href = "/login";
                }}
              >
                {formik => (
                  <form onSubmit={formik.handleSubmit}>
                    <div className="relative mb-6">
                      <label className="block">
                        <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                          비밀번호
                        </span>
                        <input
                          type="password"
                          id="password"
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
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
                          className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                          {...formik.getFieldProps("confirmPassword")}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                          <div className="text-sm text-red-500">
                            {formik.errors.confirmPassword}
                          </div>
                        ) : null}
                      </label>
                    </div>
                    <div className="text-center lg:text-left">
                      <button
                        type="submit"
                        className="hover:bg-blue-600-600 focus:bg-blue-600-600 active:bg-blue-600-700 inline-block rounded bg-blue-600 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      >
                        완료
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

export default ResetPassword;
