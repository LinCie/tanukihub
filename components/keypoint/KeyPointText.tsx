import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const KeyPointText = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <p
      className={`mb-1 text-sm text-main-dark last-of-type:mb-0 dark:text-main-light sm:mb-2 sm:text-base last-of-type:sm:mb-0 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
};

export default KeyPointText;
