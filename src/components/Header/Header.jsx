import React from "react";

import {
  HeaderContainer,
  HeaderSection,
  LinksContainer,
  LogoContainer,
} from "./components";
import { Link } from "react-router-dom";

export const Header = () => {
  function ScrollToContact() {
    window.scrollTo(0, 4000);
  }
  return (
    <HeaderSection>
      <HeaderContainer>
        <Link to={"/"}>
          <h1>Certificat</h1>
          <h2>ONRC</h2>
        </Link>
        <LinksContainer>
          {/* <p href="" onClick={scrollToForm}>
            Certificat Constatator
          </p> */}
          <Link to="/faq">Intrebari Frecvente</Link>
          <p href="" onClick={ScrollToContact}>
            Contact
          </p>
        </LinksContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
