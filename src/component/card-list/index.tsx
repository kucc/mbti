import React from "react";
import * as S from "./styles";

interface CardListProps {
  children?: React.ReactNode;
}

function CardList({ children }: CardListProps) {
  return (
    <>
      <S.CardList>준비중</S.CardList>
    </>
  );
}

export default CardList;
