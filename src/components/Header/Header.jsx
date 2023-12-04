import React from "react";
import styled from "styled-components";

//styled components
const BgWall = styled.div`
  height: 70px;
  background-color: #fff;
  box-shadow: 0 3px 0 0 rgba(0, 0, 0, 0.1);
  padding: 1rem 4rem;
  color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const StepDivCont = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display:none;
  }
`;

const StepDiv = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const HeaderBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const OrderHeading = styled.h2`
  color: black;
`;
export const PrimaryButton = styled.button`
  background: ${(props) => (props.$primary ? "#1e633f" : "white")};
  color: ${(props) => (props.$primary ? "white" : "#1e633f")};

  font-size: 1em;
  margin: 1em;
  // padding: 0.25em 1em;
  border: 2px solid #1e633f;
  border-radius: 50px;
  cursor: pointer;
`;

export default function Header() {
  return (
    <BgWall>
      <StepDivCont>
        <StepDiv>order</StepDiv>
        <StepDiv>></StepDiv>
        <StepDiv>orders12131</StepDiv>
      </StepDivCont>
      <HeaderBase>
        <OrderHeading>Order121212121</OrderHeading>
        <div>
          <PrimaryButton>back</PrimaryButton>
          <PrimaryButton $primary>Approve order</PrimaryButton>
        </div>
      </HeaderBase>
    </BgWall>
  );
}
