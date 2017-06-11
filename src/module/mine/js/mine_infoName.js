import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_changeName.css";
//create MineChangeName
export default class MineChangeName extends Component {
  render() {
    return (
      <section id="name" className="bg">
        <SubHeader text={"我的昵称"} right={true}/>
        <Content>
          <MineChangeNameContent/>
        </Content>
      </section>
    )
  }
}


//create MineChangeNameContent
class MineChangeNameContent extends Component {
  state = {
    name: ""
  }
  changeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  render() {
    //console.log(this.state.name);
    return (
      <div className="banner">
          <div>
              <input onChange={(e) => this.changeName(e)} className="changeName" type="text" placeholder="请输入昵称" maxLength="11"/>
          </div>
          <p><font>好名字可以让朋友更快记住你哦！</font></p>
      </div>
    )
  }
}
