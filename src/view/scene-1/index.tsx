import React from "react";
import * as S from "./styles";

interface QuizProps {
  next: () => void;
  calc: (s: string) => void;
}

function Scene1({ next, calc }: QuizProps) {
  return (
    <>
      <S.Layout>
        <S.Quiz>
          <S.Text>
            고려대학교 중앙 컴퓨터동아리 KUCC에 신입 회원으로 들어온 당신!
            <br />
            두근두근거리는 마음으로 동아리방에 처음 들어가는데..!
          </S.Text>
          <S.Text>▶ 동아리방에 몇 명이 있으면 좋을까?</S.Text>
          <S.Button
            onClick={(e) => {
              calc("i");
              next();
            }}
          >
            너무 많지는 않았으면 좋겠다.
          </S.Button>
          <S.Button
            onClick={(e) => {
              calc("e");
              next();
            }}
          >
            사람이 많으면 많을수록 좋다!
          </S.Button>
        </S.Quiz>
      </S.Layout>
    </>
  );
}

export default Scene1;
