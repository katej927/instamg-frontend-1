import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CommentCaption from "../../../../../PersonalFeed/Component/ReUsing/CommentCaption/CommentCaption";
import Recomments from "./Recomments";
import { PlusCircle } from "@styled-icons/feather/PlusCircle";
import { LIKE_COMMENT } from "../../../../../../Config";

export default function AllComments(props) {
  const [showComments, setShowComments] = useState([]);
  const [showIdx, setShowIdx] = useState(12);

  const {
    allCommentsData,
    handleReplyBtn,
    loginAccount,
    setModifyCommentInfo,
  } = props;

  useEffect(() => {
    if (allCommentsData) {
      filterComts(allCommentsData);
    }
  }, [allCommentsData]);

  const filterComts = (allCommentsData) => {
    setShowIdx(showIdx + 12);
    const filteredData = allCommentsData?.filter((comment, idx) => {
      return idx < showIdx;
    });

    setShowComments(filteredData);
  };

  return (
    <AllCommentsWrapper>
      {showComments?.map((comment, idx) => {
        const clickHeart = (commentId) => {
          fetch(`${LIKE_COMMENT}/${commentId}`, {
            method: "POST",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          });
        };

        return (
          <OneCommentWrapper key={idx}>
            <CommentCaption
              data={comment}
              isComment={true}
              handleReplyBtn={handleReplyBtn}
              clickHeart={() => clickHeart(comment.comment_id)}
              loginAccount={loginAccount}
              setModifyCommentInfo={setModifyCommentInfo}
            />
            {comment.recomment.length > 0 && (
              <Recomments
                eachComment={comment}
                handleReplyBtn={handleReplyBtn}
                clickHeart={clickHeart}
                loginAccount={loginAccount}
                setModifyCommentInfo={setModifyCommentInfo}
              />
            )}
          </OneCommentWrapper>
        );
      })}

      {allCommentsData?.length !== showComments?.length && (
        <PlusBtnWrapper>
          <PlusIcon onClick={() => filterComts(allCommentsData)} />
        </PlusBtnWrapper>
      )}
    </AllCommentsWrapper>
  );
}

const AllCommentsWrapper = styled.section`
`;

const OneCommentWrapper = styled.div`
  margin-bottom: 16px;
`;

const PlusIcon = styled(PlusCircle)`
  width: 24px;
  cursor: pointer;
`;

const PlusBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  margin-bottom: 16px;
`;
