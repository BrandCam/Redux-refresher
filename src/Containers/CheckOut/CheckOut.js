import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import styled from "styled-components";
import CheckOutSummary from "../../Components/CheckOutSummary/CheckoutSummary";
import Button from "../../Components/UI/Button/Button";
import OrderForm from "../../Components/OrderForm/OrderForm";

const CheckOutWrap = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
`;
class Checkout extends Component {
  // Passing props through params

  // state = {
  //   ingredients: [],
  // };
  // componentDidMount() {
  //   const selected = [];
  //   const query = new URLSearchParams(this.props.location.search);
  //   for (let param of query.entries()) {
  //     selected.push({
  //       [param[0]]: param[1],
  //     });
  //   }

  //   this.setState({
  //     ingredients: selected,
  //   });
  // }

  checkOutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkOutContinueHandler = () => {
    this.props.history.replace(
      `${this.props.match.url}/contact-data${this.props.location.search}`
    );
  };
  render() {
    const { total, selectedIngredients } = this.props;
    let summary;
    if (selectedIngredients.length === 0) {
      summary = <Redirect to="/custom" />;
    } else {
      summary = (
        <CheckOutWrap>
          <CheckOutSummary ingredients={selectedIngredients} />
          <Button onClick={this.checkOutContinueHandler} className="success">
            Procede
          </Button>
          <Button onClick={this.checkOutCancelledHandler} className="danger">
            Cancel
          </Button>
          <Route
            path={`${this.props.match.url}/contact-data`}
            render={(props) => {
              return <OrderForm ingredients={selectedIngredients} {...props} />;
            }}
          />
        </CheckOutWrap>
      );
    }
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.selectedIngredients,
    total: state.total,
  };
};

export default connect(mapStateToProps)(Checkout);
