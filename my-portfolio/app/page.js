'use client'
import { useState } from "react";

export default function HomePage() {
  const  [state, setState] = useState("Hello");
  console.log(state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
    </main>
  );
}
