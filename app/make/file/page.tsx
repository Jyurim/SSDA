"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="min-h-3/4">
      <div className="flex min-h-3/4 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Make your own</h1>
        <p className="text-xl">Coming soon</p>
      </div>
    </div>
  );
};

export default Page;
