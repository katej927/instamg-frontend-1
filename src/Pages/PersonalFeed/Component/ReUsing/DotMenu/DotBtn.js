import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";

export default function DotBtn(props) {
  const { size, onClick, dotBtnDivStyles } = props;

  return (
    <DotBtnWrapper onClick={onClick} style={dotBtnDivStyles}>
      <DotsHorizontalRounded size={size ? size : "20px"} />
    </DotBtnWrapper>
  );
}

const DotBtnWrapper = styled.div`
  cursor: pointer;
`;
