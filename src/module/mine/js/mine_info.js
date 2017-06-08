import { SubHeader, Content, Upimg } from "./../../../public/public.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/mine_info.css";
export default class MineInfo extends Component {
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
const InfoNav = ({className, listName, avatar, getBirthday, name}) => (
  <li className={className}>
      <span>{listName}</span>
      {avatar ? <img src="./../img/star1.png" alt="" /> :
    <div>
            {getBirthday ? <input placeholder="选择生日" id="getTime" /> : <span>{name}</span>}
            <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
        </div>
  }
  </li>
)
//create MineInfoContent
class MineInfoContent extends Component {
  state = {
    status: "uploader-wrap"
  }
  changeAvatar(){
    
  }
  render() {
    return (
      <div>
        <div className="banner">
          <ul className="banner-list">
              { /* 更改头像 */ }
              <InfoNav className="list-head" listName="头像" avatar="true" />
              { /* 更改昵称 */ }
              <Link to={"/mine/name"}>
                <InfoNav className="list-name" listName="昵称" name="夏天的雪花" />
              </Link>
              { /* 更改性别 */ }
              <InfoNav className="list-gender" listName="性别" name="男" />
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
      </div>
      { /* 上传图片 */ }
      <Upimg status={this.state.status}/>
  </div>
    )
  }
}
