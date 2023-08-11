"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup Page</h1>
      <hr />
      <label htmlFor="userName">userName</label>
      <input
        className="p-2  text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="userName"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 text-black border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="text"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border text-black border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onSignup}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        SignUp
      </button>
      <Link href="/login">Visit Login </Link>
    </div>
  );
}
