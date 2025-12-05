"use client";

import React from "react";

export default function OrbitAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      {/* DOT 1 */}
      <div className="absolute">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-orbitArc"></div>
      </div>

      {/* DOT 2 */}
      <div className="absolute">
        <div className="w-3 h-3 rounded-full bg-purple-400 animate-orbitArcSlow"></div>
      </div>

      {/* DOT 3 */}
      <div className="absolute">
        <div className="w-2 h-2 rounded-full bg-purple-300 animate-orbitArcFast"></div>
      </div>

    </div>
  );
}
