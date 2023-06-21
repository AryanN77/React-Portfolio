import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import "./app.css";
import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Works from "./components/Works/Works";

function App() {
  const [menu, setmenu] = useState(false)
  return (
    <div className="app">
      <Navbar menu={menu} setmenu={setmenu} />
      <Menu menu={menu} setmenu={setmenu} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
