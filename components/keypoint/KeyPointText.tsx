import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const KeyPointText = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <p
      className={`text-main-dark dark:text-main-light mb-2 text-sm last-of-type:mb-0 sm:mb-3 sm:text-base last-of-type:sm:mb-0 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
};

export default KeyPointText;
