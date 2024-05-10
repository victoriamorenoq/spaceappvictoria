import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import "./App.css";
import Astros from "./components/astros/Astros";

function App() {
  const links = [
    {
    id: 1,
    text: "home",
    link: "/",
  },
  {
    id: 2,
    text: "apod",
    link: "/apod",
  },
  {
    id: 3,
    text: "astros",
    link: "/astros",
  },
  ];

  return (
    <>
    <Navbar header= "space-app" links={links}/>
    <Routes>
      <Route element= {<Hero />} path="/"/>
      <Route element= {<Astros />} path="/astros" />
    </Routes>
    </>
  );
}

export default App;
