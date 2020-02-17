# > GraphQL 연습 <
React.js , GraphQL

# install
- yarn add graphql-yoga
- yarn add nodemon      //파일이 수정되면 서버를 재가동함
        - package.json 추가
            "scripts": {
                "start" : "nodemon"
            }
- babel 
    - yarn add babel-node --dev
    - yarn global add babel-cli
        - js에서 require 대신 import문 사용할 수 있게 만들어 줌
                - package.json 수정
                    "scripts": {
                        "start" : "nodemon --exec bable-node index.js"
                    }
    - yarn add babel-cli babel-preset-env babel-preset-stage-3 --dev



# babel 환경설정
- 1. .babelrc 파일 생성
- 2. .babelrc 파일에 코드 추가
        - {
            "presets" : ["env","stage-3"]
        }