import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="text-neutral-700 font-medium text-base hover:text-[#0a6802] transition-colors"
    >
      {children}
    </button>
  );
}
