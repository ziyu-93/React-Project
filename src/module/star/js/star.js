import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/star.css";
import fetch from "isomorphic-fetch";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class Star extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="star">
                <Logo/>
                <Header current={2}></Header>
                <Content haveTop={true} haveBottom={false}>
                    <StarContent/>
                </Content>
            </div>
    )
  }
}
class StarContent extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    fetch("./data/star.json").then(res => res.json())
      .then(data => this.setState({
        data: data.star
      }))
      .catch(e => console.log("Fetch error", e))
  }
  render() {
    return (
      <div className="banner">
        <div className="banner-top">
            <img src="./img/star_logo.png" alt=""/>
            <Link to={"/star/star_search"}><img src="./img/star_search.png" alt=""/></Link>
        </div>
        <div className="banner-bottom">
            <ul className="bottom-list">
              {
      this.state.data.map((e, i) => {
        return (
          <li className="item" key={i}>
            <Link to={"/star/" + e.starId + ""} >
              <img src={e.img} alt=""/>
            <p>
                <span>{e.name}</span>
            </p>
            </Link>
          </li>
        )
      })
      }
              </ul>
          </div>
      </div>
    )
  }
}
