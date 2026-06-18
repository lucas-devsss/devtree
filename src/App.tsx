import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import SocialLinks from "./components/SocialLinks/SocialLinks";

function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = localStorage.getItem("dark");
    return stored !== null ? JSON.parse(stored) : true;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("dark", JSON.stringify(isDark));
  }, [isDark]);

  function changeTheme(): void {
    setIsDark(!isDark);
  }

  return (
    <>
      <Header changeTheme={changeTheme} dark={isDark}></Header>
      <section className="dark:bg-black-base flex flex-col justify-center h-dvh">
        <ProfileCard />
        <SocialLinks />
      </section>
    </>
  );
}

export default App;
