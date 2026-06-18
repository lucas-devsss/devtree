import { AiFillMoon, AiFillSun } from "react-icons/ai";

interface HeaderProps {
  dark: boolean;
  changeTheme: () => void;
}

export default function Header({ dark, changeTheme }: HeaderProps) {
  return (
    <header className="flex justify-between items-center fixed w-full px-5 py-3 md:px-8 md:py-5 md:text-base dark:bg-black-base text-purple-primary border-b-purple-primary bg-off-white font-semibold text-xs border-b-2 duration-300">
      <p className="font-poppins">@lucas-devsss</p>
      <button onClick={() => changeTheme()} className="cursor-pointer">
        {dark ? (
          <AiFillSun size={"25px"}></AiFillSun>
        ) : (
          <AiFillMoon size={"25px"}></AiFillMoon>
        )}
      </button>
    </header>
  );
}
