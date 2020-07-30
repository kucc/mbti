import React, { useState } from "react";
import * as S from "./styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

interface CarouselProps {}

function Carousel({}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const max = 3;
  return (
    <>
      <S.Carousel>
        <S.LeftButton
          onClick={(e) => {
            setIndex((max + index - 1) % max);
          }}
        >
          <NavigateBeforeIcon fontSize="large" />
        </S.LeftButton>
        <S.Text>
          <S.Title>{index}</S.Title>
          <S.Title>내 개발자 MBTI는?</S.Title>
          <S.SubTitle>요즘 핫한 성격유형검사!</S.SubTitle>
        </S.Text>
        <S.RightButton
          onClick={(e) => {
            setIndex((index + 1) % max);
          }}
        >
          <NavigateNextIcon fontSize="large" />
        </S.RightButton>
      </S.Carousel>
    </>
  );
}

export default Carousel;
