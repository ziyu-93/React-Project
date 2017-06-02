import React, { Component } from "react"
import { SubHeader, Content, Bottom } from "./../../../public/public.js"
import "./../css/brokewallPic.css"

export default class BrokePic extends Component {
  render() {
    return (
      <section id="BrokePic">
          <SubHeader text={"图文详情"}/>
          <Content haveTop={false} haveBottom={true}>
            <BrokePicContent/>
          </Content>
          <Bottom/>
      </section>
    )
  }
}


class BrokePicContent extends Component {
  render() {
    return (
      <section className="BrokePicContent">
<div className="banner">
          <div className="banner-top">
              <div className="item-top">
                  <div className="item-info">
                      <div className="logo-wrap">
                          <img className="item-logo" src="http://iph.href.lu/48x48" alt=""/>
                      </div>
                      <div className="item-right-top">
                          <div className="item-title">
                              <span className="item-name">一只猫</span>
                              <span className="item-grade">lv.16</span>
                          </div>
                          <span className="item-floor">刚刚</span>
                      </div>
                  </div>
                  <div>
                      <div className="item-text-wrap">
                          <p className="item-text">看看我家鹿晗，是不是比以前帅了？</p>
                          <div className="item-wrap">
                              <div className="item-reply">
                                  <ul className="img-list">
                                      <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan.png" alt=""/></li>
                                      <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt=""/></li>
                                      <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt=""/></li>
                                      <li className="img-num"><img className="item-wrap-img" src="./../img/brokeNew_luhan2.png" alt=""/></li>
                                  </ul>
                              </div>
                              <span className="item-date">点击图片查看大图<span>2017-03-27</span></span>
                          </div>
                      </div>
                  </div>

              </div>
              <div className="content-assess">
                  <img className="store" src="./../img/new_detail_shoucang_0.png" alt=""/>

                  <img className="zan" src="./../img/new_detail_zan_0.png" alt=""/>
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
                                          <img className="item-wrap-img" src="./../img/new_comment_sanjiao.png" alt=""/>

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
                          <img className="reply-button" src="./../img/new_detail_reply.png" alt=""/>
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
                          <img className="reply-button" src="./../img/new_detail_reply.png" alt=""/>
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
                          <img className="reply-button" src="./../img/new_detail_reply.png" alt=""/>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
</section>
    )
  }
}
