import React from "react";
import styled, { keyframes } from "styled-components";

//animation keframes
const rotateCenter0Deg = keyframes`  
    from {
      transform: rotate(315deg);
    }
    to {
      transform: rotate(0deg);
    }`;

const rotateTop0Deg = keyframes`
    from {
      left: 5px;
      transform: rotate(45deg);
    }
    to {
      left: 0;
      transform: rotate(0deg);
    }`;

const rotateBottom0Deg = keyframes`
from {
    top: 8px;
    right: 2px;
    transform: rotate(45deg);
  }
  to {
    top: 10px;
    right: 0;
    transform: rotate(0deg);
  }`;

const rotateTop45Deg = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      left: 5px;
      transform: rotate(45deg);
    }`;

const rotateBottom45Deg = keyframes` 
        from {
          transform: rotate(0deg);
        }
        to {
          top: 8px;
          right: 2px;
          transform: rotate(45deg);
        }`;

const rotateCenter360Deg = keyframes` 
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(315deg);
            }`;

//dropdown Css
const HamburgerWrap = styled.div`
  position: relative;

  .hamburger-center {
    content: "";
    height: 4px;
    width: 50px;
    background: #5c9210;
    border-radius: 4px;
    position: relative;
    animation: ${rotateCenter0Deg} 1s both ease-in-out;
  }

  .hamburger-top {
    content: "";
    display: block;
    height: 4px;
    background: #5c9210;
    border-radius: 4px;
    position: absolute;
    top: -10px;
    left: 0;
    width: 25px;
    animation: ${rotateTop0Deg} 1s both ease-in-out;
  }

  .hamburger-bottom {
    content: "";
    display: block;
    height: 4px;
    background: #5c9210;
    border-radius: 4px;
    position: absolute;
    top: 10px;
    right: 0;
    width: 25px;
    animation: ${rotateBottom0Deg} 1s both ease-in-out;
  }

  .hamburger-center.active {
    animation: ${rotateCenter360Deg} 1s both ease-in-out;
    background-color: red;
  }

  .hamburger-top.active {
    animation: ${rotateTop45Deg} 1s both ease-in-out;
    background-color: red;
  }

  .hamburger-bottom.active {
    animation: ${rotateBottom45Deg} 1s both ease-in-out;
    background-color: red;
  }
`;

const hamburger = (props) => {
  return (
    <HamburgerWrap>
      <div className={`hamburger-top ${props.sidebar ? "active" : ""}`} />
      <div className={`hamburger-center ${props.sidebar ? "active" : ""}`} />
      <div className={`hamburger-bottom ${props.sidebar ? "active" : ""} `} />
    </HamburgerWrap>
  );
};

export default hamburger;
