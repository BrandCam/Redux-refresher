import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Layout from "../Containers/Layout/Layout";
import BurgerBuilder from "../Containers/Builder/Builder";
import CheckOut from "../Containers/CheckOut/CheckOut";
import SignIn from "../Containers/Home/Home";
import Orders from "../Containers/Orders/Orders";
import { setUser } from "../store/actions/actions";
import { connect } from "react-redux";
import firebaseApp from "../firbaseSetup";
class App extends Component {
  componentDidMount() {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push("/custom");
      } else {
        console.log("no user");
      }
    });
  }
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/" render={(props) => <SignIn {...props} />} />
            <Route
              path="/custom"
              render={(props) => <BurgerBuilder {...props} />}
            />
            <Route
              path="/checkout"
              render={(props) => <CheckOut {...props} />}
            />
            <Route path="/orders" render={(props) => <Orders {...props} />} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToPrps = (dispatch) => {
  return {
    setUser: (user) => dispatch(setUser(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToPrps)(withRouter(App));
