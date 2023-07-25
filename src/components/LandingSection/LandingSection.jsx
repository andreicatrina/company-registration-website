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
  return (
    <LandingSectionParent>
      <LandingSectionContainer>
        <TextContainer>
          <ParagraphContainer>
            <ParagraphText>Faceti o programare online</ParagraphText>
          </ParagraphContainer>
          <h1>Rezolva rapid problema actelor</h1>
          <SpanContainer>
            <SpanText>
              Certificat-ONRC te scapa de alergatul dupa acte si te ajuta sa ai
              grija de actele tale intr-un mod convenabil. Nici macar nu trebuie
              sa ne suni, doar te programezi online{" "}
            </SpanText>
          </SpanContainer>
          <button>Programare Online</button>
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
