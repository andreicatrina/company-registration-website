import React from "react";
import { Container, Content } from "./components";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const PageLayout = (props) => {
  return (
    <Container>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </Container>
  );
};
