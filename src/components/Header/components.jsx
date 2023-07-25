import styled from "styled-components";

export const HeaderSection = styled.header`
  background-color: var(--background-color1);
  width: 100%;
  /* height: 120px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  /* background-color: blue; */
  width: 100%;
  max-width: 1200px;
  height: 60px;
  /* margin: 12px 0; */
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  h1 {
    font-size: 20px;
    padding-top: 12px;
  }

  h2 {
    font-size: 20px;
    color: var(--buttons-color);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  a {
    text-decoration: none;
    color: var(--fontColor1);
    font-size: 16px;
    font-weight: 500;
  }
`;
