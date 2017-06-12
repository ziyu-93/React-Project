import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Link } from "react-router-dom";
import "./public.css";

import Mine from "./../module/mine/js/mine.js";
import BrokeWall from "./../module/brokewall/js/brokewall.js";
import News from "./../module/news/js/news.js";
import Star from "./../module/star/js/star.js";
import Entertainment from "./../module/entertainment/js/entertainment.js";

//公共头部
class Header extends Component {
  static defaultProps = {
    Arr: [
      "咨询", "有料", "明星汇", "娱乐", "我的"
    ],
    mainNav: [{
      'path': '/',
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
      this.props.mainNav.map((e, i) => {
        return (
          <li key={i}>
            <NavLink exact strict to={e.path}
          activeStyle={{
            color: '#ffabc8',
            borderBottom: '4px solid #ffabc8',
            display: 'block',
            height: '100%',
            boxSizing: 'border-box'
          }}
          className={this.props.current === i
            ? "show"
            : "hide"}>
                {e.name}
            </NavLink>
          </li>
        )
      })
      }
    </ul>
      </div>
    )
  }
}
const Basic = () => (
  <Router>
    <div className="header">
      <ul className="item-wrap">
        <li><Link to="/">咨询</Link></li>
        <li><Link to="/brokewall">有料</Link></li>
        <li><Link to="/star">明星汇</Link></li>
        <li><Link to="/entertainment">娱乐</Link></li>
        <li><Link to="/mine">我的</Link></li>
      </ul>
        <hr/>

       <Route exact path="/" component={News}/>
       <Route exact path="/mine" component={Mine}/>
       <Route exact path="/entertainment" component={Entertainment}/>
       <Route exact path="/star" component={Star}/>
       <Route exact path="/brokewall" component={BrokeWall}/>
    </div>
  </Router>
)

//公共内容
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

//公共尾部
class Bottom extends Component {
  render() {
    return (
      <div className="bottom">
          <img className="bottom-left" src="./../../img/new_detail_assess.png" alt=""/>
          <img className="bottom-right" src="./../../img/new_detail_zhuanfabt.png" alt=""/>
      </div>
    )
  }
}
//公共logo
const Logo = () => (
  <div className="object-logo">
      <img src="./img/logo.png" className="logo-img" alt=""/>
      <div className="sign-wrap">
          <img src="./img/sign_in_logo.png" alt=""/>
          <Link to={"/user"}><span>请登录</span></Link>
      </div>
  </div>
)
// class Logo extends Component {
//   render() {
//     return (
//       <div className="object-logo">
//           <img src="./img/logo.png" className="logo-img" alt=""/>
//           <div className="sign-wrap">
//               <img src="./img/sign_in_logo.png" alt=""/>
//               <Link to={"/user"}><span>请登录</span></Link>
//           </div>
//       </div>
//     )
//   }
// }

//子页面头部
class SubHeader extends Component {
  goBack() {
    window.history.go(-1);
    console.log("返回去咯");
  }
  save() {
    console.log("保存");
    window.location.href = "/mine/info";
  }
  render() {
    return (
      <div className="sub-header">
          <div className="sub-header-wrap">
              <img className="sub-header-back" src="./../../img/back.png" alt="" onClick={() => this.goBack()}/>
              <p className="sub-header-text">{this.props.text}</p>
            {this.props.right ? <span onClick={() => this.save()} className="store">保存</span> : ""}
          </div>
      </div>
    )
  }
}
//我的收藏title and nav
class TitleNav extends Component {
  render() {
    return (
      <div className="banner-title-wrap">
          <div className="banner-title">
              <div className="banner-title-text">
                  <span>{this.props.name}</span>
                  <div className="banner-title-rigth">
                      <span className="banner-title-more"><a href={this.props.location}>更多</a></span>
                      <img className="banner-title-img" src="./../img/yule_jiantou.png" alt=""/>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
//list left and right
class ListLeft extends Component {
  state = {
    show: this.props.listName === "variety" ? "大陆综艺" : "全部分类"
  }
  switchShow(i) {
    this.setState({
      show: this.props.ListLeft[i]
    })
  }
  render() {
    return (
      <section className="ListLeft" style={{
        height: "100%"
      }}>
        <ul className="banner-left">
          {
      this.props.ListLeft.map((e, i) => {
        return (
          <Link to={"/entertainment/" + this.props.listName + ""} key={i}>
                  <li className={this.state.show === e ? "banner-left-show banner-left-item" : "banner-left-item"} onClick={() => this.switchShow(i)}>
                        <span>{e}</span>
                      </li></Link>
        )
      })
      }
        </ul>
      </section>
    )
  }
}
//list right
class ListRight extends Component {
  switchShow() {
    console.log(123);
  }
  render() {
    return (
      <section className="ListRight banner-rigth" style={{
        height: "100%",
        width: "2.26rem"
      }}>
        <ul className="banner-list">
          {
      this.props.ListRight.map((e, i) => {
        return (
          <li className="banner-right-item" key={i}>
                <Link to={"/entertainment/movie/" + e.movieId + ""}><img src={e.img} alt=""/>
                <p className="item-name chaochu_1">{e.name}</p>
                <p className="item-star chaochu_1">{e.star}</p></Link>
            </li>
        )
      })
      }
        </ul>
      </section>
    )
  }
}
//mine store
class MineStoreNav extends Component {
  static defaultProps = {
    mineStoreNav: [{
      'path': "/mine/store",
      'text': "图文"
    }, {
      'path': "/mine/store/video",
      'text': "视频"
    }, {
      'path': "/mine/store/news",
      'text': "咨询"
    }]
  }
  render() {
    return (
      <ul className="banner-top-nav">
        {
      this.props.mineStoreNav.map((e, i) => {
        return (
          <li key={i} ref="nav" className="nav"><NavLink exact strict to={e.path} activeStyle={{
            borderBottom: '2px solid #ffabc8',
            display: 'block',
            height: '100%',
            boxSizing: 'border-box'
          }}>{e.text}</NavLink></li>
        )
      })
      }
      </ul>
    )
  }
}
//上传图片  由于this.props.state的值，不能在子组件内使用，也就是不能改变高等组件的props。
// class Upimg extends Component {
//   state = {
//     boolean: this.props.boolean
//   }
//   closeSend() {
//     this.setState({
//       boolean: !this.state.boolean
//     })
//     console.log(1);
//   }
//   render() {
//     return (
//       <div className={this.props.boolean ? "uploader-wrap-show" : "uploader-wrap-hide"} ref="refName" >
//           <div className="uploader-list bg">
//
//               <div className="file-wrap">
//                   拍照
//                   <input type="file" accept="image/*;capture=camcorder"/>
//                   { /* <!-- multiple多张上传属性 --> */ }
//               </div>
//
//               <div className="file-wrap">
//                   上传图片
//                   <input id="upload_image" type="file" accept="image/*;capture=camera"/>
//               </div>
//
//               <span onClick={() => this.closeSend()} className="close-send">取消</span>
//
//           </div>
//       </div>
//     )
//   }
// }
export { Header, Bottom, Content, Logo, SubHeader, TitleNav, ListLeft, ListRight, MineStoreNav, Basic }
