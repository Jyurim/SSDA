import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const noAuth = (router: AppRouterInstance) => {
  MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: "회원만 이용하실 수 있습니다.",
  }).then(() => {
    router.back();
  });
};

export const SuccessWithMsgRouter = (
  title: string,
  message: string,
  router: AppRouterInstance,
  path: string,
) => {
  MySwal.fire({
    icon: "success",
    title: title,
    text: message,
  }).then(() => {
    router.push(path);
  });
};

export const ErrorWithMsgRouter = (
  title: string,
  message: string,
  router: AppRouterInstance,
  path: string,
) => {
  MySwal.fire({
    icon: "error",
    title: title,
    text: message,
  }).then(() => {
    router.push(path);
  });
};

export const SuccessWithMsg = (title: string, message: string) => {
  MySwal.fire({
    icon: "success",
    title: title,
    text: message,
  });
};

export const ErrorWithMsg = (title: string, message: string) => {
  MySwal.fire({
    icon: "error",
    title: title,
    text: message,
  });
};
