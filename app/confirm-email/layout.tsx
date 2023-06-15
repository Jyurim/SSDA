import Loading from "@components/Loading";
import { Suspense } from "react";

export default function EmailConfirmLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
