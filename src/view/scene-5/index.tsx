import React, { useState } from "react";
import * as S from "./styles";

interface QuizProps {
  next: () => void;
  calc: (s: string) => void;
}

function Scene5({ next, calc }: QuizProps) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <S.Layout>
        <S.Quiz>
          {index == 0 && (
            <>
              <S.Text>
                열심히 코딩을 하고 나서 어느덧 해가 지고...
                <br />
                동아리방에 놀러온 동아리원 강관훈 김현채 나마로 박진용 서태수 은가은 이수영 이지유 임지수 정은영 최지현
                홍은수가 KUCC 홈페이지를 만들었다며 보여주었다!
              </S.Text>
              <S.Text>▶ 뭐라고 반응해줄까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("f");
                  setIndex(1);
                }}
              >
                헉 동아리를 위해 이렇게까지... 고생하셨어요!
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("t");
                  setIndex(1);
                }}
              >
                와 이런 걸 어떻게 만들었지... 능력자들이다...
              </S.Button>
            </>
          )}
          {index == 1 && (
            <>
              <S.Text>동아리원들도 많이 모였겠다, 슬슬 뒷풀이를 가는 분위기다.</S.Text>
              <S.Text>▶ 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("e");
                  next();
                }}
              >
                뒷풀이 너무 좋아! 사람 많이 가나요? 다 모여~
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("i");
                  next();
                }}
              >
                친한 사람 몇명이서 조용히 간다.
              </S.Button>
            </>
          )}
        </S.Quiz>
      </S.Layout>
    </>
  );
}

export default Scene5;
