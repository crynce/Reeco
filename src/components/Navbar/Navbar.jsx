import React from "react";
import styled from "styled-components";
import CartIcon from "../../assets/icons8-cart-50.png";
import DownArrow from "../../assets/icons8-down-arrow-50.png";
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
`;

const NavLink = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
`;
const LeftLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;
const RightLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

// Navbar component
const Navbar = () => {
  return (
    <NavLinks>
      <PaddingUni>
        <LeftLinks>
          <NavLink>
            <BrandName>Reeco</BrandName>
          </NavLink>
          <NavLink>Store</NavLink>
          <NavLink>Orders</NavLink>
          <NavLink>Analytics</NavLink>
        </LeftLinks>
        <RightLinks>
          <NavLink>
            <img src={CartIcon} height="25px" width="25px" />
          </NavLink>
          <NavLink>
            <span>Hello, James</span>
            <img src={DownArrow} color="white" height="20px" width="20px" />
          </NavLink>
        </RightLinks>
      </PaddingUni>
    </NavLinks>
  );
};

export default Navbar;
