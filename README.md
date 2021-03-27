# Instamg Team Project </br>
<img width= "300px" src="http://img.khan.co.kr/news/2021/03/17/2021031701001975400169661.jpg" />

## 1️⃣ Introduction
instagram을 모티브로 하여 구현한 팀 프로젝트

## 2️⃣ Period
'21. 2. 15 ~ 3. 11

## 3️⃣ Members
* Frontend : `PM` 정선미, 김희진, 박영호
* Backend: 윤정민, 홍연우

## 4️⃣ Front Techs
* React
* React Hooks
* React-router-dom
* React-slick-slider 
* React-Swiper
* React-fontAwesome
* HTML5 , CSS3
* Javascript (ES6) 
* Git
* Styled-Components
* styled-dropdown-component
* WebSocket Api

## 5️⃣ Communication Tools
- Slack
- Trello
- Git + GitHub
- [Notion](https://www.notion.so/Able-Stor-c8a49debe8974524988f4601c2ec069b) (Agile 방식의 Daily StandUp Meeting)

## 6️⃣ Functions

### 1. 로그인/회원가입/로그아웃 페이지
- Validation을 이용한 회원가입 로그인 페이지 구현 및 로그아웃 구현
- JWT 와 LocalStorage를 사용하여 로그인 페이지 구현
- styled-dropdown-component를 이용하여 프로필 로그아웃 라우팅 기능 구현
- LocalStorage removeItem을 사용하여 로그아웃 기능 구현

### 2. 메인 피드 페이지
- Intersection Observer API를 이용해서 인피니트 스크롤 페이지네이션 구현
- Material UI 라이브러리 및 useRef Hooks 사용으로 모달 프리뷰 기능 구현
- React Player 라이브러리를 사용해서 동영상 재생 기능 구현
- Swiper 라이브러리를 사용해서 슬라이더 기능 구현
- 게시물 좋아요, 유저 팔로우 및 댓글 읽기, 등록, 수정, 삭제 기능 구현
- 모달 컴포넌트 생성 및 props 에 따라 모달 값 변화 기능 구현

### 3. 메인 피드 업로드 페이지
- Form Data 형식으로 파일 업로드 및 게시물 생성, 삭제 기능 구현
- FileReader 객체로 업로드된 이미지 파일 미리보기 구현

### 4. 개인 유저 피드 페이지
- 무한 스크롤 구현 (Intersection Observer, useRef, async & await, setTimeout 활용)
- slick slider을 활용한 슬라이드 구현 
- 동적 라우팅 구현 (메인 피드→ 개인 피드, 개인 피드→ 스토리, DM, 게시물 등록)
- axios, fetch를 활용한 통신
- 컴포넌트 재사용 (아토믹 디자인)
  - 프로필 사진 (팀 공동사용, param으로 사용법 설명)
  - 숫자 단위 계산 메소드 (3~13자리 수까지 영문 단위로 반환)
  - icons 및 버튼

### 5. 개인 유저 피드 모달창
- 반응형 모달 (사진에 따라 모달의 높이 변화)
- 피드 페이지에 나오는 사진의 순서대로 모달창에 데이터 불러오기
- filter 메소드를 활용한 (대)댓글 수 필터링 (3개, 12개씩 출현)
- (대)댓글 C.R.U.D 기능 구현
- 컴포넌트 재사용 (아토믹 디자인)
  - 분 단위의 실시간 계산 기능 구현 (팀 공동 사용, setInterval, getTime, Math.floor 등 활용)
  - 버튼 모달창 제작 (버튼의 text들을 배열에 담고 onClick메소드를 속성으로 내려주면 재사용 가능)

### 6. 개인 유저 게시물 업로드 페이지
- 게시물 등록 및 삭제 기능 구현
- `formData`와 `map()`을 사용하여 동영상, 이미지 등 무제한 등록 가능
- 등록 전, img 및 비디오 미리 보기 기능
- 사진 및 동영상 없으면 게시물 등록 버튼 사용 불가 조건

### 7. 메인 피드 스토리 페이지
- React-Swiper library을 사용해 Slider 구현
- JavaScript를 사용하여 각 이미지의 Index를 이용하여 동적인 이미지 슬라이드를 구현하여 2중 Slider 구현
- 들어오는 데이터에따라 이미지 또는 동영상을 보여줄 수 있도록 구현

### 8. 개인 피드 스토리 페이지
- 하나의 이미지 및 동영상을 보여주며 React-Swiper를 이용한 슬라이드 구현

### 9. 프로필 수정 페이지
- FormData를 사용해 프로필 이미지를 업로드하여 원하는 이미지로 변화 기능 구현

### 10. DM 페이지
-  WebSocket Api를 이용한 실시간으로 다른 상대와 대화기능 구현
-  WebSocket onOpen, onSend 메서드를 사용해 WebSocekt 주소에 룸 생성 및 메세지 전송
-  WebSocket onMessage 메서드를 사용해 상대방이 보낸 메세지 받기
-  Modal을 이용한 DM상대방 추가 기능 구현

## Project Result
[![video](https://i.ytimg.com/an_webp/HZbOxALEh_c/mqdefault_6s.webp?du=3000&sqp=CP3c4IIG&rs=AOn4CLDD69LkCfxmmtYVY_cf_1TuB4jbbg)](https://www.youtube.com/watch?v=HYAZYJtuMZ8)
