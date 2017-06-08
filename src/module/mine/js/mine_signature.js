import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_signature.css";
//create MineSignature
export default class MineSignature extends Component {
  render() {
    return (
      <section id="signation" className="bg">
        <SubHeader text={"我的签名"}/>
        <Content>
          <MineSignatureContent/>
        </Content>
      </section>
    )
  }
}


//create MineSignatureContent
class MineSignatureContent extends Component {
  render() {
    return (
      <div className="banner">
          <div>
              <input className="signature" type="text" placeholder="请书写个人签名"/>
          </div>
          <p><font><font>彰显个性，展现自我</font></font></p>
      </div>
    )
  }
}
