import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_news.css";
//create MineMessage
export default class MineMessage extends Component {
  render() {
    return (
      <section id="message" className="bg">
        <SubHeader text={"消息"}/>
        <Content>
          <MineMessageContent/>
        </Content>
      </section>
    )
  }
}


//create MineMessageContent
class MineMessageContent extends Component {
  render() {
    return (
      <div className="banner">
          <div className="banner-systemInfo">
              <div className="banner-top title">
                  <img className="icon" src="./../img/mine_system.png" alt=""/>
                  <span><font><font>系统消息</font></font></span>
                  <span className="num" style={{
        width: "23px",
        display: "none"
      }}><font><font>0</font></font></span>
                  <img className="more" src="./../img/yule_jiantou.png" alt=""/>
              </div>
              <div className="pull"><img src="./../img/mine_pullDown.png" alt=""/></div>
          </div>
          <div className="banner-ReplyMessage">
              <div className="banner-bottom title">
                  <img className="icon" src="./../img/mine_reply.png" alt=""/>
                  <span><font><font>回复消息</font></font></span>
                  <span className="num" style={{
        width: "39px",
        display: "inline"
      }}><font><font>20</font></font></span>
                  <img className="more" src="./../img/yule_jiantou.png" alt=""/>
              </div>
              <div className="pull"><img src="./../img/mine_pullDown.png" alt=""/></div>
          </div>
      </div>
    )
  }
}
