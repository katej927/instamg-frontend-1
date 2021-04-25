import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DotBtn from "./DotBtn";
import DotModal from "./DotModal";

/**
 *
 * @param {string} loading -clickModalBtn, size(점), divStyle 지정, DotModal.js 를 참고해서 datatype={"1"} 또는 배열에 글자를 넣어 내려 주세요.
 */

export default function BundleOfDotBtnModal(props) {
  const [show, setShow] = useState(false);

  const { datatype, size, dotBtnDivStyles, clickModalBtn } = props;

  return (
    <BundleOfDotBtnModalWrapper show={show}>
      <DotBtn
        onClick={() => setShow(true)}
        size={size}
        dotBtnDivStyles={dotBtnDivStyles}
      />
      <DotModal
        onClose={() => setShow(false)}
        show={show}
        datatype={datatype}
        clickModalBtn={clickModalBtn}
      />
    </BundleOfDotBtnModalWrapper>
  );
}

const BundleOfDotBtnModalWrapper = styled.div`
  display: "inline-table";
`;
