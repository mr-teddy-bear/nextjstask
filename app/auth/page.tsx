"use client";

import { EmailPassword } from "@/types/auth/authTypes";
import { AuthVariants } from "@/types/auth/authTypes";
import { Meta } from "@/components/Meta";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailReg } from "@/validation/regular/email";
import { LocalStorageKeys, Routes } from "@/components/consts";
import { useRouter } from "next/navigation";

const Auth = () => {
  const [type, setType] = useState<AuthVariants>(AuthVariants.login);

  const router = useRouter();
  const redirectToHome = () => router.push(Routes.Home);

  //mock auth process, just using local storage
  const login = ({ password, email }: EmailPassword) => {
    localStorage.setItem(LocalStorageKeys.Email, email);
    localStorage.setItem(LocalStorageKeys.Password, password);
    redirectToHome();
  };

  const register = ({ password, email }: EmailPassword) => {
    localStorage.setItem(LocalStorageKeys.Email, email);
    localStorage.setItem(LocalStorageKeys.Password, password);
    redirectToHome();
  };

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailPassword>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<EmailPassword> = (data) => {
    if (type === AuthVariants.login) login(data);
    else register(data);
    reset();
  };

  const anotherType =
    type === AuthVariants.login ? AuthVariants.register : AuthVariants.login;

  const onSetTypeClick = () => {
    setType(anotherType);
  };

  const secondButtontext =
    (anotherType === AuthVariants.register
      ? "No account?"
      : "Have an account?") + ` Click to ${anotherType}`;

  return (
    <Meta title="Auth">
      <div className="flex h-screen">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg bg-white shadow-sm p-8 m-auto w-96 flex gap-6 flex-col"
        >
          <>
            <div className="flex gap-4 flex-col">
              <TextField
                {...formRegister("email", {
                  required: "Email is required",
                  pattern: {
                    value: emailReg,
                    message: "Please enter a valid email",
                  },
                })}
                placeholder="Email"
                error={errors.email?.message}
              />
              <TextField
                {...formRegister("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Length must be at least 6 characters",
                  },
                })}
                type="password"
                placeholder="Password"
                error={errors.password?.message}
              />
            </div>
            <Button variant="orange" type="submit">
              {type}
            </Button>
            <Button variant="white" onClick={onSetTypeClick} type="button">
              {secondButtontext}
            </Button>
          </>
        </form>
      </div>
    </Meta>
  );
};

export default Auth;
