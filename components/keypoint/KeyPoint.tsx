import { InfoCircledIcon } from "@radix-ui/react-icons";
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
      <h3 className="dark:text-main-title-light text-main-title-dark mb-2 flex items-center gap-1 font-medium sm:gap-2">
        <div>
          <InfoCircledIcon className="text-main-title-dark dark:text-main-title-light h-4 w-4 sm:h-5 sm:w-5" />
        </div>
        <div>Key Points</div>
      </h3>
      {children}
    </div>
  );
};

export default KeyPoint;
