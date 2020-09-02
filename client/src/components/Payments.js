import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../actions";

class Payments extends Component {
  render() {
    // 5$ amount
    return (
      <ReactStripeCheckout
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        // token is a callback called with the token got back from Stripe
        token={(token) => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">Add credits</button>
      </ReactStripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
