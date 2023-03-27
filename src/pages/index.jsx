import React from "react";

export default function index() {
  return (
    <div className="flex h-screen flex-col bg-red-500">
      <div className="flex flex-1 bg-pink-300">
        <aside className="w-full max-w-xs bg-amber-200">sidebar</aside>
        <main className="flex-1 bg-blue-400"></main>
      </div>

      <footer className="h-20 bg-green-300">footer</footer>
    </div>
  );
}
