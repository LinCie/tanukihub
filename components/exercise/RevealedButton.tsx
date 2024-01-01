interface Props {
  revealed: boolean;
  setRevealed: (state: boolean) => void;
}

export default function RevealedButton({ setRevealed, revealed }: Props) {
  const handleClick = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex w-full justify-end">
      <button
        onClick={handleClick}
        data-state={revealed ? "revealed" : "hidden"}
        className="rounded-md border p-2 text-sm font-medium transition-all hover:opacity-90 active:scale-95 data-[state=hidden]:border-main-identity data-[state=revealed]:bg-main-identity data-[state=hidden]:bg-none data-[state=hidden]:text-main-identity data-[state=revealed]:text-main-title-light data-[state=hidden]:dark:border-main-title-light data-[state=revealed]:dark:bg-main-title-light data-[state=hidden]:dark:text-main-title-light data-[state=revealed]:dark:text-main-title-dark sm:text-base"
      >
        Reveal Answer
      </button>
    </div>
  );
}
