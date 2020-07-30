import React, { useState } from "react";
import * as S from "./styles";

interface QuizProps {
  next: () => void;
  calc: (s: string) => void;
}

function Scene3({ next, calc }: QuizProps) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <S.Layout>
        <S.Quiz>
          {index == 0 && (
            <>
              <S.Text>
                인사를 끝내고 나서 동아리방을 둘러보자, 많은 책들이 꽂혀 있는 책장이 눈에 띈다.
                <br />
                이왕 동아리 들어온거, 책을 빌려가야 회비 뽕을 뽑지!
              </S.Text>
              <S.Text>▶ 어떤 책을 빌려갈까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("s");
                  calc("t");
                  setIndex(1);
                }}
              >
                효율적으로 코딩하는 법
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("s");
                  calc("f");
                  setIndex(1);
                }}
              >
                협업할 때 필요한 인간관계 기술 10가지
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("n");
                  calc("t");
                  setIndex(1);
                }}
              >
                더 나은 프로그래머가 되자!
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("n");
                  calc("f");
                  setIndex(1);
                }}
              >
                현업 개발자가 말하는 최신 프로그래밍 기법
              </S.Button>
            </>
          )}
          {index == 1 && (
            <>
              <S.Text>책을 고르고 나니, 삐뚤빼뚤 어질러진 책장이 거슬린다.</S.Text>
              <S.Text>▶ 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("p");
                  next();
                }}
              >
                마음이 불편하다. 내가 정리해야지!
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("j");
                  next();
                }}
              >
                내 방 정리도 안 하는데 무슨...
              </S.Button>
            </>
          )}
        </S.Quiz>
      </S.Layout>
    </>
  );
}

export default Scene3;
