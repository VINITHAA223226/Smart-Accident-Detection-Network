"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import axios from "@/lib/axios";
import { LoginSchema } from "@/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

type FormData = z.infer<typeof LoginSchema>;

export default function LoginForm() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const router = useRouter();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: FormData) => {
    toast(`${mode === "login" ? "Logging in..." : "Registering..."}`, {
      id: "auth",
    });

    const endpoint =
      mode === "login"
        ? "http://127.0.0.1:8080/api/v1/auth/login"
        : "http://127.0.0.1:8080/api/v1/auth/register";

    try {
      const response = await axios.post(endpoint, {
        username: data.email,
        password: data.password,
        withCredentials: true,
      });

      if (mode === "login") {
        setCookie("token", response.data.access_token, {
          maxAge: 60 * 60 * 24,
        });
        toast.success("Logged in successfully!", { id: "auth" });
        router.push("/dashboard");
      } else {
        toast.success("User registered successfully!", { id: "auth" });
        setMode("login");
      }
    } catch (error: any) {
      const msg =
        error?.response?.data?.msg || "An error occurred. Please try again.";
      toast.error(msg, { id: "auth" });
    } finally {
      reset();
    }
  };

  return (
    <div className="sm:max-w-[460px] shadow-sm mx-auto bg-white p-5 border rounded-md">
      <h2 className="text-2xl font-bold pb-5 text-center underline">
        {mode === "login" ? "Login" : "Register"}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-2">
          <label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md border outline-none"
            autoComplete="off"
            {...register("email")}
          />
          <span className="inline-block text-sm text-red-500">
            {errors.email?.message}
          </span>
        </div>
        <div className="space-y-2">
          <label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            className="w-full px-4 py-3 rounded-md border outline-none"
            autoComplete="off"
            {...register("password")}
          />
          <span className="inline-block text-sm text-red-500">
            {errors.password?.message}
          </span>
        </div>
        <Button className="w-full" size={"lg"} type="submit">
          {mode === "login" ? "Login" : "Register"}
        </Button>
      </form>

      <div className="pt-4 text-center">
        {mode === "login" ? (
          <p>
            Don’t have an account?{" "}
            <button
              onClick={() => setMode("register")}
              className="text-blue-600 underline"
            >
              Register here
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <button
              onClick={() => setMode("login")}
              className="text-blue-600 underline"
            >
              Login here
            </button>
          </p>
        )}
      </div>
    </div>
  );
}
