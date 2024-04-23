import "@/layout/navbar/navbar.css";
import { useState } from "react";
export default function navbar() {
  const listLink = [
    { name: "Acceuille ", link: "./" },
    { name: "Portfolio ", link: "Portfolio" },
    { name: "CV ", link: "https://www.canva.com/design/DAF7QnZzUEE/97qJNN59u4xk_qh9vVIsJg/view?utm_content=DAF7QnZzUEE&utm_campaign=designshare&utm_medium=link&utm_source=editor" },
    { name: "Contact ", link: "Contact" },
  ];
  return (
    <nav className="topnav" id="myTopnav">
      {listLink.map((elt, index) => {
        return (
          <a key={index} href={elt.link}>
            {elt.name}
          </a>
        );
      })}
    </nav>
  );
}
