"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { noAuth } from "@libs/myAlert";
import Head from "next/head";

const NoSSRComponent = dynamic(() => import("./Konva"), {
  ssr: false,
});

export default function DrawPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      noAuth(router);
    }
  }, [router, session]);

  return (
    <>
      <Head>
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <NoSSRComponent />
    </>
  );
}
