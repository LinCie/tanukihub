import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

const KeyPoint = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <div
      className={`mb-2 rounded-md border-2 border-[#CC3E3E] p-5 dark:border-white md:mx-16 ${customClass}`.trim()}
      {...props}
    >
      <h3 className="mb-2 font-medium">Key Points</h3>
      {children}
    </div>
  );
};

export default KeyPoint;
