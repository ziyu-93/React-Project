import { SubHeader, Content, MineStoreNav } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_store.css";
import { Link } from "react-router-dom";
//create MineStore
export default class MineStoreVideo extends Component {
  render() {
    return (
      <section id="store" className="bg">
        <SubHeader text={"我的收藏"} right={false}/>
        <Content>
          <MineStoreNav/>
          <div className="banner-bottom-content banner">
            <MineStoreContentVideo/>
          </div>
        </Content>
      </section>
    )
  }
}

//create MineStoreContent
class MineStoreContentVideo extends Component {
  render() {
    return (
      <div className="content-video">
          <ul>
              <li className="content-video-item">
                  <div className="item-top">
                      <div className="item-info">
                          <img className="item-logo" src="./../../img/brokeNew_head.png" alt=""/>
                          <div className="item-right-top">
                              <div className="item-title">
                                  <span className="item-name">一只猫</span>
                                  <span className="item-grade">lv.16</span>
                              </div>
                              <span className="item-floor">刚刚</span>
                          </div>
                      </div>
                      <div>
                          <div className="item-text-wrap">
                              <p className="item-text">看看我家鹿晗，是不是比以前帅了？</p>
                              <div className="item-wrap">
                                  <div className="item-reply">
                                      <video src="" poster="./../../img/brokeNew_loop.png"></video>
                                  </div>
                                  <Link to={"/brokewall/video/1"}><span className="item-detail">点击查看详情</span></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
      </div>
    )
  }
}
