import React, { Component } from "react";
import { SubHeader, Content, Bottom } from "./../../../public/public.js";
import "./../css/new_detail.css";
import fetch from "isomorphic-fetch";


//create NewDetail
export default class NewDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    }
  }
  componentWillMount() {
    const newsId = this.props.location.pathname.lastIndexOf("/") + 1;
    this.setState({
      current: this.props.location.pathname.slice(newsId)
    })
  }
  render() {
    return (
      <div id="NewDetail">
      <SubHeader text={"咨询详情"}/>
      <Content haveTop={false} haveBottom={true}>
        <NewDetailContent current={this.state.current}/>
      </Content>
    <Bottom/>
  </div>
    )
  }
}

//create NewDetailContent
class NewDetailContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: this.props.current,
      currentList: []
    }
  }
  changeIconStore(e) {
    console.log(e.target.src);
    e.target.src === "http://localhost:3000/img/new_detail_shoucang_0.png" ? e.target.src = "http://localhost:3000/img/new_detail_shoucang.png" : e.target.src = "http://localhost:3000/img/new_detail_shoucang_0.png"
  }
  changeIconZan(e) {
    console.log(e.target.src);
    e.target.src === "http://localhost:3000/img/new_detail_zan_0.png" ? e.target.src = "http://localhost:3000/img/new_detail_zan.png" : e.target.src = "http://localhost:3000/img/new_detail_zan_0.png"
  }
  componentWillMount() {
    // fetch('https://github.com/ziyu-93/React-Project/blob/master/data/new.json', {
    //   method: "POST",
    //   mode: "no-cors",
    //   redirect: 'follow',
    //   headers: {
    //     "Content-Type": "application/plain"
    //   }
    // }).then(res => res)
    //   .then(data => console.log(data)).catch(e => console.error("Feach error", e));
    console.log(this.props.current);
    fetch("./../data/new.json")
      .then(res => res.json())
      .then(data => {
        //for
        for (var i in data.news) {
          data.news[i].newsId === this.state.current ?
            this.setState({
              currentList: data.news[i]
            }) : [];
        // console.log(data.news[i].title);
        // console.log(data.news[i].newsId);
        }
        console.log(this.state.currentList);
      })
      .catch(e => console.log("Fetch error", e));
      //循环遍历

  }

  render() {
    const {currentList} = this.state;
    return (
      <div className="banner">
        <div className="banner-top">
            <div className="top-wrap">
                <p className="top-title">{currentList.title}</p>
                <span className="top-date">{currentList.time}</span>
                <span className="top-text">粉丝吧提供</span>
            </div>
            <div className="top-content">
                <div className="content-wrap">
                    <p>1月17日晚，由北京国际广告传媒集团主办的首届“寻找邻家舞王”北京社区跳舞角逐总决赛，在天桥艺术中心圆满落下帷幕。来自北京各社区的巨细舞者“天桥论剑”，竞逐高下。尤其惹人瞩目的，是六名来自美国百老汇的明星艺术家与国内闻名艺人——阿佳组合担纲评委。并在每个角逐节目末尾，亲自上台指点北京的舞者，示范舞技、讲述百老汇的艺术精神，将艺术巨匠 课融入了评委的言传身带中。
                    </p>
                    <p>
                        <img src="./../img/new_detail.png" alt=""/>
                    </p>
                </div>
                <div className="content-wrap">
                    <p>据悉，这场为配合于1月19日在天桥艺术中心上演的“流光七十年 乐舞贺青春—百老汇经典歌舞秀”表演，带北京市平易近品味百老汇艺术精神而进行的社区跳舞大赛，获得了北京社区网联盟和红舞鞋等专业跳舞机构的支撑。</p>
                    <p>
                        <img src="./../img/new_detail2.png" alt=""/>
                    </p>
                </div>
                <div className="content-assess">
                    <img onClick={(e) => this.changeIconStore(e)} className="store" src="./../img/new_detail_shoucang_0.png" alt=""/>

                    <img  onClick={(e) => this.changeIconZan(e)} className="zan" src="./../img/new_detail_zan_0.png" alt=""/>
                </div>
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
                                                    <p><span className="reply-key">卷毛:</span><span className="reply-value">哈哈我看到你们了哈哈我看到你们了哈哈我看到你们了哈哈我看到你们了哈哈我看到你们了哈哈我看到你们了</span></p>
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
                                        <img className="item-wrap-img" src="./../img/new_comment_sanjiao.png" alt=""/>
                                        <div className="item-reply">

                                            <ul>

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
                                    <span className="item-floor">第3楼</span>
                                </div>
                                <div className="item-text-wrap">
                                    <p className="item-text">前排占座!占座!占座!</p>

                                    <div className="item-wrap">
                                        <img className="item-wrap-img" src="./../img/new_comment_sanjiao.png" alt=""/>
                                        <div className="item-reply">

                                            <ul>

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
                </ul>
            </div>
        </div>
                <div className="looding-wrap">
                    <div className="looding">
                        <img src="./../img/looding.gif" alt=""/>
                        <span className="looding-close">×</span>
                    </div>
                </div>
        </div>
    )
  }
}
