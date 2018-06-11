import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'

const CURRENCY = 'USD'
const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'http://gamesstacked.herokuapp.com/'
    : 'http://localhost:8080/api/stripe'

const STRIPE_PUBLISHABLE = 'pk_test_cMXkonpTxlK3zQrxdXftZM79'

class Checkout extends React.Component {
  onToken = amount => async token => {
    try {
      const {history} = this.props
      await axios.post(PAYMENT_SERVER_URL, {
        source: token.id,
        currency: CURRENCY,
        amount
      })
      history.push('/thankyou')
    } catch (err) {
      throw err
    }
  }

  render() {
    console.log(this.props)
    const {amount} = this.props
    return (
      <StripeCheckout
        name="Games Stacked"
        description="All the games!"
        image="https://thumbs.dreamstime.com/b/game-controller-outline-icon-linear-style-sign-mobile-concept-web-design-joystick-simple-line-vector-symbol-logo-111073281.jpg"
        amount={amount}
        token={this.onToken(amount)}
        close={this.onClose}
        currency={CURRENCY}
        stripeKey={STRIPE_PUBLISHABLE}
        allowRememberMe={false}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    amount: state.cart.totalPrice * 100
  }
}
export default connect(mapStateToProps)(Checkout)
