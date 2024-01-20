import cn from "@/lib/utils";
import { cloneElement, ReactElement, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  icon: ReactElement;
}

const IconButton = ({ icon, className, ...props }: Props) => {
  const updatedIcon = cloneElement(icon, {
    className: "w-5 h-5 md:w-6 md:h-6",
  });

  const customClass = className ? className : "";

  return (
    <button
      className={cn(
        // Base style
        "rounded-full p-3 hover:bg-black hover:bg-opacity-5 focus:outline-2 active:bg-opacity-10",
        // Other className
        className,
      )}
      {...props}
    >
      {updatedIcon}
    </button>
  );
};

export default IconButton;
