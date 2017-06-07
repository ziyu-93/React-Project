import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js"


//create ForgetPs
export default class ForgetPs extends Component {
  render() {
    return (
      <section id="sign_up" className="h bg">
        <SubHeader text={"找回密码"}/>
        <Content haveTop={false} haveBottom={false}>
          <SignUpContent/>
        </Content>
      </section>
    )
  }
}

//create SignUpContent
class SignUpContent extends Component {
  render() {
    return (
      <div className="banner-top">
          <div className="main-number">
              <label>
                <img src="./../img/sign_up_number.png" alt=""/>
                <input type="text" placeholder="请输入手机号" className="number" maxLength="11"/>
                <img className="true" src="./../img/sign_up_corrent.png" alt=""/>
              </label>
          </div>
          <div className="main-number code-wrap">
              <label>
                <img src="./../img/sign_up_yanzheng.png" alt=""/>
                <input type="text" placeholder="请输入验证码" className="code"/>
                <img className="true" src="./../img/sign_up_corrent.png" alt=""/>
              </label>
              <span className="get-code">获取验证码</span>
          </div>
          <div className="main-sign-up">
              <a href="/user/ChangePs">下一步</a>
          </div>
      </div>
    )
  }
}
