import React from "react";
import { PageLayout } from "../../pages/PageLayout/PageLayout";
import {
  FaqContainer,
  FaqSection,
  InformationContainerOne,
  InformationContainerThree,
  InformationContainerTwo,
  TitleContainer,
} from "./components";
import { Link } from "react-router-dom";

export const FaqPage = () => {
  return (
    <PageLayout>
      <FaqSection>
        <FaqContainer>
          <TitleContainer>
            <h1>Certificat Constatator de Baza – Întrebări Frecvente</h1>
            <p>
              Ai nevoie de un certificat constatator de baza, dar nu ești încă
              sigur de câteva aspecte? Mai jos poți regăsi cele mai frecvente
              întrebări. Daca vrei sa plasezi o comandă pentru eliberarea
              acestuia, o poți face completând forumularul de{" "}
              <Link to="/">aici</Link>
            </p>
          </TitleContainer>
          <InformationContainerOne>
            <h2>Ce este un certificat constatator de bază?</h2>
            <p>
              Un certificat constatator de bază reprezintă un document oficial
              care prezintă starea la zi a unei firme şi care cuprinde
              informaţii de natură financiară, juridică, statutară şi date
              despre domeniul de activitate al firmei sau despre asociaţi,
              administratori ori cenzori. Un certificat constatator de bază are
              rol de informare și pentru a intermedia relaţia dintre companie şi
              instituţiile publice sau alte entităţi, fiind unul dintre
              documentele cerute în cazul participării la licitaţii, solicitării
              de credite bancare ori în faţa funcționarilor Primăriei dar și
              pentru alte instituții.
            </p>
          </InformationContainerOne>
          <InformationContainerTwo>
            <h2>
              Care este perioada de valabilitate a unui certificat constatator?
            </h2>
            <p>
              Entitatea care solicita prezentarea unui certificat constatator
              poate stabili o perioada de valabilitate, de exemplu, poate
              solicita ca un certificat constatator sa nu fie mai vechi de 30,
              60, sau 90 zile. Certificatul Constatator este singurul document
              official care atesta situatia actuala a companiei dvs., atat din
              punct de vedere al activitatii sale, cat si al managementului.
              Acesta este motivul pentru care este necesar ca informațiile pe
              care le conține să fie actualizate în toate circumstanțele
            </p>
          </InformationContainerTwo>
          <InformationContainerThree>
            <h2>
              Acest certificat constatatator de bază are valoare de original?
            </h2>
            <p>
              Documentul primit are valoare de original pentru ca este semnat
              electronic, iar această semnătura electronică are rolul de a
              asigura autenticitatea provenienţei expeditorului, precum şi
              integritatea datelor transmise.
            </p>
          </InformationContainerThree>
        </FaqContainer>
      </FaqSection>
    </PageLayout>
  );
};
