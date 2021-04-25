import React from "react";
import styled from "styled-components";
import CommentCaption from "../../../../PersonalFeed/Component/ReUsing/CommentCaption/CommentCaption";
import AllComments from "./Component/AllComments";

export default function CaptionAllComments(props) {
  const { eachModalAllData, handleReplyBtn, setModifyCommentInfo } = props;

  return (
    <CaptionAllCommentsWrapper>
      <UserPostCommentWrapper>
        <CommentCaption isComment={false} data={eachModalAllData} />
        <AllComments
          allCommentsData={eachModalAllData?.comments}
          handleReplyBtn={handleReplyBtn}
          loginAccount={eachModalAllData?.login_user_account}
          setModifyCommentInfo={setModifyCommentInfo}
        />
      </UserPostCommentWrapper>
    </CaptionAllCommentsWrapper>
  );
}

const CaptionAllCommentsWrapper = styled.section`
  height: 350px; // 추후 수정
  overflow-x: hidden; // 추후 수정
  -ms-overflow-style: none; // IE에서 스크롤바 감춤
  &::-webkit-scrollbar {
    display: none !important; // 윈도우 크롬 등
  }
`;

const UserPostCommentWrapper = styled.div`
`;
