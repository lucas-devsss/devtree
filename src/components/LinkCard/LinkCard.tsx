import type { IconType } from "react-icons";

interface LinkCardProps {
  url: string;
  name: string;
  icon: IconType;
}

export default function LinkCard({ url, name, icon }: LinkCardProps) {
  const Icon = icon;
  return (
    <li className="p-2 md:p-3 flex items-center max-w-100 w-full bg-purple-primary text-off-white rounded-sm border-transparent border-2 hover:border-purple-dark hover:-translate-y-1 duration-300  dark:hover:border-off-white">
      <Icon size={"50px"} />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-2 text-center font-medium text-base font-poppins"
      >
        {name}
      </a>
    </li>
  );
}
