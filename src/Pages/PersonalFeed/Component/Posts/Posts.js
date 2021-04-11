import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styled from "styled-components";
import Thumbnail from "./Thumbnail";
import FlexSet from "../../../../Styles/Common";
import { FEED_THUMBNAILS } from "../../../../Config";

export default function Posts(props) {
  const [postData, setPostData] = useState();
  const [offset, setOffset] = useState(1);
  const [loadingShow, setLoadingShow] = useState(true);

  const target = useRef();
  const { tmpId } = props;

  // 인피니티 IntersectionObserver
  const fetchInstaPosts = async () => {
    await axios
      // .get("/data/personalFeed/post.json")
      .get(`${FEED_THUMBNAILS}/${tmpId}?page=${offset}`)
      // .get(`${FEED_THUMBNAILS}/${5}?page=${offset}`)
      .then((response) => {
        if (response.data.post_list.length === 0) {
          setLoadingShow(false);
        }
        setPostData(
          postData
            ? postData.concat(response.data.post_list)
            : response.data.post_list,
        );
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    fetchInstaPosts();
  }, [offset]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 1,
    });
    if (target.current) {
      return observer.observe(target.current);
    }
    return () => observer.disconnect(target.current);
  }, [target]);

  const handleObserver = ([refs]) => {
    if (refs.isIntersecting) {
      setTimeout(() => {
        setOffset((prevNum) => prevNum + 1);
      }, 500);
    }
  };

  return (
    <PostsWrapper>
      <MenuTap>
        {MENUTAPS_PERSONAL_FEED.map((btnName) => {
          return <Btns>{btnName}</Btns>;
        })}
      </MenuTap>
      <Thumbnail
        postData={postData}
        // forwardedRef={target}
      />
      <LoadingAnimation
        show={postData?.length && loadingShow}
        ref={target}
        src="https://blog.kakaocdn.net/dn/bbG1RK/btqv0yFV1hL/VrPRCiDEklhGYyfut4KqJ1/loading.gif?attach=1&knm=img.gif"
        alt="로딩 중 입니다."
      />
      {/* <ShowMoreBtn onClick={showMoreBtn}>더보기</ShowMoreBtn> */}
    </PostsWrapper>
  );
}

// menuTap Arr
const MENUTAPS_PERSONAL_FEED = ["게시물", "태그됨"];

// Styled Component
const PostsWrapper = styled.article`
  /* border: 1px solid pink; */
  width: 935px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const MenuTap = styled.section`
  display: flex;
  justify-content: center;
  height: 53px;
  border-top: 1px solid rgba(var(--b38, 219, 219, 219), 1);
`;

const Btns = styled.button`
  /* border: 1px solid rgba(var(--i1d, 38, 38, 38), 1); */
  border-top: 1px solid rgba(var(--i1d, 38, 38, 38), 1);
  height: 100%;
  margin-right: 60px;
  &:last-child {
    margin-right: 0px;
  }
  font-size: 12px;
  color: rgba(var(--f52, 142, 142, 142), 1);
`;

const LoadingAnimation = styled.img`
  display: ${(props) => (props.show ? "block" : "none")};
  margin: 0px auto;
  width: 40px;
`;

const ShowMoreBtn = styled.button`
  margin: auto;
  padding: 5px 34px;
  background-color: rgba(var(--ca6, 219, 219, 219), 1);
  border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
  border-radius: 4px;
  color: rgba(var(--f75, 38, 38, 38), 1);
  font-size: 14px;
  font-weight: bold;
`;
