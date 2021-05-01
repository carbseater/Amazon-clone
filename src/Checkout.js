import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/amazoncash/Q3/AC_BB_EN_1242x200_EN_20200908.jpg"
                    alt=""
                />
                 <div>
                    <h2 className="checkout__title">
                        Your shopping Basket
                    </h2>

                    {basket.map(item => (
                        <CheckoutProduct
                            id= {item.id}
                            title= {item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
                
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
           
        </div>
    )
}

export default Checkout
