import React, { useState } from "react";

import {
  AppointmentContainer,
  AppointmentSection,
  ButtonsContainer,
  ImageContainer,
  TextContainer,
} from "./components";

import PaperWork from "../../Assets/paperwork.jpg";

export const Appointment = () => {
  function scrollToForm() {
    window.scrollTo(0, 2000);
  }

  return (
    <AppointmentSection>
      <AppointmentContainer>
        <TextContainer>
          {/* <h2>Problema actelor poate fi rezolvata usor</h2> */}
          {/* <h2>Te scapam de grija actelor</h2> */}
          <h2>Stim ca nu iti plac drumurile dupa acte..</h2>
          <p>
            Asa ca noi va eliberăm certificatul constatator online simplu și
            rapid, pe email, în timp ce tu te ocupi de alte lucruri importante
            pentru tine. De asemenea, oferim si posibilitatea de a va programa
            online la o consultatie pentru a va asigura ca luati decizia
            potrivita nevoilor dumneavoastra.
          </p>
          <ButtonsContainer>
            <button onClick={scrollToForm}>Eliberare Acte</button>
            <button>Programare Online</button>
          </ButtonsContainer>
        </TextContainer>
        <ImageContainer>
          <img src={PaperWork} alt="" />
        </ImageContainer>
      </AppointmentContainer>
    </AppointmentSection>
  );
};
