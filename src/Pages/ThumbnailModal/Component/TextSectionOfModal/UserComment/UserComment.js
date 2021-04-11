import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Smile } from "@styled-icons/feather/Smile";
import { COMMENT_POST } from "../../../../../Config";

export default function UserComment(props) {
  const [textValue, setTextValue] = useState("");

  const {
    replyBtnAccountInfo,
    postId,
    resetReplyBtnInfo,
    modifyCommentInfo,
    setModifyCommentInfo,
    currentIdx,
  } = props;

  useEffect(() => {
    if (replyBtnAccountInfo.accountName) {
      setTextValue(`@${replyBtnAccountInfo.accountName} `);
    }
  }, [replyBtnAccountInfo.accountName]);

  useEffect(() => {
    if (modifyCommentInfo.modifyContent) {
      setTextValue(modifyCommentInfo.modifyContent);
    }
  }, [modifyCommentInfo.modifyContent]);

  useEffect(() => {
    setTextValue("");
    setModifyCommentInfo({
      modifyId: "",
      modifyContent: "",
    });
    resetReplyBtnInfo();
  }, [currentIdx]);

  const handleTextChange = (e) => {
    const { value } = e.target;
    setTextValue(value);
  };

  const btnClick = () => {
    if (!textValue) {
      alert("버튼 클릭 조건 실패"); // 추후 지우기
      return;
    }

    if (!textValue.includes(replyBtnAccountInfo.accountName)) {
      resetReplyBtnInfo();
    }

    const values = {
      content: textValue,
    };

    if (replyBtnAccountInfo.accountId) {
      values.comment_id = replyBtnAccountInfo.accountId;
    }

    fetch(
      !modifyCommentInfo?.modifyId
        ? `${COMMENT_POST}/${postId}`
        : `${COMMENT_POST}/${postId}/${modifyCommentInfo?.modifyId}`,
      {
        method: "POST",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(values),
      },
    );
    setTextValue("");
    setModifyCommentInfo({
      modifyId: "",
      modifyContent: "",
    });
    resetReplyBtnInfo();
  };

  return (
    <UserCommentWrapper>
      <EmojiIcon />
      <Textarea
        value={textValue}
        placeholder={"댓글달기..."}
        onChange={handleTextChange}
      ></Textarea>
      <PostBtn onClick={btnClick} active={textValue}>
        게시
      </PostBtn>
    </UserCommentWrapper>
  );
}

const UserCommentWrapper = styled.section`
  display: flex;
  align-items: center;
  min-height: 56px;
  padding: 0px 16px;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
`;

const EmojiIcon = styled(Smile)`
  width: 24px;
  margin-right: 16px;
`;

const Textarea = styled.textarea`
  /* border: 1px solid red; */
  width: 234px;
  height: 18px;
  max-height: 80px;
  height: 18px !important;
  font-size: inherit;
`;

const PostBtn = styled.button`
  padding: 0px;
  font-weight: bold;
  color: rgba(var(--d69, 0, 149, 246), 1);
  opacity: ${(props) => (props.active ? "1" : "0.3")};
`;
