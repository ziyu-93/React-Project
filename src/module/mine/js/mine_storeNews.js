import { SubHeader, Content, MineStoreNav } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_store.css";
import { Link } from "react-router-dom";
import fetch from "isomorphic-fetch";
//create MineStore
export default class MineStoreNews extends Component {
  render() {
    return (
      <section id="store" className="bg">
        <SubHeader text={"我的收藏"} right={false}/>
        <Content>
          <MineStoreNav/>
          <div className="banner-bottom-content banner">
            <MineStoreContentNews/>
          </div>
        </Content>
      </section>
    )
  }
}

//create MineStoreContent
class MineStoreContentNews extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    fetch("./../../data/new.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data.news
        });
        data: data
        console.log(data);
      })
      .catch(e => console.log("Fetch error", e))
  }
  render() {
    const {data} = this.state;
    return (
      <div className="content-info">
          <ul>
            {
      data.map((e, i) => {
        return (
          <Link to={`/new/${e.newsId}`} key={i}><li className="content-info-item" >
              <h5 className="item-title">{e.time}</h5>
              <div className="item-content">
                  <div className="content-left">
                      <img src={e.img} alt="" />
                  </div>
                  <div className="content-right">
                      <h4 className="chaochu_2">{e.title}</h4>
                      <p>{e.article}</p>
                  </div>
              </div>
          </li></Link>
        )
      })
      }
          </ul>
      </div>
    )
  }
}
