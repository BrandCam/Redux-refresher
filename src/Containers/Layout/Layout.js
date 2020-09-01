import React from "react";
import styled from "styled-components";
import NavBar from "../../Components/NavBar/NavBar";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import SideBar from "../../Components/NavBar/SideBar/SideBar";
const PageLayout = styled.div`
  box-sizing: border-box;
  height: 100vh;
  main {
    padding-top: 80px;
  }
`;
class Layout extends React.Component {
  state = {
    active: false,
  };

  toggelHandeler = () => {
    this.setState({
      active: !this.state.active,
    });
  };
  render() {
    return (
      <PageLayout>
        <NavBar toggel={this.toggelHandeler} sidebar={this.state.active} />
        <SideBar
          className={this.state.active ? "" : "deActive"}
          toggel={this.toggelHandeler}
        />
        <Backdrop
          onClick={this.toggelHandeler}
          className={this.state.active ? "" : "hide"}
        />
        <main>{this.props.children}</main>
      </PageLayout>
    );
  }
}

export default Layout;
