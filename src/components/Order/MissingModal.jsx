import React from "react";
import { Card } from "./OrderSummary";
import styled from "styled-components";
import close from "../../assets/close.png";
import { PrimaryButton } from "../Header/Header";

const Modal = styled(Card)`
  min-width: 200px;
  height: 150px;
  padding: 1rem;
  position: fixed;
  top: 40%;
  left: 35%;
  display: block;
`;
const OverlayDiv = styled.div`
  position: fixed;
  z-index: 19;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default function MissingModal() {
  return (
    <>
      <OverlayDiv>
        <Modal>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3>Missing product</h3>
            <img
              height="10px"
              width="10px"
              src={close}
              style={{ cursor: "pointer" }}
            />
          </div>

                  <p>Is 'Chicken breast fillets, Boneless......' urgent?</p>
                  <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
                  >
                      
          <PrimaryButton>No</PrimaryButton>
          <PrimaryButton $primary>Yes</PrimaryButton>
          </div>
        </Modal>
      </OverlayDiv>
    </>
  );
}
