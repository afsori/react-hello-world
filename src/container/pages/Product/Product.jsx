import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CardProduct from './CardProduct/CardProduct'
import './Product.css'
class Product extends Component {
    // state = {
    //     order: 4 //bisa dijadikan untuk , misal menjumlahkan hasil dari update state di child berupa jumlah harga
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
                <p>Counter</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="trolli">
                        <img src="" alt="" />
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                {/* <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} /> */}
                <CardProduct />

            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);