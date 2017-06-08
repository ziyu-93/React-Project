import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/mine_mailbox.css";

//create MineLocation
export default class MineEmail extends Component {
  render() {
    return (
      <section id="email" className="bg">
        <SubHeader text={"我的邮箱"}/>
        <Content>
          <MineEmailContent/>
        </Content>
      </section>
    )
  }
}

//create MineEmailContent
class MineEmailContent extends Component {
  render() {
    return (
      <div className="banner">
            <div className="banner-top">
                <form>
                    <div className="main-number">

                        <label>
                    <img src="./../img/mine_mailbox_icon.png" alt="" />
                    <input type="text" placeholder="请输入邮箱" className="email"/>
                    <img className="true" src="./../img/sign_up_wrong.png" alt="" />
                  </label>

                    </div>
                    <div className="main-number code-wrap">

                        <label>
                    <img src="./../img/mine_mailbox_code.png" alt="" />
                    <input type="text" placeholder="请输入验证码" className="code"/>
                    <img className="true" src="./../img/sign_up_wrong.png" alt=""/>
                  </label>

                        <span className="get-code"><font><font>获取验证码</font></font></span>
                    </div>
                    <div className="main-sign-up">
                        <a><font><font>绑定邮箱</font></font></a>
                    </div>
                </form>
                <div className="description">
                    <p><font><font>绑定邮箱后，可以用邮箱地址登录粉丝吧。</font></font></p>
                </div>
            </div>
        </div>
    )
  }
}
