"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { noAuth } from "@libs/myAlert";
import Head from "next/head";
import Loading from "@components/Loading";

const NoSSRComponent = dynamic(() => import("./Konva"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function DrawPage() {
  const { data: session } = useSession();
  console.log("session", session);
  const router = useRouter();
  useEffect(() => {
    if (session == null) {
      noAuth(router);
    }
  }, [router, session]);

  return (
    <>
      <Head>
        <meta name="viewport" content="user-scalable=no" />
      </Head>
      <NoSSRComponent token={session?.user.accessToken} />
    </>
  );
}
