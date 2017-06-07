import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js"


//create ChangePs
export default class ChangePs extends Component {
  render() {
    return (
      <section id="sign_up" className="h bg">
        <SubHeader text={"找回密码"}/>
        <Content haveTop={false} haveBottom={false}>
          <ChangePsContent/>
        </Content>
      </section>
    )
  }
}

//create ChangePsContent
class ChangePsContent extends Component {
  render() {
    return (
      <div className="banner-top">
          <div className="main-number">
              <label>
              <img src="./../img/sign_up_pw.png" alt=""/>
              <input type="password" placeholder="新密码" className="password"/>
              <img className="true" src="./../img/sign_up_corrent.png" alt="" />
            </label>
          </div>
          <div className="main-number">
              <label>
          <img src="./../img/sign_up_pw.png" alt=""/>
          <input type="password" placeholder="确认密码" className="makeSure"/>
          <img className="true" src="./../img/sign_up_corrent.png" alt=""/>
        </label>
          </div>
          <div className="main-sign-up">
              <a href="/user">确认</a>
          </div>
      </div>
    )
  }
}
