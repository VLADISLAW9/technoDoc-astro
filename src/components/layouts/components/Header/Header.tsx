import { Cloud } from "lucide-react";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-amber-500 px-6 py-3 rounded-3xl">
      <Cloud size={50} color="white" />
    </header>
  );
};
