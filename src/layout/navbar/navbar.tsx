"use client";
import "@/layout/navbar/navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const listLink = [
    { name: "Accueil", link: "./" },
    { name: "Portfolio", link: "Portfolio" },
    { name: "CV", link: "CV" },
    { name: "Contact", link: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`topnav ${isMenuOpen ? 'responsive' : ''}`} id="myTopnav">
      <div className="nav-links">
        {listLink.map((elt, index) => {
          return (
            <a key={index} href={elt.link} onClick={() => setIsMenuOpen(false)}>
              {elt.name}
            </a>
          );
        })}
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}
