import React, { useState } from "react";
import * as S from "./styles";

interface QuizProps {
  next: () => void;
  calc: (s: string) => void;
}

function Scene2({ next, calc }: QuizProps) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <S.Layout>
        <S.Quiz>
          {index == 0 && (
            <>
              <S.Text>
                처음 보는 동아리원이 말을 걸어온다!
                <br />
                "안녕하세요! 신입 회원분이세요?"
              </S.Text>
              <S.Text>▶ 어떻게 인사할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("e");
                  setIndex(1);
                }}
              >
                새로운 만남 너무 좋아! 더 반갑게 인사한다.
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("i");
                  setIndex(1);
                }}
              >
                반갑지만 과한 관심은 부담스럽다. 하하;
              </S.Button>
            </>
          )}
          {index == 1 && (
            <>
              <S.Text>
                동아리원이 자기소개를 시작했다.
                <br />
                "저는 김코송이에요. 이런 거 만들면서 살아요."
              </S.Text>
              <S.Text>▶ 자기소개는 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("s");
                  setIndex(2);
                }}
              >
                저는 예전에 ~~를 했었고 지금 ~~를 공부하고 있어요.
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("n");
                  setIndex(2);
                }}
              >
                저는 동아리에서 앞으로 ~~를 공부하고 싶어요.
              </S.Button>
            </>
          )}
          {index == 2 && (
            <>
              <S.Text>
                동아리원이 반가워하며 말을 건넨다.
                <br />
                "저 이번 학기에 그거 스터디 하는데! 같이 하실래요?"
              </S.Text>
              <S.Text>▶ 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("i");
                  next();
                }}
              >
                공부는 혼자 조용히 하는 타입이라...
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("e");
                  next();
                }}
              >
                공부도 같이 해야 재밌고 효율도 좋아!
              </S.Button>
            </>
          )}
        </S.Quiz>
      </S.Layout>
    </>
  );
}

export default Scene2;
