"use client";
import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import AuthButton from "../AuthButton";
import { signIn, signOut, useSession } from "next-auth/react";
import { Plus, User } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold">FanTech</h1>

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />

          <div className="flex items-center gap-3 relative">
            {session ? (
              <div className="dropdown">
                <div tabIndex={0} role="button" className="avatar">
                  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                    <img src={session.user.image} />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu  bg-background p-4 space-y-3 absolute shadow-xl rounded-lg -left-8 top-15 w-max"
                >
                  <h1 className="flex items-center gap-2">
                    <User></User>
                    {session.user.name}
                  </h1>
                  <Link href={'/add-product'} className="flex items-center gap-2"><Plus></Plus>Add Product</Link>
                  <Button className="cursor-pointer" onClick={()=>signOut()}>Logout</Button>
                </div>
              </div>
            ) : (
              <Button><Link href={'/signin'}>Sign In</Link></Button>
            )}
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
