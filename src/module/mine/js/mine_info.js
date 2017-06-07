import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react"
// import { Link } from "react-router-dom";
import "./../css/mine_info.css"
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

class MineInfoContent extends Component {
  render() {
    return (
      <div>
    <div className="banner">
      <ul className="banner-list">
          <li className="list-head">
              <span>头像</span>
              <img src="./../img/star1.png" alt=""/>
          </li>
          <li className="list-name">
              <span>昵称</span>
              <div>
                  <span>夏天的雪花</span>
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
          <li className="list-gender">
              <span>性别</span>
              <div>
                  <span>男</span>
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
          <li className="list-signature">
              <span>个性签名</span>
              <div>
                  <span>"年轻的时候"</span>
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
          <li className="list-birthday">
              <span>生日</span>
              <div>
                  <input placeholder="选择生日" id="getTime" />
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
          <li className="list-location">
              <span>我的地址</span>
              <div>
                  <span>北京市昌平区沙河</span>
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
          <li className="list-mailbox">
              <span>邮箱</span>
              <div>
                  <span>494999197@qq.com</span>
                  <img className="jiantou" src="./../img/yule_jiantou.png" alt=""/>
              </div>
          </li>
      </ul>
  </div>
  <div className="uploader-wrap">
          <div className="uploader-list">

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
  </div>
    )
  }
}
