import React, { useState } from "react";
import Layout from "../../component/layout";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";
import Scene0 from "../scene-0";
import Scene1 from "../scene-1";
import Scene2 from "../scene-2";
import Scene3 from "../scene-3";
import Scene4 from "../scene-4";
import Scene5 from "../scene-5";

function Mbti() {
  const [scene, setScene] = useState(0);
  const [ie, setIE] = useState(0);
  const [sn, setSN] = useState(0);
  const [ft, setFT] = useState(0);
  const [pj, setPJ] = useState(0);
  const next = () => {
    setScene(scene + 1);
  };
  const calc = (s: string) => {
    if (s == "i") setIE(ie - 1);
    if (s == "e") setIE(ie + 1);
    if (s == "s") setSN(sn - 1);
    if (s == "n") setSN(sn + 1);
    if (s == "f") setFT(ft - 1);
    if (s == "t") setFT(ft + 1);
    if (s == "p") setPJ(pj - 1);
    if (s == "j") setPJ(pj + 1);
  };
  return (
    <>
      <S.Layout>
        {scene == 0 && (
          <>
            <Scene0 next={next} />
          </>
        )}
        {scene == 1 && (
          <>
            <Scene1 next={next} calc={calc} />
          </>
        )}
        {scene == 2 && (
          <>
            <Scene2 next={next} calc={calc} />
          </>
        )}
        {scene == 3 && (
          <>
            <Scene3 next={next} calc={calc} />
          </>
        )}
        {scene == 4 && (
          <>
            <Scene4 next={next} calc={calc} />
          </>
        )}
        {scene == 5 && (
          <>
            <Scene5 next={next} calc={calc} />
          </>
        )}
        {scene == 6 && (
          <>
            <S.ResultLayout>
              {ie > 0 ? <>e</> : <>i</>}
              {sn > 0 ? <>n</> : <>s</>}
              {ft > 0 ? <>t</> : <>f</>}
              {pj > 0 ? <>j</> : <>p</>}
            </S.ResultLayout>
          </>
        )}
      </S.Layout>
    </>
  );
}

export default Mbti;
