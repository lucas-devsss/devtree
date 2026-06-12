import { AiFillMoon, AiFillSun } from "react-icons/ai";

export default function Header(props) {
  return (
    <header className="flex justify-between items-center px-5 py-3 dark:bg-black-base text-purple-primary border-b-primary-purple bg-off-white font-semibold text-xs border-b-2 dark:border-b-off-white duration-300">
      <p>@lucas-devsss</p>
      <button onClick={() => props.changeTheme()} className="cursor-pointer">
        {props.dark ? (
          <AiFillSun size={"25px"}></AiFillSun>
        ) : (
          <AiFillMoon size={"25px"}></AiFillMoon>
        )}
      </button>
    </header>
  );
}
