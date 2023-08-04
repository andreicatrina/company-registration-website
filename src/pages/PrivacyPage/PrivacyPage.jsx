import React from "react";
import { PageLayout } from "../PageLayout/PageLayout";
import { PrivacyPageContainer, PrivacyPageSection } from "./components";

export const PrivacyPage = () => {
  return (
    <PageLayout>
      <PrivacyPageSection>
        <PrivacyPageContainer>
          <h2>
            Notă de informare generală cu privire la prelucrarea datelor
            personale
          </h2>
          <br />
          <h3>1. CE ESTE ACEASTĂ NOTĂ DE INFORMARE?</h3>
          <br />
          <p>
            Această Notă de Informare vă aduce la cunoștință aspectele cu
            privire la prelucrarea datelor dumneavoastră cu caracter personal și
            la drepturile dumneavoastră în conformitate cu Regulamentul general
            2016/679 privind protectia datelor („GDPR”) și legislația națională
            și Europeană în vigoare. <br /> <br /> Societatea noastra, dorește
            sa vă informeze cu privire la prelucrarea datelor dumneavoastră cu
            caracter personal în legătură cu anumite operațiuni desfășurate. Vă
            explicăm modul în care are loc prelucrarea datelor dumneavoastră cu
            caracter personal de către societate și vă asigurăm că datele
            dumneavoastră, sunt prelucrate responsabil și în conformitate cu
            legislația privind protecția datelor cu caracter personal. <br />
            <br /> Vă rugăm să acordaţi timpul necesar pentru a citi prezenta
            nota în întregime şi să vă asiguraţi că înţelegeţi întreg
            conținutul, deoarece dorim să fie clar pentru toată lumea cum
            folosim datele dumneavoastră.
          </p>
          <br />
          <h3>2. CUM NE PUTEȚI CONTACTA</h3>
          <br />
          <p>
            Dacă aveți neclarități privind prezenta notă de informare, ne puteți
            contacta la: Adresa: Str. Teleajen, nr.9, Bl. A1, Ap. 4 Telefon:
            0759.676.847 Adresă de email: romdavsteel@gmail.com <br /> Nota
            noastră de informare este publică de pe 29 Aprilie 2022 și este
            aplicabilă websiteului și e-mail-ului nostru.
          </p>
          <br />
          <h3>
            3. CATEGORIILE DE DATE CU CARACTER PERSONAL PE CARE LE PRELUCRĂM
          </h3>
          <br />
          <p>
            Datele cu caracter personal colectate și prelucrate de noi sunt:
            <br />
            <br />
            1. Detalii personale: nume, prenume, sex, număr de telefon
            mobil/fix, adresă de e-mail, restul informațiilor din actul
            dumneavoastră de identitate.
            <br />
            2. Detalii provenite din contactul dumneavoastră telefonic, folosind
            formularele din site sau de pe diferitele medii de socializare.
            <br />
            3. Opinii şi recenzii care pot include date sensibile ca: orice
            opinii pe care le postaţi public despre noi pe reţelele de
            socializare sau pe care le faceţi publice în alte medii;
          </p>
          <br />
          <h3>4. SCOPUL PRELUCRARII DATELOR</h3>
          <br />
          <p>Scopurile pentru care prelucrăm date cu caracter personal sunt:</p>
          <br />
          <br />
          <p>
            1. Pentru serviciile noastre.
            <br />
            2. Facturare și relații cu clienții. Pentru a vă factura serviciile
            noastre și pentru a putea să vă contactăm în cazul în care apar
            erori.
            <br />
            3. Comunicări de marketing. Dacă v-ați oferit consimțământul, vă vom
            ține la curent prin diferite mijloace (e-mail, telefon mobil sau
            fix, mesaje telefonice (SMS-uri), poştă, mesaje transmise pe
            platformele de socializare sau în persoană) privind noutăţile.
          </p>
          <br />
          <br />
          <h3>5. CUI PUTEM DIVULGA DATELE DUMNEAVOASTRĂ</h3>
          <br />
          <p>
            Nu divulgăm datele dumneavoastră către alte companii, organizaţii
            sau persoane. În anumite situații însă, este însă posibil să
            divulgăm datele dumneavoastră către alte persoane fizice sau
            juridice. <br /> Vom fi cât de transparenți și specifici cu putință.
          </p>
          <br />
          <br />
          <h3>6. SECURITATEA DATELOR</h3>
          <br />
          <p>
            Utilizăm măsuri tehnice pentru a securiza datele. <br /> Dacă
            dumneavoastră credeți că interacţiunea cu noi nu este sigură, ne
            puteți contacta imediat.
          </p>{" "}
          <br />
          <br />
          <h3>7. DREPTURILE DUMNEAVOASTRĂ </h3>
          <br />
          <p>
            1. Dreptul de a fi informat <br />
            2. Dreptul de acces la date <br />
            3. Dreptul la rectificarea datelor <br />
            4. Dreptul la stergerea datelor <br />
            5. Dreptul la restrictionarea prelucrarii datelor <br />
            6. Dreptul de opozitie la utilizarea datelor cu caracter personal
            <br />
            7. Dreptul la portabilitatea datelor <br />
            8. Dreptul la retragerea consimtamantului <br />
            9. Dreptul de a depune plangere la autoritatea de supraveghere{" "}
            <br />
            10. Dreptul de a va adresa justitiei
          </p>
          <br />
          <br />
          <h3>8. CE SE POATE ÎNTÂMPLA DACĂ NU NE FURNIZAȚI DATELE</h3> <br />
          <p>
            Nu sunteți obligat să ne furnizați datele dumneavoastră cu caracter
            personal pe care le-am menţionat. Refuzul poate duce către
            imposibilitatea prestării serviciilor.
          </p>
        </PrivacyPageContainer>
      </PrivacyPageSection>
    </PageLayout>
  );
};
