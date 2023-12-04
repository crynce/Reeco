import React from "react";
import styled from "styled-components";
import Avocado from "../../../assets/Avocado.jpg";
import Tick from "../../../assets/tick.png";
import Close from "../../../assets/close.png";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../../../store/statusUpdateSlice";
import { manageOverlay } from "../../../store/overlayModal";
const data = [
  {
    productName: "Product 1",
    brand: "Brand A",
    price: "$20",
    quantity: "2",
    total: "$40",
    status: "Available",
    img: "Avocado",
  },
  {
    productName: "Product 2",
    brand: "Brand B",
    price: "$30",
    quantity: "3",
    total: "$90",
    status: "Out of stock",
  },
  // Add more objects as needed
];

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

const TableHeading = styled.th`
  padding: 10px;
  text-align: center;
`;

const TableRow = styled.tr`
  background-color: white;
`;

const TableData = styled.td`
  padding: 10px;
  &:last-child {
    background-color: #f9f9f9;
  }
  border-bottom: 1px solid #bbbbbb;
`;
const TableDataStatus = styled(TableData)`
  display: flex;
  color: #9b9797;
  height: 54px;
  justify-content: space-around;
  align-items: center;
`;
const StatusUpdate = styled.div`
  background: ${(props) => {
    if (props.$approved) {
      return "#1e633f";
    }
    if (props.$missingurg) {
      return "red";
    }
    if (props.$missing) {
      return "#f66d44";
    }
  }};
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 50px;
  cursor: pointer;
`;

const TableComp = () => {
  const dispatch = useDispatch();
  const initVal = useSelector((state) => state.statusUpdate);
  //handlers
  const statusUpdateHandler = (e, obj, statusVal) => {
    if (statusVal !== "missing") {
      dispatch(
        updateStatus({
          ...obj,
          status: statusVal,
        })
      );
    }
    if (statusVal === "missing") {
      dispatch(manageOverlay({ prod: obj, overlayStatus: true }));
    }
    console.log("dispatched");
  };
  console.log(initVal, "initVal");
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeading> </TableHeading>
          <TableHeading>Product Name</TableHeading>
          <TableHeading>Brand</TableHeading>
          <TableHeading>Price</TableHeading>
          <TableHeading>Quantity</TableHeading>
          <TableHeading>Total</TableHeading>
          <TableHeading>Status</TableHeading>
        </TableRow>
      </TableHead>
      <tbody>
        {initVal.map((row, index) => (
          <TableRow key={index}>
            <TableData>
              <img height="50px" width="50px" src={Avocado} />
            </TableData>
            <TableData>{row.productName}</TableData>
            <TableData>{row.brand}</TableData>
            <TableData>{row.price}</TableData>
            <TableData>{row.quantity}</TableData>
            <TableData>{row.total}</TableData>
            <TableDataStatus>
              <StatusUpdate
                $approved={row.status === "approved"}
                $missing={row.status === "Missing"}
                $missingurg={row.status === "Missing urgently"}
                $edit={row.status === "edit"}
                style={{ flex: "1.5" }}
              >
                {row.status}
              </StatusUpdate>
              <div
                style={{
                  flex: "1",
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <img
                  height="10px"
                  width="10px"
                  color="#9b9797"
                  src={Tick}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => statusUpdateHandler(e, row, "approved")}
                />
                <img
                  height="10px"
                  width="10px"
                  src={Close}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => statusUpdateHandler(e, row, "missing")}
                />
              </div>
              <div
                style={{ cursor: "pointer", flex: "1" }}
                onClick={(e) => statusUpdateHandler(e, row, "edit")}
              >
                Edit
              </div>
              {/* <img src={Tick} height: "30px" width: "30px"/> */}
            </TableDataStatus>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComp;
