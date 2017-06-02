import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./public.css";

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  static defaultProps = {
    Arr: [
      "咨询", "有料", "明星汇", "娱乐", "我的"
    ],
    user: [{
      'path': '/new',
      'name': '咨询'
    }, {
      'path': '/brokewall',
      'name': '有料'
    }, {
      'path': '/star',
      'name': '明星汇'
    }, {
      'path': '/entertainment',
      'name': '娱乐'
    }, {
      'path': '/mine',
      'name': '我的'
    }]
  }
  render() {
    return (
      <div className="header">
        <ul className="item-wrap">
          {
      this.props.user.map((e, i) => {
        return (
          <li key={i}>
                  <Link to={e.path} className={this.props.current === i
            ? "show"
            : "hide"}>
                      {e.name}
                  </Link>
                </li>
        )
      })
      }
          </ul>
      </div>
    )
  }
}

class Content extends Component {
  render() {
    return (
      <div className="content" style={{
        "top": this.props.haveTop
          ? "98px"
          : "44px",
        "bottom": this.props.haveBottom
          ? "44px"
          : "0"
      }}>
                {this.props.children}
            </div>
    )
  }
}
class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
                <img className="bottom-left" src="./../img/new_detail_assess.png" alt=""/>
                <img className="bottom-right" src="./../img/new_detail_zhuanfabt.png" alt=""/>
            </div>
    )
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="object-logo">
                <img src="./img/logo.png" className="logo-img" alt=""/>
                <div className="sign-wrap">
                    <img src="./img/sign_in_logo.png" alt=""/>
                    <span>请登录</span>
                </div>
            </div>
    )
  }
}
class SubHeader extends Component {
  goBack() {
    window.history.go(-1);
    console.log("返回去咯");
  }
  render() {
    return (
      <div className="sub-header">
                <div className="sub-header-wrap">
                    <img className="sub-header-back" src="./../img/back.png" alt="" onClick={() => this.goBack()}/>
                    <p className="sub-header-text">{this.props.text}</p>
                </div>
            </div>
    )
  }
}
;

export { Header, Bottom, Content, Logo, SubHeader }
