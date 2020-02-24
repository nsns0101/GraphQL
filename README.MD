# > GraphQL 연습 <

- React, React Hooks, GraphQL, Apollo
- Apollo의 장점은 Cache를 가지고 있음(한번 로딩한 것은 다시 들어왔을 때 로딩하지않고 바로 보여줌)
- RESTFul API의 Over Fetching, Under Fetching문제를 해결

## 실행하기

- 1. commit 기록에서 - back-end_setting_completed까지의 기록을 받아 압축풀고 실행(back-end 서버)
- 2. 최근 commit한 것을 다운 받아 실행(front-end)

## GraphQL 문법

- 스키마는 RESTFul API의 URLs 같은 역할

  - graphql/schema.graphql 파일 만들어주기
  - 뒤에 !를 붙이는 것은 null값을 리턴받지 않겠다는 의미
  - type는 model같은 느낌?

- Resolvers는 RESTFul API의 View 같은 역할
  - graphql/resolvers.js 파일 만들어 주기

## Optional Chaining

- js의 새로운 문법
  - (밑의 코드 뜻 : data와 data.movie가 true면 data.id를 반환)
  - {data && data.movie && data.id}를
  - {data?.movie?.id}로 쓸 수 있음(Optional Chaining)

## install

- yarn add graphql-yoga
- yarn add nodemon //파일이 수정되면 서버를 재가동함 - package.json 추가
  "scripts": {
  "start" : "nodemon"
  }
- babel

  - yarn add babel-node --dev
  - yarn global add babel-cli
    - js에서 require 대신 import문 사용할 수 있게 만들어 줌 - package.json 수정 - "scripts": {
      "start" : "nodemon --exec bable-node index.js"
      }
  - yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev

- yarn add node-fetch
  - api fetch 도구
  - axios로 대체
- yarn add axios

- yarn add styled-components react-router-dom
- yarn add apollo-boost @apollo/react-hooks graphql

## babel 환경설정

- 1. .babelrc 파일 생성
- 2. .babelrc 파일에 코드 추가
     - {
       "presets" : ["env","stage-3"]
       }
