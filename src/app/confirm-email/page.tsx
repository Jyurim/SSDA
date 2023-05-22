"use client";

<<<<<<< Updated upstream:src/app/confirm-email/page.tsx
import { confirmEmailClient } from "@/api/confirmEmailClient";
=======
import { SuccessWithMsg, ErrorWithMsg } from "@libs/myAlert";
>>>>>>> Stashed changes:app/confirm-email/page.tsx
import { Button } from "flowbite-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ConfirmEmailPage = () => {
<<<<<<< Updated upstream:src/app/confirm-email/page.tsx
=======
  const { data: session } = useSession();
  const router = useRouter();
>>>>>>> Stashed changes:app/confirm-email/page.tsx
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");

  useEffect(() => {
<<<<<<< Updated upstream:src/app/confirm-email/page.tsx
    setEmail(searchParams.get("email") || "");
    setToken(searchParams.get("token") || "");
    setMounted(true);
=======
    if (session) {
      ErrorWithMsg(
        "이미 로그인 되어있음",
        "이미 로그인 되어있습니다.\n로그아웃 후 이메일 인증을 진행해주세요.",
        router,
        "/",
      );
    }
    setEmail(searchParams?.get("email") || "");
    setToken(searchParams?.get("token") || "");
    if (email === "" || token === "") {
      ErrorWithMsg("잘못된 접근", "잘못된 접근입니다.\n다시 시도해주세요.", router, "/");
    }
>>>>>>> Stashed changes:app/confirm-email/page.tsx
  }, [searchParams]);

  const confirmEmail = async () => {
    console.log(email, token);
    await confirmEmailClient
      .post("/confirm-email", {
        email,
        token,
      })
      .then(_ => {
<<<<<<< Updated upstream:src/app/confirm-email/page.tsx
        alert("이메일 인증이 완료되었습니다.\n로그인 해주세요.");
        window.location.href = "/user/login";
=======
        SuccessWithMsg(
          "인증 완료",
          "이메일 인증이 완료되었습니다\n로그인 해주세요.",
          router,
          "/user/login",
        );
>>>>>>> Stashed changes:app/confirm-email/page.tsx
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    email &&
    token && (
      <div className="flex min-h-3/4 items-center justify-center">
        <div className="mb-5 max-h-fit w-full max-w-md rounded bg-white p-8 shadow">
          <h1 className="mb-6 text-2xl font-bold">쓰다 이메일 인증</h1>
          <p className="mb-6">이메일 인증을 완료하시려면 아래 버튼을 클릭 해주세요.</p>
          <Button
            onClick={confirmEmail}
            className="focus:shadow-outline w-full rounded bg-blue-500 py-2 px-4 text-center font-bold text-white hover:bg-blue-600 focus:outline-none"
          >
            이메일 인증
          </Button>
          <p className="mt-4 text-center">
            이미 완료 하셨나요?{" "}
            <Link href="/user/login" className="text-blue-500">
              로그인 하러 가기
            </Link>
          </p>
        </div>
      </div>
    )
  );
};

export default ConfirmEmailPage;
