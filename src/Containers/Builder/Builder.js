import React from "react";
import Burger from "../../Components/Burger/Burger";
import { connect } from "react-redux";
import BuilderControls from "../../Components/BuilderControl/BuilderControls";
import Model from "../../Components/UI/Modal/Modal";
import Backdrop from "../../Components/UI/Backdrop/Backdrop";
import OrderSummary from "../../Components/OrderSummary/OrderSummary";
import styled from "styled-components";
import Spinner from "../../Components/UI/Spinner";
import {
  addIngredient,
  removeIngredient,
  fetchIngredients,
} from "../../store/actions/actions";

const BurgerPreview = styled(Burger)`
  width: 50%;
  max-width: 800px;
  height: 700px;
  margin: auto;
  overflow: auto;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
  @media (max-width: 1000px) {
    height: 550px;
  }
  @media (max-width: 650px) {
    height: 400px;
    width: 70%;
  }
  @media (max-width: 500px) {
    height: 350px;
  }
`;

class BurgerBuilder extends React.Component {
  state = {
    showModal: false,
    isLoaded: false,
    purchasable: false,
  };

  //lifecyles

  componentDidMount() {
    // axios.get("/ingredients.json").then((res) => {
    //   this.setState({
    //     ingredients: res.data,
    //     isLoaded: true,
    //   });
    // });
    this.props.fetchIng().then(this.setState({ isLoaded: true }));
    if (this.props.selectedIngredients.length > 0) {
      this.setState({
        purchasable: true,
      });
    }
  }
  componentDidUpdate() {
    if (
      this.props.selectedIngredients.length === 0 &&
      this.state.purchasable !== false
    ) {
      this.setState({
        purchasable: false,
      });
    }
  }

  //helpers
  // totalSet = (arr) => {
  //   if (arr.length !== 0 && arr !== undefined) {
  //     return arr.map((e) => e.price).reduce((acc, c) => acc + c);
  //   }
  //   return 0;
  // };

  //handlers
  purchaseContinueHandler = () => {
    const querryParams = this.props.selectedIngredients.map((e) => {
      return `type=${encodeURIComponent(e.type)}`;
    });
    const querryString = querryParams.join("&");

    this.props.history.push({
      pathname: "/checkout",
      search: "?" + querryString,
    });
    // const order = {
    //   ingredients: this.state.selectedIngredients,
    //   price: this.state.total,
    //   customer: {
    //     name: "Brandon Campbell",
    //     address: {
    //       street: "Test str",
    //       zipCode: "67850",
    //       country: "USA",
    //     },
    //     email: "brand.man.doo@gmail.com",
    //   },
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  addToppingHandler = (ing) => {
    this.props.addTopping(ing);
    this.setState({
      purchasable: true,
    });
  };

  removeToppingHandler = (ing) => {
    this.props.removeTopping(ing);
  };

  toggleModelHandler = () => {
    let modelShowing = !this.state.showModal;
    this.setState({
      showModal: modelShowing,
    });
  };
  // setToppingTypeHanddler = (type) => {
  //   let oldtype = this.state.toppingType;
  //   if (type !== oldtype) {
  //     this.setState({
  //       toppingType: type,
  //     });
  //   }
  // };

  //page

  render() {
    const { isLoaded, showModal, toppingType } = this.state;
    const { selectedIngredients, total, ingredients } = this.props;
    if (!isLoaded) {
      return <Spinner />;
    } else {
      return (
        <>
          <BurgerPreview ingredients={selectedIngredients} />
          <Backdrop
            onClick={this.toggleModelHandler}
            className={showModal ? "" : "hide"}
          />
          <Model className={showModal ? "" : "hide"}>
            <OrderSummary
              continue={this.purchaseContinueHandler}
              toggel={this.toggleModelHandler}
              total={total}
              ingredients={selectedIngredients}
            />
          </Model>
          <BuilderControls
            purchasable={this.state.purchasable}
            total={total}
            toggelModel={this.toggleModelHandler}
            toppingType={toppingType}
            setTopping={this.setToppingTypeHanddler}
            remove={this.removeToppingHandler}
            addTopping={this.addToppingHandler}
            ingredients={ingredients}
          />
        </>
      );
    }
  }
}

const mapDispatchToPrps = (dispatch) => {
  return {
    addTopping: (selected) => dispatch(addIngredient(selected)),
    removeTopping: (selected) => dispatch(removeIngredient(selected)),
    fetchIng: () => dispatch(fetchIngredients()),
  };
};

const mapStateToProps = (state) => {
  return {
    selectedIngredients: state.selectedIngredients,
    total: state.total,
    ingredients: state.ingredients,
  };
};

export default connect(mapStateToProps, mapDispatchToPrps)(BurgerBuilder);
