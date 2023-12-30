import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

const KeyPoint = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <div
      className={`border-main-identity dark:border-main-title-light mb-2 rounded-md border-2 p-5 md:mx-16 ${customClass}`.trim()}
      {...props}
    >
      <h3 className="dark:text-main-title-light text-main-title-dark mb-2 font-medium">
        Key Points
      </h3>
      {children}
    </div>
  );
};

export default KeyPoint;
