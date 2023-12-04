import React from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons8-cart-50.png";
import DownArrow from "../../assets/down-arrow.png";
import NewCart from "../../assets/online-shopping.png";
//new branch
// Styled components for the navbar elements
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PaddingUni = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e633f;
  // color: #fff;
  padding: 1rem 4rem 7px 4rem;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const NavLink = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
`;
const LeftLinks = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4rem;
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightLinks = styled.div`
  flex: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4rem;
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

// Navbar component
const Navbar = () => {
  return (
    <NavLinks>
      <PaddingUni>
        <NavLink style={{ flex: 1 }}>
          <BrandName>Reeco</BrandName>
        </NavLink>
        <LeftLinks>
          <NavLink>Store</NavLink>
          <NavLink>Orders</NavLink>
          <NavLink>Analytics</NavLink>
        </LeftLinks>
        <RightLinks>
          <NavLink>
            <img
              src={NewCart}
              height="25px"
              width="25px"
              style={{ filter: "invert(100%)" }}
            />
          </NavLink>
          <NavLink>
            <span>Hello, James</span>
          </NavLink>
        </RightLinks>
      </PaddingUni>
    </NavLinks>
  );
};

export default Navbar;
