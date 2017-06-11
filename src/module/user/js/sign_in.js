import React, { Component } from "react";
import "./../css/sign_in.css";
// import Radium, { Style } from 'radium';

//create SignIn
export default class SignIn extends Component {
  render() {
    return (
      <section id="sign_in" className="h">
        <SignInContent/>
      </section>
    )
  }
}

// let styles = {
//   base: {
//     'WebkitInputPlaceholder': {
//       color: "red"
//     }
//   }
// }
{
  /* <Style scopeSelector='.number' rules={{
  '::-webkit-input-placeholder': {
  color: placeholderColor,
  background: "red"
  },
  ':-moz-placeholder': {
  color: placeholderColor
  },
  '::-moz-placeholder': {
  color: placeholderColor
  },
  ':-ms-input-placeholder': {
  color: placeholderColor
  }
  }} /> */
}
// let placeholderColor = "#ccc";
//create SignInContent
class SignInContent extends Component {
  state = {
    cutover: true,
    number: "",
    psword: ""
  }
  changeNum(e) {
    //show corrent or error
    this.refs.numCorrectNum.childNodes[2].className = "disBlock true";
    if (this.refs.numCorrectNum.childNodes[1].value === "") {
      this.refs.numCorrectNum.childNodes[2].className = "disNone true";
    }
    this.setState({
      number: e.target.value
    })
  }

  changePs(e) {
    this.setState({
      psword: e.target.value
    })
    //show corrent or error
    this.refs.numCorrectPs.childNodes[2].className = "disBlock true";
    if (this.refs.numCorrectPs.childNodes[1].value === "") {
      this.refs.numCorrectPs.childNodes[2].className = "disNone true";
    }
  }
  checkPs() {
    this.state.cutover ? this.refs.ps.type = "text" : this.refs.ps.type = "password"
    this.setState({
      cutover: !this.state.cutover
    })
  }
  signIn() {
    let {number, psword} = this.state;
    if (number === "18247184313" && psword === "123456") {
      window.location.href = "/new";
    } else if (number === "" && psword === "") {
      alert("请输入账号密码");
    } else if (number === "" && psword !== "") {
      alert("请输入账号");
    } else if (number !== "" && psword === "") {
      alert("请输入密码");
    } else {
      alert("账号密码错误，请重新输入");
      window.location.href = "/user/signIn";
    }
  }
  focus(e) {
    this.refs.number.value === "手机号码" ? this.refs.number.value = "" : this.refs.number.value = e.target.value
  }
  blur(e) {
    this.refs.number.value === "" ? this.refs.number.value = this.refs.number.defaultValue : this.refs.number.value = e.target.value

  }
  render() {
    return (
      <div className="content">
            <div className="main">
            <form>
                <div className="main-number">
                    <label ref="numCorrectNum">
                      <img src="./../img/sign_up_number.png" alt="" />
                      <input ref="number" onChange={(e) => this.changeNum(e)} onFocus={(e) => this.focus(e)} onBlur={(e) => this.blur(e)} className="number" type="text" defaultValue="手机号码" maxLength="11" />

                      <img className="true" src="./../img/sign_up_corrent.png" alt="" />

                    </label>


                </div>
                <div className="main-password">
                    <label ref="numCorrectPs">
                    <img src="./../img/sign_up_pw.png" alt="" />
                    <input ref="paword" onChange={(e) => this.changePs(e)} ref="ps" className="pw" type="password" placeholder="请输入密码" />
                    <img className="true" src="./../img/sign_up_corrent.png" alt="" />
                  </label>
                </div>
                <div className="main-forget-password">
                    <span onClick={() => this.checkPs()}>查看密码</span><a href="/user/forgetPs">忘记密码？</a>

                </div>
                <div className="main-sign-in" onClick={() => this.signIn()}>
                    <span>登录</span>
                </div>
                <div className="main-sign-up">
                    <a href="/user/sign_up"><span className="mg-r">立即注册</span></a>
                    <a href="/"><span className="col">闲逛一下~</span></a>
                </div>
          </form>
                <div className="main-bottom">
                    <div className="bottom-top">
                        <span className="left-border"></span>
                        <span className="bottom-text">第三方登录</span>
                        <span className="right-border"></span>
                    </div>
                    <div className="main-link">
                        <div><img src="./../img/sign_in_qq.png" alt="" /></div>
                        <div><img src="./../img/sign_in_weixin.png" alt="" /></div>
                        <div><img src="./../img/sign_in_weibo.png" alt="" /></div>
                    </div>
                </div>

            </div>
        </div>
    )
  }
}
