"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ConfirmEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setEmail(searchParams?.get("email") || "");
    setToken(searchParams?.get("token") || "");
    setMounted(true);
  }, [searchParams]);

  const confirmEmail = async () => {
    await fetch("/api/confirm-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        token,
      }),
    })
      .then(_ => {
        alert("이메일 인증이 완료되었습니다.\n로그인 해주세요.");
        router.replace("/user/login");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    mounted && (
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
