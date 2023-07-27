import styled from "styled-components";

export const AppointmentSection = styled.section`
  width: 100%;
  background-color: var(--fontColor0);
`;
export const AppointmentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8px;
  gap: 16px;

  h2 {
    font-size: 32px;
    font-weight: 700;
    color: var(--fontColor2);
    line-height: 40px;
  }

  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: var(--fontColor1);
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  button {
    width: 100%;
    max-width: 200px;
    height: 48px;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--fontColor0);
    background-color: var(--buttons-color);
    cursor: pointer;
    transition: 0.6s;

    &:hover {
      background-color: #aeb1ff;
      -webkit-box-shadow: -4px 7.5px 14px 2px #b7b6b6;
      -moz-box-shadow: -4px 7.5px 14px 2px #b7b6b6;
      box-shadow: -4px 7.5px 14px 2px #b7b6b6;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;

  img {
    width: 100%;
    max-width: 400px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
