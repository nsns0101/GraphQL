import React from "react";
import { useParams } from "react-router-dom"; //현재 주소?
import { gql } from "apollo-boost"; //graphql 쿼리를 요청하는 방법?
import { useQuery } from "@apollo/react-hooks";

// 함수 파라미터에 $써야함
//graphql 쿼리 요청하는 방법
const GET_MOVIE = gql`
  #apollo를 위한 것
  query getMovie($id: Int!) {
    # 서버로 가는 쿼리
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
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

  //로딩이 있으면
  if (loading) {
    return "loading";
  }
  //data가 있으면
  if (data && data.movie) {
    return data.movie.title;
  }
};
