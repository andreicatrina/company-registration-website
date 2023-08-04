import React from "react";
import {
  ContactContainer,
  DataProtectionContainer,
  FollowContainer,
  FooterContainer,
  FooterSection,
  LegalContainer,
  LocationContainer,
  MailContainer,
  PhoneContainer,
  SalContainer,
  SolContainer,
} from "./components";

import { FaFacebookSquare } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import SOL from "../../Assets/SOL.png";
import SAL from "../../Assets/SAL.png";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <ContactContainer>
          <h3>ROMDAV LEGIS SRL</h3>
          <p>Galati </p>
          <LocationContainer>
            <GoLocation />
            <a href="https://goo.gl/maps/cgkxE6MUGHoMy1WY7" target="_blank">
              Str. Teleajen, nr.9 Bl. A1, Ap. 4
            </a>
          </LocationContainer>
          <MailContainer>
            <AiFillMail />
            <a href="mailto:romdavsteel@gmail.com">romdavsteel@gmail.com</a>
          </MailContainer>
          <PhoneContainer>
            <AiFillPhone />
            <a href="tel:+40759676847">Telefon: 0759.676.847</a>
          </PhoneContainer>
        </ContactContainer>
        <FollowContainer>
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/certificatonrc" target="_blank">
            <FaFacebookSquare />
          </a>
        </FollowContainer>
        <LegalContainer>
          <h3>Info</h3>
          <SolContainer>
            <img src={SOL} alt="" />
            <a href="https://ec.europa.eu/consumers/odr" target="_blank">
              Solutionarea online a litigiilor
            </a>
          </SolContainer>
          <SalContainer>
            <img src={SAL} alt="" />
            <a href="https://anpc.ro/ce-este-sal/" target="_blank">
              Solutionarea alternativa a litigiilor
            </a>
          </SalContainer>
          <DataProtectionContainer>
            <Link to="/privacy-policy">
              Confidentialitate si Prelucrarea Datelor
            </Link>
          </DataProtectionContainer>
        </LegalContainer>
      </FooterContainer>
    </FooterSection>
  );
};
