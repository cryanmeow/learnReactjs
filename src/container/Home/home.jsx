// Libraries
import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { render } from "@testing-library/react";

// Pages
import Product from "../pages/Product/Product";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../pages/BlogPost/BlogPost";
import YoutubeComponent from "../pages/YoutubeComponent/YoutubeComp";
import DetailPost from "../pages/DetailPost/DetailsPost";

// CSS
import "./home.css";

class Home extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <div className="navigation">
            <Link to="/">BlogPost</Link>
            <Link to="/product">Product</Link>
            <Link to="/lifecycle">LifeCycleComp</Link>
            <Link to="/youtube">Youtube</Link>
          </div>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:id" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/youtube" component={YoutubeComponent} />
          <Route path="/lifecycle" component={LifeCycleComp} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Home;
