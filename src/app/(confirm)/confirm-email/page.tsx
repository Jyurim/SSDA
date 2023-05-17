"use client";

import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const ConfirmEmailPage = () => {
  const searchParams = useSearchParams();
  const email = searchParams?.get("email");
  const token = searchParams?.get("token");

  useEffect(() => {
    if (email && token) {
      emailConfirm();
    }
  }, [email, token]);

  const emailConfirm = async () => {
    axios
      .post("/confirm-email", { email, token })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Confirm Email Page</h1>
      <p>Email: {email}</p>
      <p>Token: {token}</p>
    </div>
  );
};

export default ConfirmEmailPage;
