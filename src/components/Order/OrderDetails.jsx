import React from "react";
import styled from "styled-components";
import { Card } from "./OrderSummary";
import searchIcon from "../../assets/searchIcon.png";
import printerIcon from "../../assets/printer.png";
import { PrimaryButton } from "../Header/Header";
import TableComp from "./Table/TableComp";
// import SearchIcon from "@mui/icons-material/Search";
const OrderDetCard = styled(Card)`
  justify-content: space-between;
  margin-bottom: 0;
`;
const TableDetCard = styled(Card)`
  margin-top: 0;
  justify-content: space-between;
`;

const CtaCont = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  color: black;
`;
const SearchCont = styled.div`
  display: flex;
  align-items: center;
  color: black;
  border: 1px solid #d6cccc;
  border-radius: 20px;
  height: 30px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1px 8px;
`;
const SearchBar = styled.input`
  border: none;
  outline: none;
  width: 80%;
`;

export default function OrderDetails() {
  return (
    <>
      <OrderDetCard>
        <CtaCont>
          <SearchCont>
            <SearchBar type="text" placeholder="search..." />
            <img
              src={searchIcon}
              width="20px"
              height="20px"
              style={{ cursor: "pointer", color: "#d6cccc" }}
            />
          </SearchCont>
          <div
            style={{ display: "flex", alignItems: "center", color: "#1e633f" }}
          >
            <PrimaryButton>Add Item</PrimaryButton>
            <img
              src={printerIcon}
              width="20px"
              height="20px"
              style={{ cursor: "pointer", color: "#d6cccc" }}
            />
          </div>
        </CtaCont>
      </OrderDetCard>
      <TableDetCard>
        <TableComp />
      </TableDetCard>
    </>
  );
}
