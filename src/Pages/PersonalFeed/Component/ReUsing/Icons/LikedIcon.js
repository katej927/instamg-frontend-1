import React from "react";
import styled from "styled-components";
import { Heart } from "@styled-icons/octicons/Heart";
import { HeartFill } from "@styled-icons/octicons/HeartFill";

/**
 *
 * @param {string} loading - 속성 리스트 : size(기본: 28), styles(기본: 빨강, 검정), isFilled(불린), clickHeart(온클릭 메소드), HeartWrapStyles
 */

export default function LikedIcon(props) {
  const { size, styles, isFilled, clickHeart, HeartWrapStyles } = props;

  const defaultStyles = {
    color: styles?.color
      ? styles?.color
      : isFilled
      ? "rgb(237, 73, 86)"
      : "rgb(38, 38, 38)",
    cursor: "pointer",
  };

  return (
    <HeartDiv style={HeartWrapStyles}>
      {isFilled ? (
        <HeartFill
          size={size ? size : "28px"}
          style={styles}
          style={defaultStyles}
          onClick={clickHeart}
        />
      ) : (
        <Heart
          size={size ? size : "28px"}
          style={styles}
          style={defaultStyles}
          onClick={clickHeart}
        />
      )}
    </HeartDiv>
  );
}

const HeartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const FilledHeart = styled(HeartFill)``;

// const unFilledHeart = styled(Heart)`
//   color: ${props=> props.}
// `;
