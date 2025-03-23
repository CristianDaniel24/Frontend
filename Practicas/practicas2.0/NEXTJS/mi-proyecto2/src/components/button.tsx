"use client";

import { useRouter } from "next/navigation";

interface Props {
  label?: string;
  disabled?: boolean;
  path?: string;
  handleClick?: () => void;
}

export default function Button({
  label,
  disabled = false,
  path,
  handleClick,
}: Readonly<Props>) {
  const router = useRouter();

  const handleOnClick = () => {
    if (handleClick !== undefined) {
      handleClick();
    }
    router.push(path ?? "/");
  };

  return (
    <button
      className="border-2 px-3 capitalize border-gray-200 hover:bg-amber-600 hover:text-white
hover:scale-105 cursor-pointer rounded-2xl"
      onClick={handleOnClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
