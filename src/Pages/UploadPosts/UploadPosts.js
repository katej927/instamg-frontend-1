import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { UPLOAD_POSTS } from "../../Config";

export default function UploadPosts() {
  const [mediaData, setMediaData] = useState({
    previewURL: "",
    file: [],
  });
  const [postContent, setPostContent] = useState();
  const [userId, setUserId] = useState();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setUserId(location.state.user_id);
  }, [location]);

  const handleMediaInput = (e) => {
    e.stopPropagation();

    let reader = new FileReader();
    let file = e.target.files[0];

    const filesInArr = Array.from(e.target.files);

    reader.onloadend = () => {
      setMediaData({
        file: filesInArr,
        previewURL: reader.result,
      });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  let profilePreview = null;
  if (mediaData?.file.length > 0) {
    profilePreview = mediaData?.file[0].type.includes("image") ? (
      <PreviewImg src={mediaData?.previewURL} />
    ) : (
      <PreviewVideo src={mediaData?.previewURL} />
    );
  }

  const handleContent = (e) => {
    e.stopPropagation();
    setPostContent(e.target.value);
  };

  const handleBtn = () => {
    if (mediaData.file.length === 0) {
      alert("사진 또는 비디오를 등록해주세요.");
    }

    const formData = new FormData();

    mediaData?.file.map((eachfile) => formData.append("path", eachfile));
    formData.append("json", JSON.stringify({ content: postContent }));

    fetch(UPLOAD_POSTS, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "SUCCESS") {
          history.push(`/personalFeed/${userId}`);
        }
      });
  };

  return (
    <UploadPostsWrapper>
      <UploadTitle>NEW POST</UploadTitle>
      <UploadPictureWrapper>
        <MediaInput
          id="fileInput"
          type="file"
          accept="image/*, video/*"
          multiple
          onChange={handleMediaInput}
        />
        <MediaLabel for="fileInput">파일 선택</MediaLabel>
      </UploadPictureWrapper>
      <Picture>{profilePreview}</Picture>
      <Content type="text" onChange={handleContent} />
      <PostBtn
        type="submit"
        onClick={handleBtn}
        active={mediaData.file.length > 0}
      >
        게시
      </PostBtn>
    </UploadPostsWrapper>
  );
}

const UploadPostsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const UploadTitle = styled.div`
  margin: 25px auto 40px;
  font-size: 30px;
  font-weight: bold;
`;

const UploadPictureWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 614px;
`;

const MediaInput = styled.input`
  width: 520px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  ::-webkit-file-upload-button {
    display: none;
  }
`;

const MediaLabel = styled.label`
  padding: 7px;
  border-radius: 5px;
  background-color: #dbdbdb;
  font-size: 14px;
  font-weight: bold;
  color: white;
`;

const Picture = styled.div`
  width: 614px;
  min-height: 300px;
  max-height: 800px;
  margin: 10px auto 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  overflow: hidden;
`;

const PreviewImg = styled.img`
  width: inherit;
`;

const PreviewVideo = styled.video``;

const Content = styled.textarea`
  width: 614px;
  margin: 10px auto 20px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
`;

const PostBtn = styled.button`
  width: 614px;
  margin-bottom: 30px;
  padding: 7px 0px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
  background-color: #0095f6;
  opacity: ${(props) => (props.active ? 1 : 0.2)};
`;
