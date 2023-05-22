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

export const alertWithMessage = (message: string) => {
  MySwal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
