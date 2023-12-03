import React from "react";
import styled from "styled-components";
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
  padding: 1rem 4rem;
`;

const NavLink = styled.div`
  margin-right: 1rem;
  cursor: pointer;
  color: white;
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
          <NavLink>Hello, user</NavLink>
          <NavLink>Cart Icon</NavLink>
        </RightLinks>
      </PaddingUni>
    </NavLinks>
  );
};

export default Navbar;
