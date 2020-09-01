import React, { Component } from "react";
import axios from "../../Axios-orders";
import OrderCard from "../../Components/OrderCard/OrderCard";
import Spinner from "../../Components/UI/Spinner";
import { connect } from "react-redux";
import { fetchOrders } from "../../store/actions/actions";

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    // let newOrders = [];
    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     let data = { ...res.data };
    //     for (let key in data) {
    //       newOrders.push({
    //         ...data[key],
    //         id: key,
    //       });
    //     }
    //     this.setState({
    //       loading: false,
    //       orders: newOrders,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //     });
    //   });
    this.props.fetchOrders().then(
      this.setState({
        loading: false,
      })
    );
  }

  render() {
    let { loading } = this.state;
    let { orders } = this.props;
    let cards = null;
    loading
      ? (cards = <Spinner />)
      : (cards = orders
          .filter((v) => v.customer.uid === this.props.user.uid)
          .map((e) => <OrderCard key={e.id} {...e} />));

    return <div style={{ width: "80%", margin: "0 auto" }}>{cards}</div>;
  }
}

const mapDispatchToPrps = (dispatch) => {
  return {
    fetchOrders: () => dispatch(fetchOrders()),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    orders: state.orders,
  };
};

export default connect(mapStateToProps, mapDispatchToPrps)(Orders);
