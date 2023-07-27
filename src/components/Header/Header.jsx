import React from "react";

import {
  HeaderContainer,
  HeaderSection,
  LinksContainer,
  LogoContainer,
} from "./components";

export const Header = () => {

  function scrollToForm() {
    window.scrollTo(0, 3000);
  }
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <h1>Certificat</h1>
          <h2>ONRC</h2>
        </LogoContainer>
        <LinksContainer>
          <p href="" onClick={scrollToForm}>
            Certificat Constatator
          </p>
          <a href="">Intrebari Frecvente</a>
          <a href="">Contact</a>
        </LinksContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
