import React, { Component } from 'react';
import Counter from './Counter';
class CardProduct extends Component {


    render() {
        return (
            <div className="card">
                <div className="img-thumb-product">
                    <img src="" alt="" />
                </div>
                <p className="product-title">Daging Ayam Crispy</p>
                <p className="product-price">Rp. 43.000</p>
                {/* <Counter onCounterChange={(value) => this.props.onCounterChange(value)} /> */}
                <Counter />

            </div>
        )
    }
}

export default CardProduct;