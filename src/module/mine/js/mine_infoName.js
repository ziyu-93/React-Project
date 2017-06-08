import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_changeName.css";
//create MineChangeName
export default class MineChangeName extends Component {
  render() {
    return (
      <section id="name" className="bg">
        <SubHeader text={"我的昵称"}/>
        <Content>
          <MineChangeNameContent/>
        </Content>
      </section>
    )
  }
}


//create MineChangeNameContent
class MineChangeNameContent extends Component {
  render() {
    return (
      <div className="banner">
          <div>
              <input className="changeName" type="text" placeholder="请输入昵称" maxLength="11"/>
          </div>
          <p><font>好名字可以让朋友更快记住你哦！</font></p>
      </div>
    )
  }
}
