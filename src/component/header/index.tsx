import React from "react";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";

interface HeaderProps {}

function Header() {
  return (
    <S.Header>
      <S.DesktopLink to="/">
        <S.Logo src={STATIC_URL.LOGO} alt="Logo"></S.Logo>
      </S.DesktopLink>
      <S.MobileLink to="/">
        <S.MobileLogo src={STATIC_URL.LOGO_WITHOUT_TEXT} alt="Mobile Logo" />
      </S.MobileLink>
      <S.DesktopButtons>
        <S.DesktopLink to="/board">
          <S.Button>게시판</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="/archieve">
          <S.Button>자료실</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="/member">
          <S.Button>회원</S.Button>
        </S.DesktopLink>
        <S.DesktopLink to="sso.kucc.co.kr">
          <S.Button>로그인</S.Button>
        </S.DesktopLink>
      </S.DesktopButtons>
      <S.MobileButtons>
        <S.Button>
          <img src={STATIC_URL.MEMBER_ICON} alt="Member Icon" />
        </S.Button>
      </S.MobileButtons>
    </S.Header>
  );
}

export default Header;
