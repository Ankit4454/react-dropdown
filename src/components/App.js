import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Dropdown from "./Dropdown";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleBtn = (e) => {
    document.body.classList.remove('bg-red', 'bg-green', 'bg-blue', 'bg-yellow', 'bg-purple', 'bg-orange', 'bg-pink', 'bg-brown', 'bg-teal', 'bg-cyan');
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
      <Dropdown />
    </>
  );
}

export default App;
