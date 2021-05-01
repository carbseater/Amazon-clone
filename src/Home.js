import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Fashion/EVENT/MFS_Aug/MFS_PC/Sep_2020/1500-600-eng._CB404717977_.jpg"
                    alt="" />
            </div>
            <div className="home__row">
                <Product
                    key={1213}
                    id="8328973"
                    title="Nestlé CERELAC Baby Cereal with Milk, Wheat Apple – From 6 Months, 300g BIB Pack"
                    image="https://m.media-amazon.com/images/I/81+jQkH+zgL._AC_UL320_.jpg"
                    price={290}
                    rating={3}/>
                <Product
                    key={12133}
                    id="8328977"
                    title="Cadbury Chocobakes Choc Layered Cakes, 4 x 126 g"
                    image="https://m.media-amazon.com/images/I/71wx4MDnSmL._AC_UL320_.jpg"
                    price={230}
                    rating={4}/>
                <Product
                    key={121123}
                    id="8328763"
                    title="Cadbury Cocoa Powder Mix, 150g"
                    image="https://m.media-amazon.com/images/I/61bYwFCgvWL._AC_UL320_.jpg"
                    price={210}
                    rating={4}/>
            </div>
            <div className="home__row">
                <Product
                    key={1211233}
                    id="8324573"
                    title="JBL Tune 700BT Over-Ear Wireless Headphones with 27-Hour Playtime, Multi-Point Connection & Quick Charging (Black) (JBLT700BTBLK)"
                    image="https://m.media-amazon.com/images/I/71wslpNyYpL._AC_UY218_.jpg"
                    price={4249}
                    rating={5}
                />
                <Product
                    key={121309}
                    id="8323973"
                    title="Apple iPhone XR (128GB) - Black"
                    image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY218_.jpg"
                    price={47000}
                    rating={5}
                />
            </div>
            
            <div className="home__row">
                <Product
                    key={10213}
                    id="8323673"
                    title="Samsung 123 cm (49 Inches) 4K Ultra HD Smart QLED TV QA49Q60RAKXXL (Black) (2019 Model)"
                    image="https://m.media-amazon.com/images/I/51R+vo8sazL._AC_UY218_.jpg"
                    price={69000}
                    rating={4}/>
            </div>
        </div>
    )
}

export default Home
