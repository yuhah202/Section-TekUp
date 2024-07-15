import { cn } from "@/lib/utils";
import React from "react";

function ButtonTab(props) {
  const { className, value, children, onClick } = props;

  const onClickButton = (event) => {
    onClick(value || event);
  };

  return (
    <button
      {...props}
      className={cn(
        "rounded-xl border-transparent bg-transparent px-4 py-3 text-[18px]/[1.8] text-black transition-all duration-300 ease-in-out",
        className,
      )}
      value={value}
      onClick={onClickButton}
    >
      {children}
    </button>
  );
}

export default ButtonTab;
