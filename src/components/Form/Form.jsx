import React from "react";
import {
  AgreementParagraph,
  ButtonContainer,
  CheckBoxContainer,
  FormCardNumber,
  FormCompanyNumber,
  FormContainer,
  FormEmail,
  FormMessage,
  FormName,
  FormParent,
  FormSection,
  LegalContainer,
  OrderForm,
  SelectorContainer,
  SpanContainer,
  TextContainer,
} from "./components";

export const Form = () => {
  return (
    <FormSection>
      <FormContainer>
        <FormParent>
          <h2>Certificat constatator online</h2>
          <OrderForm action="">
            <FormEmail>
              <label htmlFor="">Adresa de email *</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Introduceti adresa de email"
              />
            </FormEmail>
            <FormName>
              <label htmlFor="">Nume si Prenume</label>
              <input
                type="text"
                placeholder="Introduceti Numele si Prenumele"
              />
            </FormName>
            <FormCompanyNumber>
              <label htmlFor="">CUI Firma *</label>
              <input type="text" placeholder="Cod Unic de Inregistrare" />
            </FormCompanyNumber>
            <SelectorContainer>
              <label htmlFor="">Selectati serviciul *</label>
              <select name="" id="">
                <option value="">Furnizare Informații - 49 RON</option>
                <option value="">
                  Certificat Constatator de Bază - 79 RON
                </option>
                <option value="">
                  Certificat Constatator Fonduri IMM - 79 RON
                </option>
                <option value="">
                  Certificat Constatator pentru Insolvență - 79 RON
                </option>
              </select>
            </SelectorContainer>
            <FormCardNumber>
              <label htmlFor="">Numar Card *</label>
              <input type="text" placeholder="Ex: 123456789012" />
            </FormCardNumber>
            <FormMessage>
              <label htmlFor="">Mesaj Optional</label>
              <textarea name="" id="" cols="10" rows="8"></textarea>
            </FormMessage>
            <LegalContainer>
              <AgreementParagraph>
                <span>*</span> Acord legal:
              </AgreementParagraph>
              <CheckBoxContainer>
                <input type="checkbox" name="" id="" />
                <p>
                  Am luat la cunostinta despre conditiile in care obtin
                  certificat constatator / furnizare informatii conform Termeni
                  si Conditii si modul de prelucrare a datelor personale,
                  conform Politica de Confidentialitate. Imputernicesc un
                  reprezentant romdav.consulting.ro sa solicite documentul
                  comandat la ONRC in numele meu.
                </p>
              </CheckBoxContainer>
            </LegalContainer>
            <ButtonContainer>
              <button>Trimite comanda</button>
            </ButtonContainer>
          </OrderForm>
        </FormParent>
        <TextContainer>
          <p>Completează formularul și lasă restul în seama noastră</p>
          <SpanContainer>
            <span>Totul se întâmplă rapid și simplu</span>
            <span>Livrare pe e-mail</span>
            <span>Factura Electronica</span>
          </SpanContainer>
        </TextContainer>
      </FormContainer>
    </FormSection>
  );
};
