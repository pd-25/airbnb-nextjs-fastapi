"use client";

import { useState } from "react";
import MenuLink from "./MenuLink";
import useLoginModal from "@/app/hooks/useLoginModal";
import useSignUpModal from "@/app/hooks/useSignUpModal";
import useTestModal from "@/app/hooks/useTestModal";

export default function UserNav() {
  const loginModal = useLoginModal();
  const signupModal = useSignUpModal();
  const testModal = useTestModal();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-2 relative inline-block border rounded-full">
      <button onClick={() => setIsOpen(!isOpen)} className="flex item-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="w-[220px] absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
          <MenuLink
            label="Login"
            onClick={() => {
              console.log("blicked");
              setIsOpen(false);
              loginModal.open();
            }}
          />

          <MenuLink
            label="Sign Up"
            onClick={() => {
              console.log("sign up clicked");
              setIsOpen(false);
              signupModal.open();
            }}
          />

          <MenuLink
            label="Test"
            onClick={() => {
              console.log("test clicked");
              setIsOpen(false);
              testModal.open();
            }}
          />
        </div>
      )}
    </div>
  );
}
