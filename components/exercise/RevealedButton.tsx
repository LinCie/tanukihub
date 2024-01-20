import { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface Props extends ComponentPropsWithoutRef<"button"> {
  revealed: boolean;
  setRevealed: (state: boolean) => void;
}

export default function RevealedButton({
  setRevealed,
  revealed,
  ...props
}: Props) {
  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex w-full justify-end">
      <button
        onClick={handleClick}
        data-state={revealed ? "revealed" : "hidden"}
        className={cn(
          // Base styles
          "rounded-md border p-2 text-sm font-medium transition-all hover:opacity-90 active:scale-95 sm:text-base",
          // Conditional revealed styles
          revealed
            ? // When the answer is revealed
              "bg-main-identity text-main-title-light dark:bg-main-title-light dark:text-main-title-dark"
            : // When the answer is hidden
              "border-main-identity bg-none text-main-identity dark:border-main-title-light dark:text-main-title-light",
        )}
        {...props}
      >
        Reveal Answer
      </button>
    </div>
  );
}
