import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Icon } from "./core";
import { Store } from "../store";
import { commonActions } from "../store/actions";
import { FixedContainer, Wrapper } from "../styled/common";
import IMG_LOGO from "../assets/images/expense-manager-white-logo.svg";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  return (
    <StyledHeader>
      <FixedContainer>
        <Wrapper>
          <MenuButton onClick={() => commonActions.toggleMenu(dispatch)}>
            <Icon name="menu" />
          </MenuButton>
          <NavLink to="/" exact>
            <Logo src={IMG_LOGO} alt="Expense Manager" />
          </NavLink>
        </Wrapper>
        <NavLink to="/search">
          <SearchButton>
            <Icon name="search" />
          </SearchButton>
        </NavLink>
      </FixedContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #1fc8db;
  background-image: linear-gradient(141deg, #64c2ac 0%, #a0dd9d 75%);
  padding: 8px 0 120px 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  color: #fff;
  & > ${FixedContainer} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${Wrapper} {
    display: flex;
    align-items: center;
  }
  i {
    color: #fff;
    vertical-align: middle;
  }
`;

const Logo = styled.img`
  display: block;
  max-width: 210px;
  @media (max-width: 360px) {
    max-width: 194px;
  }
`;

const MenuButton = styled.button`
  display: block;
  margin-right: 16px;
  width: 48px;
  background: transparent;
  border-color: transparent;
  padding: 0 12px;
  &:hover {
    border-radius: 24px;
    background: #0a6b8a;
    i {
      color: #fff;
    }
  }
`;

const SearchButton = styled.button`
  display: block;
  margin-left: 16px;
  width: 48px;
  background: transparent;
  border-color: transparent;
  padding: 0 12px;
  &:hover {
    border-radius: 24px;
    background: #0a6b8a;
    i {
      color: #fff;
    }
  }
`;

export default Header;
