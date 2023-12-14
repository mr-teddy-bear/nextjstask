"use client";

import { FC, PropsWithChildren, useEffect } from "react";
import { redirect } from "next/navigation";
import { LocalStorageKeys } from "../consts";
import { usePathname } from "next/navigation";

export const AuthProvider: FC<PropsWithChildren<any>> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname === "/auth";

  useEffect(() => {
    const isLogged = !!localStorage.getItem(LocalStorageKeys.Email);

    const redirectToLogin = () => redirect("auth");
    const redirectToHome = () => redirect("/");

    if (isAuthPage) {
      if (isLogged) redirectToHome();
    } else {
      if (!isLogged) redirectToLogin();
    }
  }, [pathname]);

  return children;
};
