import React from "react";
import { PaddingUni } from "../Navbar/Navbar";
import styled from "styled-components";

const summaryData = [
  {
    title: "Supplier",
    desc: "East Coast fruits & vegetables",
  },
  {
    title: "Shipping date",
    desc: "Thu Feb 10",
  },
  {
    title: "Total",
    desc: "$ 15,028.3",
  },
  {
    title: "category",
    desc: "Nil",
  },
  {
    title: "Department",
    desc: "East Coast fruits & vegetables",
  },
  {
    title: "Status",
    desc: "Awaiting",
  },
];

export const Card = styled(PaddingUni)`
  background-color: #fff;
  width: auto;
  margin: 1rem 3rem;
  border: 1px solid #eee;
`;
const OrderSummaryItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`;
const OrderSummaryItem = styled.div`
  margin: 0 auto;
  flex: 1;
  text-align: left;
  &:not(:last-child) {
    border-right: 2px solid #d6cccc;
  }
`;
const ItemTitle = styled.div`
  color: #9b9797;
  font-size: 16px;
  margin-bottom: 10px;
`;
const ItemDesc = styled.div`
  color: black;
  font-size: 18px;
  font-style: bold;
`;

export default function OrderSummary() {
  return (
    <>
      <Card>
        <OrderSummaryItems>
          {summaryData.map((curr) => {
            return (
              <OrderSummaryItem>
                <ItemTitle>{curr.title}</ItemTitle>
                <ItemDesc>{curr.desc}</ItemDesc>
              </OrderSummaryItem>
            );
          })}
        </OrderSummaryItems>
      </Card>
    </>
  );
}
