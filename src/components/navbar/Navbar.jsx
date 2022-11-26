import React, { useState } from "react";
import "./navbar.css";
import {
  RiMenu3line,
  RiCloseLine,
  RiMenuFill,
  RiMenu3Fill,
} from "react-icons/ri";

const WhitepaperOpen = () => {
  window.open("https://grammit.gitbook.io/hackmint/", "_blank");
};
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const telegramUrl = "https://t.me/+nJGi4WKZA3FhZDll";
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <h1>
            <a href="home">GrammIt</a>
          </h1>
        </div>
        <div className="gpt3__navbar-links_container">
          {/* <p><a onClick={WhitepaperOpen}>Whitepaper</a></p> */}
          <p>
            <a
              href={telegramUrl}
              alt="comm"
              target="_blank"
              className="gpt3__navbar-links_container-comm"
            >
              Join the community
            </a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Fill
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              {/* <a onClick={WhitepaperOpen}>Whitepaper</a> */}
              <a href={telegramUrl}>Join the community</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
