import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./../css/mine_info.css";
import PropTypes from "prop-types";
import MineChangeName from "./mine_infoName.js";
import MineLocation from "./mine_location.js";
import MineEmail from "./mine_mailbox.js";
import MineSignature from "./mine_signature.js";
// const mineMan1 = require("./../../../img/mine_man1.png");

//create MineInfo
class MineInfo extends Component {
  render() {
    return (
      <div id="MineInfo">
        <SubHeader text={"我的信息"}/>
        <Content haveTop={false} haveBottom={false}>
          <MineInfoContent/>
        </Content>
      </div>
    )
  }
}

//create public structure
const InfoNav = ({className, listName, getBirthday, name}) => (
  <li className={className}>
      <span>{listName}</span>
      <div>
            {getBirthday ? <input placeholder="选择生日" id="getTime" /> : <span>{name}</span>}
            <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
        </div>
  </li>
)



//create MineInfoContent
class MineInfoContent extends Component {
  //与static defaultProps匹配check
  static propTypes = {
    boolean: PropTypes.bool,
    booleanSex: PropTypes.bool,
    textSex: PropTypes.string,
    manSrc: PropTypes.string,
    womanSrc: PropTypes.number
  };
  state = {
    boolean: false,
    booleanSex: false,
    textSex: "男",
    manSrc: "./../img/mine_man1.png",
    womanSrc: "./../img/mine_woman0.png"
  }
  changeAvatar() {
    this.setState({
      boolean: true
    })
  }
  changeSend() {
    this.setState({
      booleanSex: true
    })
  }
  changeSex() {
    this.state.manSrc === "./../img/mine_man1.png" ?
      this.setState({
        manSrc: "./../img/mine_man0.png",
        womanSrc: "./../img/mine_woman1.png"
      }) : this.setState({
        manSrc: "./../img/mine_man1.png",
        womanSrc: "./../img/mine_woman0.png"
      })
  }
  closeSend() {
    this.setState({
      boolean: false,
      booleanSex: false
    })

    this.setState({
      textSex: this.state.manSrc === "./../img/mine_man1.png" ? "男" : "女"
    })
  }

  render() {
    const {booleanSex, boolean, textSex, manSrc, womanSrc} = this.state;
    return (
      <div className="banner">
          <ul className="banner-list">
              { /* 更改头像 */ }
              <li className="list-head"  onClick={() => this.changeAvatar()}>
                  <span>头像</span>
                   <img src="./../img/star1.png" alt="" />
              </li>
              { /* 更改昵称 */ }
              <Link to={"/mine/name"}>
                <InfoNav className="list-name" listName="昵称" name="夏天的雪花" />
              </Link>
              { /* 更改性别 */ }
              <li className="list-gender"  onClick={() => this.changeSend()}>
                  <span>性别</span>
                  <div>
                     <span>{textSex}</span>
                      <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
                  </div>
              </li>
              { /* 更改个性签名 */ }
              <Link to={"/mine/signature"}>
                <InfoNav className="list-signature" listName="个性签名" name="年轻的时候" />
              </Link>
              { /* 更改生日 */ }
              <InfoNav className="list-birthday" listName="生日" getBirthday="true" />
              { /* 更改我的地址 */ }
              <Link to={"/mine/location"}>
                <InfoNav className="list-location" listName="我的地址" name="北京市昌平区沙河" />
              </Link>
              { /* 更改邮箱 */ }
              <Link to={"/mine/email"}>
                <InfoNav className="list-mailbox" listName="邮箱" name="494999197@qq.com" />
              </Link>
          </ul>

      { /* 上传图片 */ }
      <div className={boolean ? "uploader-wrap-show" : "uploader-wrap-hide"} >
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
              <span onClick={() => this.closeSend()} className="close-send">取消</span>
          </div>
      </div>
      { /* 更改性别 */ }
      <div className={booleanSex ? "gender-choose-show" : "gender-choose-hide"}>
        <div className="gender-wrap">
            <div className="wrap-top" >
                <img src={manSrc} onClick={() => this.changeSex()} alt="" ref="man"/>
              <img src={womanSrc} onClick={() => this.changeSex()} alt="" ref="woman"/>
            </div>
            <div className="make-sure">
                <span onClick={() => this.closeSend()}>确定</span>
            </div>
        </div>
    </div>
  </div>
    )
  }
}
const MineInfoRouter = () => (
  <Router>
    <div className="page">
      <Route exact path="/mine/info" component={MineInfo}/>
      <Route exact path="/mine/signature" component={MineSignature}/>
      <Route exact path="/mine/email" component={MineEmail}/>
      <Route exact path="/mine/location" component={MineLocation}/>
      <Route exact path="/mine/name" component={MineChangeName}/>
    </div>
  </Router>
)
export default MineInfoRouter;
