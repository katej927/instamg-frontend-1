import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EachStoryMap from "./EachStoryMap";
import { FEED_STORY } from "../../../../Config";

export default function Story(props) {
  const [storiesData, setStoriesData] = useState();
  const { feedPic, account, userId, urlId } = props;

  useEffect(() => {
    // fetch("/data/personalFeed/story.json")
    fetch(`${FEED_STORY}/${urlId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      // fetch(`${FEED_STORY}/5`)
      .then((res) => res.json())
      .then((res) => setStoriesData(res.profile_story));
  }, []);

  return (
    <SlideControlDiv show={storiesData?.length > 0}>
      <StoryWrapper>
        <EachStoryMap
          storiesData={storiesData}
          feedPic={feedPic}
          account={account}
          userId={userId}
        />
      </StoryWrapper>
    </SlideControlDiv>
  );
}

const SlideControlDiv = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 935px;
  margin: 0 auto 44px;
`;

const StoryWrapper = styled.section`
  /* border: 1px solid green; */
  display: flex;
  height: 130px;
`;
