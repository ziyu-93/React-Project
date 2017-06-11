import { SubHeader, Content, MineStoreNav } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_store.css";
import { Link } from "react-router-dom";
//create MineStore
export default class MineStorePic extends Component {
  render() {
    return (
      <section id="store" className="bg">
        <SubHeader text={"我的收藏"} right={false}/>
        <Content>
          <MineStoreNav/>
          <div className="banner-bottom-content banner">
            <MineStoreContentPic/>
          </div>
        </Content>
      </section>
    )
  }
}

//create MineStoreContent
class MineStoreContentPic extends Component {
  render() {
    return (
      <div className="content-pic">
          <ul className="content-pic-list">
              <li className="content-pic-item">
                  <div className="item-top">
                      <div className="item-info">
                          <div className="logo-wrap">
                              <img className="item-logo" src="./../img/王宝强头像.png" alt="" />
                          </div>
                          <div className="item-right-top">
                              <div className="item-title">
                                  <span className="item-name">一只猫</span>
                              </div>
                              <span className="item-floor">刚刚</span>
                          </div>
                      </div>
                      <div>
                          <div className="item-text-wrap">
                              <p className="item-text">看看我家鹿晗，是不是比以前帅了？</p>
                              <div className="item-wrap">
                                  <div className="item-reply">
                                      <ul className="img-list">
                                          <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan.png" alt="" /></li>
                                          <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt="" /></li>
                                          <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt="" /></li>
                                          <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt="" /></li>
                                      </ul>
                                  </div>
                                  <Link to={"/new/1"}><span className="item-detail">点击查看详情</span></Link>
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
