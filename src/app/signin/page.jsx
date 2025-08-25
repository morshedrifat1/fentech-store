import AuthButton from "@/components/AuthButton";
import React from "react";

const page = () => {
  return (
    <div className="h-screen flex justify-center items-center rounded-lg">
      <div className="p-5 bg-background shadow space-y-3">
        <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
        <p className="text-gray-500 text-center">Login to access your products and dashboard</p>
        <AuthButton></AuthButton>
      </div>
    </div>
  );
};

export default page;
