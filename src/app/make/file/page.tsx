"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>("");

  useEffect(() => {
    setAccessToken(localStorage.getItem("accessToken")!);
    if (!accessToken) {
      router.push("/user/login");
    }
  }, []);

  return <> </>;
};

export default Page;
