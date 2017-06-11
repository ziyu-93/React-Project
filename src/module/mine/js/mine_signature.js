import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_signature.css";
//create MineSignature
export default class MineSignature extends Component {
  render() {
    return (
      <section id="signation" className="bg">
        <SubHeader text={"我的签名"} right={true}/>
        <Content>
          <MineSignatureContent/>
        </Content>
      </section>
    )
  }
}


//create MineSignatureContent
class MineSignatureContent extends Component {
  state = {
    signature: ""
  }
  changeSignature(e) {
    this.setState({
      signature: e.target.value
    })
  }
  render() {
    //console.log(this.state.signature);
    return (
      <div className="banner">
          <div>
              <input onChange={(e) => this.changeSignature(e)} className="signature" type="text" placeholder="请书写个人签名"/>
          </div>
          <p><font><font>彰显个性，展现自我</font></font></p>
      </div>
    )
  }
}
