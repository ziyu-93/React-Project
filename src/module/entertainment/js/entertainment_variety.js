import React, { Component } from "react";
import { SubHeader, Content, ListLeft, ListRight } from "./../../../public/public.js";
import "./../css/enterCommon.css";
import fetch from "isomorphic-fetch";
//create entertainment_movie
export default class EnterVariety extends Component {
  state = {
    ListLeft: ["大陆综艺", "港台综艺", "日韩综艺", "欧美综艺"],
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
      <section id="enter_variety">
        <SubHeader text={"综艺分类"}/>
        <Content haveTop={false} haveBottom={false}>
          <div className="banner">
            <ListLeft ListLeft={this.state.ListLeft} listName={"variety"}/>
            <ListRight ListRight={this.state.ListRight}/>
          </div>
        </Content>
      </section>
    )
  }
}
