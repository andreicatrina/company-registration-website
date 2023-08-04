import React from "react";
import {
  ContainerPicture1,
  ContainerPicture2,
  ContainerPicture3,
  ImagesContainer,
  LandingSectionContainer,
  LandingSectionParent,
  ParagraphContainer,
  ParagraphText,
  SpanContainer,
  SpanText,
  TextContainer,
} from "./components";

import booking11 from "../../Assets/booking11.png";
import booking22 from "../../Assets/booking22.png";
import booking3 from "../../Assets/booking3.png";

export const LandingSection = () => {
  function scrollToForm() {
    window.scrollTo(0, 1300);
  }
  return (
    <LandingSectionParent>
      <LandingSectionContainer>
        <TextContainer>
          <ParagraphContainer>
            <ParagraphText>
              Eliberare certificat constatator online
            </ParagraphText>
          </ParagraphContainer>
          <h1>Rezolva rapid problema actelor</h1>
          <SpanContainer>
            <SpanText>
              Certificat-ONRC te scapa de alergatul dupa acte si te ajuta sa ai
              grija de actele tale intr-un mod convenabil
            </SpanText>
          </SpanContainer>
          <button onClick={scrollToForm}>Certificat Constatator</button>
        </TextContainer>
        <ImagesContainer>
          <ContainerPicture1>
            <img src={booking11} alt="" />
          </ContainerPicture1>
          <ContainerPicture2>
            <img src={booking22} alt="" />
          </ContainerPicture2>
          <ContainerPicture3>
            <img src={booking3} alt="" />
          </ContainerPicture3>
        </ImagesContainer>
      </LandingSectionContainer>
    </LandingSectionParent>
  );
};
