import React from "react";
import { accessUrl } from "../config";

export default function Login() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-4xt font-bold">Welcome to my Spotify clone</h1>
      <p className="text-text-dimmed mb-5">Please sign in to use the app</p>
      <a
        href={accessUrl}
        className="py-1.5 px-5 bg-primary rounded-md text-xl font-semibold"
      >
        Sign in
      </a>
    </div>
  );
}
