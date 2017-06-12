import React, { Component } from "react";
import { SubHeader, Content, Bottom } from "./../../../public/public.js";
import "./../css/brokewallPic.css";
import fetch from "isomorphic-fetch";

//create BrokeVideo
export default class BrokeVideo extends Component {
  state = {
    current: ""
  }
  componentWillMount() {
    console.log(this.props.location.pathname);
    const newsId = this.props.location.pathname.lastIndexOf("/") + 1;
    this.setState({
      current: this.props.location.pathname.slice(newsId)
    })
  }
  render() {
    return (
      <section id="BrokePic">
          <SubHeader text={"视频详情"}/>
          <Content haveTop={false} haveBottom={true}>
            <BrokeVideoContent current={this.state.current}/>
          </Content>
          <Bottom/>
      </section>
    )
  }
}

//create BrokeVideoContent
class BrokeVideoContent extends Component {
  state = {
    current: this.props.current,
    currentList: [],
    imgList: []
  }
  changeIconStore(e) {
    e.target.src === "http://localhost:3000/img/new_detail_shoucang_0.png" ? e.target.src = "http://localhost:3000/img/new_detail_shoucang.png" : e.target.src = "http://localhost:3000/img/new_detail_shoucang_0.png"
  }
  changeIconZan(e) {
    // console.log(e.target.src);
    e.target.src === "http://localhost:3000/img/new_detail_zan_0.png" ? e.target.src = "http://localhost:3000/img/new_detail_zan.png" : e.target.src = "http://localhost:3000/img/new_detail_zan_0.png"
  }

  componentWillMount() {
    console.log(this.state.current);
    fetch("./../../data/circle.json")
      .then(res => res.json())
      .then(data => {
        console.log(data.circleVideo);
        for (var i in data.circleVideo) {
          data.circleVideo[i].videoId === this.state.current ?
            this.setState({
              currentList: data.circleVideo[i],
              imgList: data.circleVideo[i].img
            }) : []
        }
      })
      .catch(e => console.log("Fetch error", e))
  //  console.log(this.state.currentList.img);
  }
  render() {
    const {currentList, imgList} = this.state;
    console.log(this.state.imgList);
    return (
      <section className="BrokePicContent">
        <div className="banner">
          <div className="banner-top">
              <div className="item-top">
                  <div className="item-info">
                      <div className="logo-wrap">
                          <img className="item-logo" src={currentList.head} alt=""/>
                      </div>
                      <div className="item-right-top">
                          <div className="item-title">
                              <span className="item-name">{currentList.name}</span>
                              { /* <span className="item-grade">lv.16</span> */ }
                          </div>
                          <span className="item-floor">{currentList.time}</span>
                      </div>
                  </div>
                  <div>
                      <div className="item-text-wrap">
                          <p className="item-text">{currentList.contentText}</p>
                          <div className="item-wrap">
                              <div className="item-reply">
                                <video src="" poster={currentList.img}>

                                </video>
                              </div>
                              <span className="item-date">{currentList.time}</span>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="content-assess">
                  <img onClick={(e) => this.changeIconStore(e)} className="store" src="./../../img/new_detail_shoucang_0.png" alt=""/>

                  <img onClick={(e) => this.changeIconZan(e)} className="zan" src="./../../img/new_detail_zan_0.png" alt=""/>
              </div>
          </div>
          <div className="banner-bottom">
              <div className="banner-title-wrap">
                  <div className="banner-title">
                      <span className="banner-title-text">评论</span>
                  </div>
              </div>
              <div className="banner-list">
                  <ul className="list-wrap">

                      <li className="comment-item">
                          <div className="item-top">
                              <div className="logo-wrap">
                                  <img className="item-logo" src="http://iph.href.lu/48x48" alt=""/>
                              </div>
                              <div>
                                  <div className="item-right-top">
                                      <div className="item-title">
                                          <span className="item-name">鹿晗爱你一世</span>
                                          <span className="item-grade">lv.16</span>

                                      </div>
                                      <span className="item-floor">第1楼</span>
                                  </div>
                                  <div className="item-text-wrap">
                                      <p className="item-text">前排占座!占座!占座!</p>

                                      <div className="item-wrap">
                                          <img className="item-wrap-img" src="./../../img/new_comment_sanjiao.png" alt=""/>

                                          <div className="item-reply">
                                              <ul>
                                                  <li className="item-reply-text">
                                                      <p><span className="reply-key">卷毛:</span><span className="reply-value">哈哈我看到你们了</span></p>
                                                  </li>
                                                  <li className="item-reply-text">
                                                      <p><span className="reply-key">卷毛:</span><span className="reply-value">哈哈我看到你们了</span></p>
                                                  </li>
                                                  <li className="item-reply-text">
                                                      <p><span className="reply-key">卷毛:</span><span className="reply-value">哈哈我看到你们了</span></p>
                                                  </li>
                                                  <li className="item-reply-text">
                                                      <p><span className="reply-key">卷毛:</span><span className="reply-value">哈哈我看到你们了</span></p>
                                                  </li>
                                              </ul>
                                              <div className="item-reply-more">
                                                  <a href="./new_detail_reply.html">更多回复</a>
                                              </div>
                                          </div>
                                      </div>

                                      <span className="item-date">2017-02-08</span>
                                  </div>
                              </div>

                          </div>
                          <img className="reply-button" src="./../../img/new_detail_reply.png" alt=""/>
                      </li>
                      <li className="comment-item">
                          <div className="item-top">
                              <div className="logo-wrap">
                                  <img className="item-logo" src="http://iph.href.lu/48x48" alt=""/>
                              </div>
                              <div>
                                  <div className="item-right-top">
                                      <div className="item-title">
                                          <span className="item-name">鹿晗爱你一世</span>
                                          <span className="item-grade">lv.16</span>

                                      </div>
                                      <span className="item-floor">第2楼</span>
                                  </div>
                                  <div className="item-text-wrap">
                                      <p className="item-text">前排占座!占座!占座!</p>
                                      <div className="item-wrap">
                                          <div className="item-reply">
                                              <ul>

                                              </ul>
                                          </div>
                                      </div>
                                      <span className="item-date">2017-02-08</span>
                                  </div>
                              </div>

                          </div>
                          <img className="reply-button" src="./../../img/new_detail_reply.png" alt=""/>
                      </li>
                      <li className="comment-item">
                          <div className="item-top">
                              <div className="logo-wrap">
                                  <img className="item-logo" src="http://iph.href.lu/48x48" alt=""/>
                              </div>
                              <div>
                                  <div className="item-right-top">
                                      <div className="item-title">
                                          <span className="item-name">鹿晗爱你一世</span>
                                          <span className="item-grade">lv.16</span>

                                      </div>
                                      <span className="item-floor">第3楼</span>
                                  </div>
                                  <div className="item-text-wrap">
                                      <p className="item-text">前排占座!占座!占座!</p>

                                      <div className="item-wrap">
                                          <div className="item-reply">
                                              <ul>

                                              </ul>
                                          </div>
                                      </div>
                                      <span className="item-date">2017-02-08</span>
                                  </div>
                              </div>
                          </div>
                          <img className="reply-button" src="./../../img/new_detail_reply.png" alt=""/>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
</section>
    )
  }
}
