import { useEffect, useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
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
