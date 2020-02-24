import React from "react";
import { Link } from "react-router-dom";

export default ({ id }) => (
  <div>
    {/* 링크생성 */}
    {/* <a href=""/>방식은 react App을 죽게 만듬, 그래서 Link를 씀 */}
    {/* id클릭시 해당하는 id페이지로 이동 */}
    <Link to={`/${id}`}>{id}</Link>
  </div>
);
