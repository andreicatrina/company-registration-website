import React from "react";

import {
  HeaderContainer,
  HeaderSection,
  LinksContainer,
  LogoContainer,
} from "./components";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContainer>
        <LogoContainer>
          <h1>Certificat</h1>
          <h2>ONRC</h2>
        </LogoContainer>
        <LinksContainer>
          <a href="">Certificat Constatator</a>
          <a href="">Intrebari Frecvente</a>
          <a href="">Contact</a>
        </LinksContainer>
      </HeaderContainer>
    </HeaderSection>
  );
};
