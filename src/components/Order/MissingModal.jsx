import React from "react";
import { Card } from "./OrderSummary";
import styled from "styled-components";
import close from "../../assets/close.png";
import { PrimaryButton } from "../Header/Header";
import { manageOverlay } from "../../store/overlayModal";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../store/statusUpdateSlice";

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
  const dispatch = useDispatch();
  const initVal = useSelector((state) => state.overlay);
  console.log(initVal, "shobhit");
  //handlers
  const closeHandler = (e, val) => {
    dispatch(manageOverlay(false));
    if (val === "yes") {
      dispatch(
        updateStatus({
          ...initVal.prod,
          status: "Missing urgently",
        })
      );
    } else {
      dispatch(
        updateStatus({
          ...initVal.prod,
          status: "Missing",
        })
      );
    }
  };
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
              onClick={closeHandler}
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
            <PrimaryButton onClick={(e) => closeHandler(e, "no")}>
              No
            </PrimaryButton>
            <PrimaryButton onClick={(e) => closeHandler(e, "yes")} $primary>
              Yes
            </PrimaryButton>
          </div>
        </Modal>
      </OverlayDiv>
    </>
  );
}
