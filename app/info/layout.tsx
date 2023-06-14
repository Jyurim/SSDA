import Loading from "@components/Loading";
import { Suspense } from "react";

export default function InfoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}