import styled from "styled-components/macro";
import { THEME_COLOR, BREAKPOINT } from "../../constant";
import { fadeIn } from "../../animation/keyframe";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-top: 1rem;
  animation: ${fadeIn} 0.5s linear;
`;

export const CardListContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
`;

export const Title = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  border-bottom: 0.3rem solid ${THEME_COLOR.PRIMARY};
`;
