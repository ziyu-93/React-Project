import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js"
import "./../css/sign_up.css";

//create SignUp
export default class SignUp extends Component {
  render() {
    return (
      <section id="sign_up" className="h bg">
        <SubHeader text={"注册"}/>
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
      <div className="banner">
          <div className="banner-top">
              <div className="main-number">
                  <label>
                    <img src="./../img/sign_up_number.png" alt="" / >
                    <input className="phone_number" type="text" placeholder="请输入手机号"  maxLength="11"/>
                    <img className="true" src="./../img/sign_up_corrent.png" alt="" / >
                  </label>
              </div>
              <div className="main-number">
                  <label>
                <img src="./../img/sign_up_yanzheng.png" alt="" / >
                <input className="code_number" type="text" placeholder="请输入验证码"/>
                <img className="true" src="./../img/sign_up_corrent.png" alt="" / >
              </label>
                  <span className="get-code">获取验证码</span>
              </div>
              <div className="main-number">
                  <label>
                <img src="./../img/sign_up_pw.png" alt="" / >
                <input className="pw_number" type="password" placeholder="设置密码"/>
                <img className="true" src="./../img/sign_up_corrent.png" alt="" / >
              </label>
              </div>
              <div className="main-number">
                  <label>
                <img src="./../img/sign_up_pw.png" alt="" / >
                <input className="pw_sure" type="password" placeholder="确认密码"/>
                <img className="true" src="./../img/sign_up_corrent.png" alt="" / >
              </label>
              </div>
              <div className="main-sign-up">
                  <a>立即注册</a>
              </div>
          </div>
          <div className="banner-bottome">
              <div className="bottom-sign-in">
                  <span className="no-number">已有账号？</span><a href="/user"><span className="sign-in">立即登录</span></a>
              </div>
          </div>
      </div>
    )
  }
}
