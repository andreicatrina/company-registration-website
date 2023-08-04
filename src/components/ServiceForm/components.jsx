import styled from "styled-components";

export const FormSection = styled.section`
  width: 100%;
  background-color: var(--background-color2);
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
`;

export const FormParent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: var(--fontColor2);
  }
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 12px;
`;

export const FormEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  input {
    background-color: var(--background-color2);
    width: 100%;
    max-width: 75%;
    height: 32px;
    padding-left: 4px;
    border: none;
    border-bottom: 3px solid var(--fontColor0);

    &:focus-visible {
      outline: none;
      /* border: 1px solid var(--fontColor0); */
      background-color: var(--fontColor0);
      border-radius: 4px;
    }
  }
`;

export const FormName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  input {
    background-color: var(--background-color2);
    width: 100%;
    max-width: 75%;
    height: 32px;
    padding-left: 4px;
    border: none;
    border-bottom: 3px solid var(--fontColor0);

    &:focus-visible {
      outline: none;
      /* border: 1px solid var(--fontColor0); */
      background-color: var(--fontColor0);
      border-radius: 4px;
    }
  }
`;

export const FormCompanyNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  input {
    background-color: var(--background-color2);
    width: 100%;
    max-width: 75%;
    height: 32px;
    padding-left: 4px;
    border: none;
    border-bottom: 3px solid var(--fontColor0);

    &:focus-visible {
      outline: none;
      /* border: 1px solid var(--fontColor0); */
      background-color: var(--fontColor0);
      border-radius: 4px;
    }
  }
`;

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  label {
    font-size: 12px;
    font-weight: 500;
  }

  select {
    width: 100%;
    max-width: 75%;
    background-color: white;
    /* border: thin solid blue; */
    border-radius: 4px;
    display: inline-block;
    font: inherit;
    line-height: 1.5em;
    padding: 0.5em 3.5em 0.5em 1em;
    margin: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%),
      linear-gradient(to right, #ccc, #ccc);
    background-position:
      calc(100% - 20px) calc(1em + 2px),
      calc(100% - 15px) calc(1em + 2px),
      calc(100% - 2.5em) 0.5em;
    background-size:
      5px 5px,
      5px 5px,
      1px 1.5em;
    background-repeat: no-repeat;

    &:focus {
      background-image: linear-gradient(45deg, #d5e0e3 50%, transparent 50%),
        linear-gradient(135deg, transparent 50%, #d5e0e3 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position:
        calc(100% - 15px) 1em,
        calc(100% - 20px) 1em,
        calc(100% - 2.5em) 0.5em;
      background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
      background-repeat: no-repeat;
      border-color: #d5e0e3;
      outline: 0;
    }
  }
`;

export const FormCardNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  input {
    background-color: var(--background-color2);
    width: 100%;
    max-width: 75%;
    height: 32px;
    padding-left: 4px;
    border: none;
    border-bottom: 3px solid var(--fontColor0);

    &:focus-visible {
      outline: none;
      /* border: 1px solid var(--fontColor0); */
      background-color: var(--fontColor0);
      border-radius: 4px;
    }
  }
`;

export const FormMessage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-weight: 500;

  textarea {
    width: 100%;
    max-width: 75%;
    height: 120px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;

    &:focus-visible {
      outline: none;
      border: 2px solid var(--background-color1);
      background-color: #fff;
    }
  }
`;

export const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const AgreementParagraph = styled.p`
  span {
    font-size: 16px;
    color: red;
  }
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 6px;

  p {
    width: 100%;
    max-width: 75%;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  max-width: 75%;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  p {
    font-size: 22px;
    font-weight: 700;
    line-height: 24px;
    color: var(--fontColor2);
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 80px 8px;
  gap: 32px;
  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    color: var(--fontColor1);
  }
`;
