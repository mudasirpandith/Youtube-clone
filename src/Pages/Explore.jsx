import React from "react";
import styled from "styled-components";
import ModifiedCard from "../components/ModifiedCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: horizontal;
  gap: 5px;
  margin: 0 10px;
`;
const TrendingCard = styled.div`
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px 100px 0px 20px;
  height: 100px;
  width: 90px;
  border-radius: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Icon = styled.img`
  height: 30px;
  width: 30px;
`;
const Name = styled.h3`
  margin-top: 20px;
  font-size: 15px;
`;
const TrendindSection = styled.div`
  margin: 10px 10px;
`;
const Title = styled.p`
  font-size: 17px;
`;
const Explore = () => {
  return (
    <Container>
      <CardSection>
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/trending_color_64.png" />
          <Name>Trending</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/music_color_64.png" />
          <Name>Music</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/movies_color_64.png" />
          <Name>Films</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/live_color_64.png" />
          <Name>Live</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/gaming_color_64.png" />
          <Name>Gaming</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/news_color_64.png" />
          <Name>News</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/sports_color_64.png" />
          <Name>Sports</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/learning_color_64.png" />
          <Name>Learning</Name>
        </TrendingCard>{" "}
        <TrendingCard>
          <Icon src="https://youtube.com/img/explore/destinations/icons/fashion_and_beauty_color_64.png" />
          <Name>Fashion & beauty</Name>
        </TrendingCard>{" "}
      </CardSection>
      <TrendindSection>
        <Title>Trending videos</Title>
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
        <ModifiedCard
          type="sm"
          liked="no"
          title=" adipisicingconsequatur tempore vel tempora quis quisquam, nulla recusandae dolor? Voluptas hic quas incidunt cupiditate?
"
        />{" "}
      </TrendindSection>
    </Container>
  );
};
export default Explore;
