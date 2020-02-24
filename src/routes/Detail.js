import React from "react";
import { useParams } from "react-router-dom"; //현재 주소?
import { gql } from "apollo-boost"; //graphql 쿼리를 요청하는 방법?
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";

// 함수 파라미터에 $써야함
//graphql 쿼리 요청하는 방법
const GET_MOVIE = gql`
  #apollo를 위한 것
  query getMovie($id: Int!) {
    # 서버로 가는 쿼리
    movie(id: $id) {
      title
      medium_cover_image
      language
      rating
      description_intro
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

export default () => {
  let { id } = useParams(); //주소창에 적힌 id (string) (App.js 참고)
  console.log(typeof id); //string

  //id를 정수형으로 바꿔줌(바꾸지 않으면 위의 쿼리에서 Int!를 벗어나서 안됨)
  id = parseInt(id);

  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id }
  });
  console.log(loading, data);
  //   console.log(!loading && data.movie && "good");
  return (
    <Container>
      <Column>
        <Title>{loading ? "Loading..." : data.movie.title}</Title>
        {/* 로딩 완료했고 data.movie가 있으면 보여주기(처음엔 data.movie가 없음 로딩을 안했으니) */}
        {!loading && data.movie && (
          <>
            <Subtitle>{`${data.movie.language} · ${data.movie.rating}`}</Subtitle>
            <Description>{data.movie.description_intro}</Description>
          </>
        )}
      </Column>
      <Poster
        //data와 data.movie가 있으면 data.movie.medium_cover_image를 표시 아니면 ""를 표시
        // bg={data && data.movie ? data.movie.medium_cover_image : ""}
        bg={data?.movie?.medium_cover_image}
      ></Poster>
      {/* {data && data.suggestions && data.suggestions.map(s=>)} */}
      {/* {data?.suggestions?.map(s=>)} */}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 25px;
`;

const Poster = styled.div`
  background-image: url(${props => props.bg});
  width: 25%;
  height: 60%;
  background-color: transparent;
  background-size: cover;
  background-position: center center;
`;
