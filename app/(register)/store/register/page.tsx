"use client";

import AuthAnimationTest from "@/components/pages/store/register";
import { useState } from "react";

export default function RegisterPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="relative w-full min-h-screen">

      {/* Toggle Button */}
      <button
        onClick={() => setIsAuthenticated((prev) => !prev)}
        className="fixed top-6 right-6 z-[9999] bg-white text-black px-3 py-1 rounded-md shadow"
      >
        Toggle Auth
      </button>

      {/* Pass the prop – clean, no conflict */}
      <AuthAnimationTest isAuthenticated={isAuthenticated} />
    </div>
  );
}