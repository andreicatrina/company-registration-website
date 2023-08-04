import styled from "styled-components";

export const FooterSection = styled.footer`
  width: 100%;
  background-color: var(--footer-background);
  padding: 80px 24px;
`;
export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  h3 {
    font-size: 20px;
    padding: 12px 8px;
    color: var(--fontColor0);
  }

  p {
    padding: 8px 8px;
    color: var(--fontColor0);
    font-size: 16px;
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  gap: 6px;

  a {
    font-size: 16px;
    color: var(--fontColor0);
    text-decoration: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--fontColor0);
  }
`;

export const MailContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  gap: 6px;

  a {
    font-size: 16px;
    color: var(--fontColor0);
    text-decoration: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--fontColor0);
  }
`;
export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px;
  gap: 6px;

  a {
    font-size: 16px;
    color: var(--fontColor0);
    text-decoration: none;
  }

  svg {
    width: 18px;
    height: 18px;
    color: var(--fontColor0);
  }
`;

export const FollowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 8px;

  h3 {
    font-size: 20px;
    padding: 12px 8px;
    color: var(--fontColor0);
  }

  svg {
    color: var(--fontColor0);
    height: 28px;
    width: 28px;
    transition: 0.6s;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const FooterContainer2 = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 12px;
  padding: 8px;
  h3 {
    font-size: 20px;
    padding: 12px 8px;
    color: var(--fontColor0);
  }
`;

export const SolContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  a {
    font-size: 14px;
    padding: 4px 0;
    color: var(--fontColor0);
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 120px;
  }
`;
export const SalContainer = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-size: 14px;
    padding: 4px 0;
    color: var(--fontColor0);
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 120px;
  }
`;

export const DataProtectionContainer = styled.div`
  a {
    font-size: 14px;
    padding: 4px 0;
    color: var(--fontColor0);
    text-decoration: none;
    cursor: pointer;
  }
`;
