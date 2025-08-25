"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function page() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { register, handleSubmit, control,reset } = useForm();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
   const onSubmit = async (data) => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(res);

    if (res.ok) {
      toast.success("Product added successfully!");
      reset();
    } else {
      toast.error("Failed to add product");
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-100 shadow rounded-lg p-3">
        <h1 className="text-3xl font-bold te">Add Product</h1>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <Input
              {...register("productName")}
              type="text"
              placeholder="Product Name"
            />
            <Controller
              name="productCategory"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Mouse">Mouse</SelectItem>
                    <SelectItem value="Keyboard">Keyboard</SelectItem>
                    <SelectItem value="Laptop">Laptop</SelectItem>
                    <SelectItem value="Router">Router</SelectItem>
                    <SelectItem value="Monitor">Monitor</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Input
              {...register("productPrice")}
              type="number"
              placeholder="Product Price"
            />
            <Input
              {...register("productImg")}
              type="url"
              placeholder="Product Img Url"
            />
            <Textarea
              {...register("productDescription")}
              placeholder="Product Description"
              className="h-20"
            />
            <Button type="submit" className="w-full cursor-pointer">
              Add Product
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
