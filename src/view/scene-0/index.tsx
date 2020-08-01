import React, { useState } from "react";
import * as S from "./styles";
import { STATIC_URL } from "../../constant";

interface QuizProps {
  next: () => void;
}

function Scene0({ next }: QuizProps) {
  const [goNext, setGoNext] = useState(false);

  return (
    <>
      <S.Layout
        onClick={() => {
          setGoNext(true);
          setTimeout(() => {
            next();
          }, 2000);
        }}
      >
        <S.AssetContainer>
          <S.Asset1 next={goNext} src={STATIC_URL.ASSET0_1} />
        </S.AssetContainer>
        <S.AssetContainer>
          <S.Asset2 src={STATIC_URL.ASSET0_2} />
        </S.AssetContainer>
        <S.AssetContainer>
          <S.Asset3 src={STATIC_URL.ASSET0_3} />
        </S.AssetContainer>
        <S.AssetContainer>
          <S.Asset4 src={STATIC_URL.ASSET0_4} />
        </S.AssetContainer>
        <S.FloatingText>시작하려면 문을 두드려주세요...</S.FloatingText>
      </S.Layout>
    </>
  );
}

export default Scene0;
