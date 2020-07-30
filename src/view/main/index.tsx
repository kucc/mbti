import React from "react";
import Layout from "../../component/layout";
import Carousel from "../../component/carousel";
import CardList from "../../component/card-list";
import { STATIC_URL } from "../../constant";
import * as S from "./styles";

function Main() {
  return (
    <>
      <Layout>
        <S.Main>
          <S.CarouselContainer>
            <Carousel>
              <img src="https://ichef.bbci.co.uk/news/410/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg" />
            </Carousel>
          </S.CarouselContainer>
          <S.ListContainer>
            <S.TitleContainer>
              <S.Title>목록</S.Title>
            </S.TitleContainer>
            <S.CardListContainer>
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
              <CardList />
            </S.CardListContainer>
          </S.ListContainer>
        </S.Main>
      </Layout>
    </>
  );
}

export default Main;
