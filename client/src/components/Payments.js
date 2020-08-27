import React, { Component } from "react";
import ReactStripeCheckout from "react-stripe-checkout";

class Payments extends Component {
  render() {
    // 5$ amount
    return (
      <ReactStripeCheckout
        amount={500}
        // token is a callback called with the token got back from Stripe
        token={(token) => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;
