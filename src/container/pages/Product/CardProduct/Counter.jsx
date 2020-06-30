import React, { Component } from 'react';
// import connect untuk koneksi redux yg merupan HOC(higher order component) utk dipanggil di export default component
import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';
class Counter extends Component {
    // state = {
    //     order: 4
    // }

    // untuk mengirim nilai ke parent/product
    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order)
    //         })
    //     }
    // }
    render() {
        console.log(this.props);

        return (
            <div className="counter">
                <button className="minus" onClick={this.props.handleMinus}>-</button>
                <input className="input-name" type="text" value={this.props.order} />  {/* yg tadinya state dirubah jadi props, karena sudah dapat nilai dari global state. jadi state di component ini tidak berfunsi lagi*/}
                <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

// stelah connect kemudian buat variabel utk memanggil state global. mapStateToProps=> digunakan utk memangggil state global kemudian dirubah menjadi props. parameter berupa state, yg mrpakan state yg dikirim dari route global.  kemudian return object yg merupakan state , order merupakan state didalam component dan totalOrder => global state yg ada di store.

const mapStateToProps = (state) => {
    return {
        // parameter di rename jadi order, untuk keperluan props dicomponent ini. dan order inilah utk mengganti nilai / value dari counter
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
        handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER })
    }
}

// HOC connect dipanggil disini, digunakan utk memanggil store global, isi parameternya store/state global dan fungsi reducer atau dispatch.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);