import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_location.css";

//create MineLocation
export default class MineLocation extends Component {
  render() {
    return (
      <section id="location" className="bg">
        <SubHeader text={"我的地址"}/>
        <Content>
          <MineLocationContent/>
        </Content>
      </section>
    )
  }
}

//create MineLocationContent
class MineLocationContent extends Component {
  render() {
    return (
      <div className="banner">
            <ul className="banner-list">
                <li className="list-name">
                    <span><font><font>姓名</font></font></span>
                    <span className="name"><font><font>张三</font></font></span>
                </li>
                <li className="list-phoneNumber">
                    <span><font><font>手机号码</font></font></span>
                    <input type="tel" className="phoneNumber" placeholder="11位手机号码" maxLength="11"/>
                </li>
                <li className="list-location">
                    <span><font><font>地区信息</font></font></span>
                    <img src="./../img/mine_location.png" alt=""/>
                </li>
                <li className="list-signature">
                    <span><font><font>详细地址</font></font></span>
                    <input type="text" placeholder="街道号门牌号"/>
                </li>
            </ul>
        </div>
    )
  }
}
