import React from "react";

export default function Badge({ children, cssStyle }) {
  let cssClasses

  if (cssStyle === "primary") {
    cssClasses =
      "px-2 py-1 bg-amber-600/80 text-white rounded-lg font-medium text-sm";
  } else if (cssStyle === "secondary") {
    cssClasses =
      "px-2 py-1 text-neutral-700 font-medium text-sm rounded-md border border-neutral-700/20 shadow";
  }
  return <span className={cssClasses}>{children}</span>;
}
