import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class MyApp extends React.Component {
  render() {
    const onSuccess = payment => {
      console.log("The payment was succeeded!", payment);
      this.props.clearCart();
      // TODO: payment succeeded msg with paymentID
      this.props.history.push({
        pathname: "/cart/paymentSucceed",
        state: {
          paid: payment.paid,
          paymentId: payment.paymentID
        }
      });
      // this.props.history.push("/cart/paymentSucceed");
      // console.log("The payment was succeeded! Ref #:", payment.paymentID);
    };

    const onCancel = data => {
      console.log("The payment was cancelled!", data);
    };

    const onError = err => {
      console.log("Error!", err);
    };

    let env = "sandbox"; // For production 'production'
    let currency = "USD"; // set this value from your props or state

    const client = {
      sandbox: process.env.REACT_APP_SANDBOX_APP_ID,
      production: "YOUR-PRODUCTION-APP-ID"
    };
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={this.props.total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
      />
    );
  }
}
