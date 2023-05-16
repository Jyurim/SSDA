"use client";

import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("./Konva"), {
  ssr: false,
});

export default function TestsPage() {
  return (
    <section>
      <NoSSRComponent />
    </section>
  );
}
