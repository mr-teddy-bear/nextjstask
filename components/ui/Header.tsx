"use client";

import { LocalStorageKeys, Routes } from "../consts";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === Routes.Auth;
  const router = useRouter();
  const redirectToAuth = () => router.push(Routes.Auth);

  if (isAuthPage) return <></>;

  const logout = () => {
    localStorage.removeItem(LocalStorageKeys.Email);
    localStorage.removeItem(LocalStorageKeys.Password);
    redirectToAuth();
  };

  return (
    <header className="flex justify-between p-4 bg-aqua">
      <Image alt="logo" width={50} height={50} src={logo} />
      <Button onClick={logout} variant="white">
        Logout
      </Button>
    </header>
  );
};

export default Header;
