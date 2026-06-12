import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [isDark]);

  function changeTheme(): void {
    setIsDark(!isDark);
  }

  return (
    <>
      <Header changeTheme={changeTheme} dark={isDark}></Header>
    </>
  );
}

export default App;
