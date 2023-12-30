import { InfoCircledIcon } from "@radix-ui/react-icons";
import { ReactNode, ComponentPropsWithoutRef } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {
  children?: ReactNode;
}

const KeyPoint = ({ children, className, ...props }: Props) => {
  const customClass = className ? className : "";

  return (
    <div
      className={`mb-2 rounded-md border-2 border-main-identity p-4 sm:p-5 dark:border-main-title-light sm:mb-3 md:mx-16 ${customClass}`.trim()}
      {...props}
    >
      <h3 className="mb-2 flex items-center gap-1 font-medium text-main-title-dark dark:text-main-title-light sm:gap-2">
        <div>
          <InfoCircledIcon className="h-4 w-4 text-main-title-dark dark:text-main-title-light sm:h-5 sm:w-5" />
        </div>
        <div>Key Points</div>
      </h3>
      {children}
    </div>
  );
};

export default KeyPoint;
