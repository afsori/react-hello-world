import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LifeCycleComp.css';
class LifeCycleComp extends Component {
    // Proses Mounting => pemasangan component untuk di render
    // pertama constructor
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');

    }

    // step kedua = getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStaticFromProps');
        return true

    }

    // step ke empat 
    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 3000)
    }


    // =====================
    // Proses Updating =>update value jika ada yg harus diupdate
    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate');
        // console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('this state', this.state);
        if (nextState.count >= 4) {
            return false
        }
        console.groupEnd();
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');

    }

    // Proses UnMounting => proses pencabutan component dari halaman browser setlah di update
    componentWillUnmount() {
        console.log('componentWillUnmount');

    }

    // contoh shouldComponentUpdate
    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // step ke tiga => render
    render() {
        console.log('render');
        return (
            <div>
                <p>Halaman lifecycle</p>
                <hr />
                <button onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />
                <p>Total Order: {this.props.order}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(LifeCycleComp);