import React from "react";

export default function Input({ isTextArea, label, ...props }) {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-medium" htmlFor="">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className="w-full px-2 py-1 border-b border-stone-200 focus:outline-none focus-within:border-1 focus:rounded-md focus:border-[#0a6802] focus:ring-[#0a6802]"
          {...props}
        ></textarea>
      ) : (
        <input
          className="w-full px-2 py-1 border-b border-stone-200 focus:outline-none focus-within:border-1 focus:rounded-md focus:border-[#0a6802] focus:ring-[#0a6802]"
          {...props}
        />
      )}
    </div>
  );
}
