import React, { Component } from "react";
import { SubHeader, Content, ListLeft, ListRight } from "./../../../public/public.js";
import "./../css/enterCommon.css";
import fetch from "isomorphic-fetch";
//create entertainment_movie
export default class EnterMovie extends Component {
  state = {
    ListLeft: ["全部分类", "动作片", "爱情片", "恐怖片", "悬疑片", "冒险片"],
    ListRight: []
  }
  componentWillMount() {
    fetch("./../data/entertainment.json")
      .then(res => res.json())
      .then(data => this.setState({
        ListRight: data.movie
      }))
      .catch(e => console.log("Fetch error", e))
  }
  render() {

    return (
      <section id="enter_movie">
        <SubHeader text={"电影分类"}/>
        <Content haveTop={false} haveBottom={false}>
          <div className="banner">
            <ListLeft ListLeft={this.state.ListLeft} listName={"movie"}/>
            <ListRight ListRight={this.state.ListRight}/>
          </div>
        </Content>
      </section>
    )
  }
}
