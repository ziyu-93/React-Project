import fetch from "isomorphic-fetch";
import React, { Component } from "react";

export default class Fetch extends Component {
  state = {
    data: ''
  }
  componentWillMount() {
    if (fetch in window) {
      console.log("yes");
    } else {
      console.log("no");
    }
    fetch("./../data.json").then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log("errpr", e))
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
