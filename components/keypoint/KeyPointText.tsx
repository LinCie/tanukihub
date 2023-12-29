import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"p"> {
  children?: ReactNode;
}

const KeyPointText = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <p
      className={`mb-2 text-sm text-black last-of-type:mb-0 dark:text-white sm:mb-3 sm:text-base last-of-type:sm:mb-0 ${customClass}`.trim()}
      {...props}
    >
      {children}
    </p>
  );
};

export default KeyPointText;
