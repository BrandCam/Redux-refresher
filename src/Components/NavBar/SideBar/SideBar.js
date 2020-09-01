import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const SlideNav = styled(NavLink)`
  color: black;
  margin: 0;
  border-bottom: 1px solid black;
  padding: 15px 0;
  text-align: center;

  &:hover {
    color: #5c9210;
    background-color: black;
  }
  &.selected {
    color: #5c9210;
  }
`;
const SidebarWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: all 0.5s ease-out;
  position: fixed;
  left: 0%;
  top: 0%;
  width: 80vw;
  height: 100vh;
  z-index: 200;
  background-color: white;
  h1 {
    padding: 0 0 15px 0;
    border-bottom: 1px solid black;
    text-align: center;
    margin-bottom: 0px;
  }
  &.deActive {
    left: -800%;
  }
`;

const SideBar = (props) => {
  return (
    <>
      <SidebarWrap className={props.className}>
        <h1>Menu</h1>

        <SlideNav
          onClick={props.toggel}
          activeClassName="selected"
          to="/custom"
        >
          Custom Burger
        </SlideNav>
        <SlideNav
          onClick={props.toggel}
          activeClassName="selected"
          to="/orders"
        >
          Orders
        </SlideNav>
        <SlideNav
          onClick={props.toggel}
          activeClassName="selected"
          exact
          to="/"
        >
          {props.user ? "Sign Out" : "Log-In"}
        </SlideNav>
      </SidebarWrap>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(SideBar);
