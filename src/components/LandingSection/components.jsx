import styled from "styled-components";

export const LandingSectionParent = styled.section`
  background-color: var(--background-color1);
  width: 100%;
  height: 100%;
`;

export const LandingSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 200px 24px;
  gap: 20px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;

  h1 {
    font-size: 46px;
    font-weight: 600;
    line-height: 58px;
    color: var(--fontColor2);
  }

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
export const ParagraphContainer = styled.div``;
export const ParagraphText = styled.p`
  line-height: 21px;
  font-size: 16px;
  font-weight: 500;
  color: var(--fontColor1);
  text-transform: uppercase;
`;
export const SpanContainer = styled.div``;
export const SpanText = styled.span`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: var(--fontColor1);
`;

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;
  gap: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ContainerPicture1 = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  max-width: 220px;
  border-radius: 6px;
  /* flex-grow: 1; */

  img {
    width: 100%;
    max-width: 220px;
    object-fit: contain;
  }
`;
export const ContainerPicture2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 220px;
  border-radius: 6px;
  /* flex-grow: 1; */

  img {
    width: 100%;
    max-width: 220px;
    object-fit: contain;
  }
`;

export const ContainerPicture3 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 220px;
  border-radius: 6px;
  /* flex-grow: 3; */

  img {
    width: 100%;
    max-width: 220px;
    object-fit: contain;
  }
`;
