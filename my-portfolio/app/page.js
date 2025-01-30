'use client'
import { useState } from "react";

export default function HomePage() {
  const  [state, setState] = useState("Hello");
  console.log(state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="bg-red-500 sm:bg-green-500 md:bg-orange-500 lg:bg-rose-600 xl:bg-indigo-500 text-white font-medium text-2xl">Home Page</h1>
    </main>
  );
}
