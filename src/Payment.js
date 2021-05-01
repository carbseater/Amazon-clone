import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link,useHistory } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import axios from './axios';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setprocessing] = useState("");
    const [succeeding, setsucceeding] = useState(false)
    const [error, seterror] = useState(null);
    const [disabled, setdisabled] = useState(true);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret
        // which allow us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: "POST",
                url: `/payments/create?total=${getBasketTotal(basket)}`
            });
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
        return () => {
            //
        }
    }, [basket]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setprocessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setsucceeding(true);
            seterror(null);
            setprocessing(false);

            history.replace('/orders');
        })
    }

    const handleChange = (event) => {
        // Listen for changes in the CardElement component
        // and display any errors as the customer types
        setdisabled(event.empty);
        seterror(event.error ? event.error.message : "")
    }
    
    
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout(
                    <Link to='/checkout'>{basket.length} items</Link>
                    )
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>Malakpur, Greater Noida</p>
                        <p>Uttar Pradesh, 201301</p>
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => {
                           return <CheckoutProduct
                                id= {item.id}
                                title= {item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                           />
                       })}
                    </div>
                </div>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onClick={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeding}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>

                            {/* //for error// */}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
