# Instamg Team Project </br>
[![Instamg_My Part](https://github.com/katej927/while-you-were-playing-lol/assets/69146527/950669c1-2891-4563-be4b-36e864682838.png)](https://www.youtube.com/watch?v=XFBozjyrv88&t=1s)
## 1️⃣ 인턴십 개요

- 에이블 스토어
    
    스토리지 전문 기업으로 디지털 콘텐츠를 생성, 공유, 저장함에 있어서 최고의 서비스를 제공하고자 하는 기업 
    
- 포지션
    
    Front-end 인턴 및 Product Manager
    

## 2️⃣ 프로젝트 개요



- Instagram을 모티브로 한 웹 사이트를 구현하는 팀 프로젝트
- 프론트 3명 / 백엔드 2명
- 구현 페이지
    
    개인 피드 페이지 및 모달 창, 게시물 등록 페이지
    
- Product Manager
    
    전체 프로젝트 관리(Daily Stand Up Meeting 진행, 일정 관리, 사측 공지 전달 등)
    

## 3️⃣ Links


- Github 보기: [전체 코드](https://github.com/katej927/instamg-frontend-1)
- YouTube 영상 보기: [개인 파트](https://www.youtube.com/watch?v=XFBozjyrv88&t=1s), [팀 전체](https://www.youtube.com/watch?v=e4LXHo1YX08&t=1s)
- 블로그 보기: [기록하고 싶은 코드(코드 설명 기재)](https://velog.io/@katej927/3nd-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Instagram-%EA%B8%B0%EB%A1%9D%ED%95%98%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EC%BD%94%EB%93%9C), [종합 회고록](https://velog.io/@katej927/3rd-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%8F-%EC%9D%B8%ED%84%B4-instagram-%ED%9A%8C%EA%B3%A0%EB%A1%9D), [2주차 회고록](https://velog.io/@katej927/3rd-%ED%8C%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-instagram-2%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0%EB%A1%9D)

## 4️⃣ Techs


- React
- Javascript
- HTML5, CSS3
- Styled-Component

- Git
- ReactPlayer
- Slick

## 5️⃣ 구현 내용


✅ 팀원분들이 구현하신 것들은 생략했습니다.

✅ 구현한 코드 확인은 파란색 글자 또는 (클릭) 글자를 눌러주세요.

- [infinite scroll 구현](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/Posts/Posts.js) : `IntersectionObserver`, `useRef`, `async/await`, `setTimeout` 등 활용
- (대)댓글 [C.R.U.D](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/TextSectionOfModal/UserComment/UserComment.js) 및 [개수 필터링](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/TextSectionOfModal/CaptionAllComments/Component/Recomments.js) : `filter` 활용
- [Atomic Design 중 Atom 정도의 단위 제작하여 팀원들이 사용 가능하게 함.](https://github.com/katej927/instamg-frontend-1/tree/main/src/Pages/PersonalFeed/Component/ReUsing)
    - [프로필 사진](https://github.com/katej927/instamg-frontend-1/tree/main/src/Components/ProfilePic) : 팀 공동 사용, `param`으로 사용법 설명, 보다 직관적인 변수명 사용
    - [버튼 모달창](https://github.com/katej927/instamg-frontend-1/tree/main/src/Pages/PersonalFeed/Component/ReUsing/DotMenu) : 사용하고 싶은 버튼의 text들을 배열에 담고 `onClick` 메소드를 속성으로 내려 사용
    - [숫자 단위 계산 ( k ~ e )](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/ReUsing/ConversionNumberUnit.js) : 1,000 부터 13자리 수까지 영문 단위로 반환
    - [분 단위의 실시간 시간 계산](https://github.com/katej927/instamg-frontend-1/blob/main/src/Components/TimeData/TimeData.js) : 팀 공동 사용,  `setInterval`, `getTime`, `Math.floor` 등 활용
- [게시물 생성, 삭제](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/UploadPosts/UploadPosts.js) : `FormData`로 파일 업로드, `FileReader`로 업로드 될 이미지 파일 미리 보기 구현
- [반응형 모달창](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/ImgVideoSectionOfModal/ImgVideoSectionOfModal.js) : 들어오는 미디어 데이터에 따른 높이의 변화
- 모달의 데이터 변경([해당코드](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/ThumbnailModal.js) ∈ [부모코드](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/Posts/Thumbnail.js)): 따로 오는 데이터들의 매칭을 위해 화살표 방향에 따라 현재 idx에 +1/- 1을 더하여 데이터 순서대로 보여주기
- [초기 세팅](https://github.com/katej927/instamg-frontend-1/tree/main/src) : CRA 초기 세팅 및 prettier 세팅
- 다양한 라이브러리 활용 : [slick slider(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/Story/EachStoryMap.js), [ReactPlayer(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/ImgVideoSectionOfModal/ImgVideoSectionOfModal.js), [styled-icons(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/ReUsing/Icons/BookMark.js), Axios 등
- 동적 데이터 통신 : [Axios(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/TextSectionOfModal/Header/Header.js), [fetch(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/Component/ReUsing/CommentCaption/CommentCaption.js) 활용
- [동적 라우팅](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/PersonalFeed/PersonalFeed.js)
- 레이아웃 및 기능 재 사용 : if 조건문, 조건부 렌더링([&&(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/TextSectionOfModal/CaptionAllComments/Component/AllComments.js) 및 [삼항 연산자(클릭)](https://github.com/katej927/instamg-frontend-1/blob/main/src/Pages/ThumbnailModal/Component/TextSectionOfModal/FiguresOfTotalViewsLikes.js)) 등 활용
