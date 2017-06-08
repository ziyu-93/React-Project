import React, {
  Component
} from "react";
import {
  Link
} from "react-router-dom";
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
class SubHeader extends Component {
  goBack() {
    window.history.go(-1);
    console.log("返回去咯");
  }
  render() {
    return (
      <div className="sub-header">
          <div className="sub-header-wrap">
              <img className="sub-header-back" src="./../../img/back.png" alt="" onClick={() => this.goBack()}/>
              <p className="sub-header-text">{this.props.text}</p>
          </div>
      </div>
    )
  }
}
//title and nav
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
//上传图片
class Upimg extends Component {
  render() {
    return (
      <div className={this.props.status}>
          <div className="uploader-list bg">

              <div className="file-wrap">
                  拍照
                  <input type="file" accept="image/*;capture=camcorder"/>
                  { /* <!-- multiple多张上传属性 --> */ }
              </div>

              <div className="file-wrap">
                  上传图片
                  <input id="upload_image" type="file" accept="image/*;capture=camera"/>
              </div>

              <span className="close-send">取消</span>

          </div>
      </div>
    )
  }
}
export {
  Header,
  Bottom,
  Content,
  Logo,
  SubHeader,
  TitleNav,
  ListLeft,
  ListRight,
  Upimg
}
