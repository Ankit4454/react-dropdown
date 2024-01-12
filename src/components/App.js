import { useEffect, useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleBtn = (e) => {
    if (e.target.checked) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  useEffect(() => {
    const body = document.body;
    if (darkMode === true) {
      body.classList.add('darkMode');
    } else {
      body.classList.remove('darkMode');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={handleToggleBtn} />
    </>
  );
}

export default App;
