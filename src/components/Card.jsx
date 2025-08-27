import {} from "react";

export default function Card({ children }) {
  return (
    <div className=" bg-[#edfcec] border border-neutral-300/50 rounded-md p-6">
      {children}
    </div>
  );
}
