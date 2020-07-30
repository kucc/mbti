import React, { useState } from "react";
import * as S from "./styles";

interface QuizProps {
  next: () => void;
  calc: (s: string) => void;
}

function Scene4({ next, calc }: QuizProps) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <S.Layout>
        <S.Quiz>
          {index == 0 && (
            <>
              <S.Text>동아리를 어느정도 둘러보고 나서, 동아리에서 프로젝트에 참여하게 된 당신.</S.Text>
              <S.Text>▶ 어떤 프로젝트에 참여할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("s");
                  setIndex(1);
                }}
              >
                익숙하고, 이미 할 줄 아는 기술을 쓰는 프로젝트.
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("n");
                  setIndex(1);
                }}
              >
                안 해 본 새로운 일을 해야 하는 프로젝트.
              </S.Button>
            </>
          )}
          {index == 1 && (
            <>
              <S.Text>코딩을 하려고 컴퓨터를 켰다.</S.Text>
              <S.Text>▶ 내 컴퓨터는 어떤 모습일까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("j");
                  setIndex(2);
                }}
              >
                깔끔 그 자체. 폴더별로 착!
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("p");
                  setIndex(2);
                }}
              >
                이 파일은 여기, 저 파일은 저기...
              </S.Button>
            </>
          )}
          {index == 2 && (
            <>
              <S.Text>"저희 프로젝트 계획을 짜볼까요?"</S.Text>
              <S.Text>▶ 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("j");
                  setIndex(3);
                }}
              >
                계획 짜는 건 제가 전문입니다.
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("p");
                  setIndex(3);
                }}
              >
                예? 계획이요? (이미 IDE 켜고 세팅 중)
              </S.Button>
            </>
          )}
          {index == 3 && (
            <>
              <S.Text>
                한창 코딩을 하던 도중, 팀원이 소리를 질렀다.
                <br />
                "엇, 이 코드 충돌이 났어요!"
                <br />
                이것저것 꼬여 있어 한 눈에 봐도 쉽게 고치기 힘들어 보인다.{" "}
              </S.Text>
              <S.Text>▶ 어떻게 할까?</S.Text>
              <S.Button
                onClick={(e) => {
                  calc("s");
                  next();
                }}
              >
                일단 기존 코드에서 벗어나지 않고 버그를 고쳐 본다.
              </S.Button>
              <S.Button
                onClick={(e) => {
                  calc("n");
                  next();
                }}
              >
                어차피 마음에 안 들었다. 처음부터 다시 짠다.
              </S.Button>
            </>
          )}
        </S.Quiz>
      </S.Layout>
    </>
  );
}

export default Scene4;
