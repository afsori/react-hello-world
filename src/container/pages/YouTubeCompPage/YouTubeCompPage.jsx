import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import YouTubeComp from '../../../component/YoutubeComp/YouTubeComp';
import './YoutubeCompPage.css'

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="display-flex">
                    <YouTubeComp name="afsori" time="8.00" desc="lorem ipsum dolor amet" />
                    <YouTubeComp name="angka" time="7.00" desc="lorem ipsum dolor amit" />
                    <YouTubeComp name="riki" time="6.00" desc="lorem ipsum dolor amat" />
                    <YouTubeComp />

                </div>
                <div className="total-order">
                    <hr />
                    <p>Total Order : {this.props.order}</p>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(YoutubeCompPage);