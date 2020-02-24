import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default ({ id, bg }) => (
  <div>
    {/* 링크생성 */}
    {/* <a href=""/>방식은 react App을 죽게 만듬, 그래서 Link를 씀 */}
    {/* id클릭시 해당하는 id페이지로 이동 */}
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={bg} />
      </Link>
    </Container>
  </div>
);
//박스
const Container = styled.div`
  height: 380px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  border-radius: 7px;
`;

//박스안의 포스터
const Poster = styled.div`
  background-image: url(${props => props.bg});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
`;
