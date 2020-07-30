import * as S from "./styles";

import React from "react";
import Header from "../header";

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <S.LayoutBorder />
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
}

export default Layout;
