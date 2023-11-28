import React from 'react';
import styled from 'styled-components';

// Styled components for the navbar elements
const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
`;

const BrandName = styled.div`
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const CartIcon = styled.div`
  margin-right: 1rem;
  cursor: pointer;
`;

const UserName = styled.div`
  font-weight: bold;
`;

// Navbar component
const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandName>Brand</BrandName>
      <NavLinks>
        <NavLink>Store</NavLink>
        <NavLink>Orders</NavLink>
        <NavLink>Analytics</NavLink>
        <CartIcon>Cart Icon</CartIcon>
        <UserName>User Name</UserName>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
