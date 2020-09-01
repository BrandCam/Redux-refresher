import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Hamburger from "../UI/DropDown";
import NavItem from "../NavBar/NavItem/NavItem";
import Logo from "../UI/Logo";

const NavBarWrap = styled.div`
  z-index: 50;
  position: fixed;
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: space-between;
  background-color: black;
  color: white;
  align-items: center;
  .drop-down {
    padding: 30px;
    @media (min-width: 650px) {
      display: none;
    }
  }
  div.nav-item-wrap {
    display: flex;
    justify-content: space-between;
    padding: 0 15px 0 0px;
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

const navBar = (props) => {
  return (
    <NavBarWrap>
      <div className="drop-down" onClick={() => props.toggel()}>
        <Hamburger toggel={props.toggel} sidebar={props.sidebar} />
      </div>

      <Logo />
      <div className="nav-item-wrap">
        <NavItem activeClassName="selected" to="/custom">
          Custom Burger
        </NavItem>
        <NavItem activeClassName="selected" to="/orders">
          Orders
        </NavItem>
        <NavItem
          style={props.user ? { color: "red" } : {}}
          activeClassName="selected"
          exact
          to="/"
        >
          {props.user ? "Sign Out" : "Log In"}
        </NavItem>
      </div>
    </NavBarWrap>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(navBar);
