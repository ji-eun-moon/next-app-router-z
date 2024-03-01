"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

const LoginPage = () => {
  const router = useRouter();
  router.replace("i/flow/login");
  return <Main />;
};

export default LoginPage;
