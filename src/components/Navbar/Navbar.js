import React, { useEffect, useState } from "react";
import { NavbarContainer } from "./Navbar.styles";

function Navbar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsDark(true);
      } else setIsDark(false);
    });

    /* return () => {
      window.removeEventListener("scroll");
    }; */
  }, []);

  return (
    <NavbarContainer dark={isDark}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="avatar"
      />
    </NavbarContainer>
  );
}

export default Navbar;
