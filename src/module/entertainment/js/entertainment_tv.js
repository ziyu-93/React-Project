import React, { Component } from "react";
import { SubHeader, Content, ListLeft, ListRight } from "./../../../public/public.js";
import "./../css/enterCommon.css";
import fetch from "isomorphic-fetch";
//create entertainment_movie
export default class EnterTv extends Component {
  state = {
    ListLeft: ["全部分类", "爱情片", "悬疑片", "古装片", "战争片", "都市片", "家庭片"],
    ListRight: []
  }
  componentWillMount() {
    fetch("./../data/entertainment.json")
      .then(res => res.json())
      .then(data => this.setState({
        ListRight: data.tv
      }))
      .catch(e => console.log("Fetch error", e))
  }
  render() {

    return (
      <section id="enter_tv">
        <SubHeader text={"电视分类"}/>
        <Content haveTop={false} haveBottom={false}>
          <div className="banner">
            <ListLeft ListLeft={this.state.ListLeft} listName={"tv"}/>
            <ListRight ListRight={this.state.ListRight}/>
          </div>
        </Content>
      </section>
    )
  }
}
