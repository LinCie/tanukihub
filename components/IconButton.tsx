import { cloneElement, ReactElement, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactElement;
}

const IconButton = ({ icon, className, ...rest }: Props) => {
  const updatedIcon = cloneElement(icon, {
    className: "w-5 h-5 md:w-6 md:h-6",
  });

  return (
    <button
      className={`rounded-full p-3 hover:bg-black hover:bg-opacity-5 focus:outline-2 active:bg-opacity-10 ${className}`}
      {...rest}
    >
      {updatedIcon}
    </button>
  );
};

export default IconButton;
