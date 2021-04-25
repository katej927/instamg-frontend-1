import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function EachStory(props) {
  const history = useHistory();

  const { thumbnailPic, title, id, feedPic, account } = props;

  const clickedStory = () => {
    history.push({
      pathname: `/feedstory/${id}`,
      state: { feedPic: feedPic, account: account },
    });
  };

  return (
    <EachStoryWrapper onClick={clickedStory}>
      <StoryImgLine>
        <StoryImg src={thumbnailPic} />
      </StoryImgLine>
      <StoryTitle>{title}</StoryTitle>
    </EachStoryWrapper>
  );
}

const EachStoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: fit-content;
  height: 115px;
  margin: 7.5px 21.5px;
  cursor: pointer;
`;

const StoryImgLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87px;
  height: 87px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
`;

const StoryImg = styled.img`
  width: 77px;
  height: 77px;
  border-radius: 50%;
`;

const StoryTitle = styled.div`
  width: 85px;
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
