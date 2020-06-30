import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import './Home.css'
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';

// Menyalakan json server
//https://github.com/typicode/json-server
// json-server --watch db.json 
// json-server --watch db.json --port 3004

class Home extends Component {
    state = {
        showComponent: true
    }
    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 3000)

    }
    render() {
        return (
            <Router>
                {/* <div>
                <Product />
                <YouTubeComp name="afsori" time="8.00" desc="lorem ipsum dolor amet" />
                <YouTubeComp name="angka" time="7.00" desc="lorem ipsum dolor amit" />
                <YouTubeComp name="riki" time="6.00" desc="lorem ipsum dolor amat" />
                <YouTubeComp />

                <p>Life Cicle Component</p>
                <hr />
                {
                    this.state.showComponent ? <LifeCycleComp /> : null
                }
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </div> */}
                <div className="navigation">
                    <Link to="/">Blog Post</Link>
                    <Link to="/Product">Product</Link>
                    <Link to="/lifecycle">Life Cycle</Link>
                    <Link to="/YouTubeComp">YouTubeComp</Link>


                </div>
                <Route path="/" exact component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
                <Route path="/YouTubeComp" component={YouTubeCompPage} />
            </Router>
        )
    }
}

export default Home;