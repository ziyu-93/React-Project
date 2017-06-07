import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js";
import "./../css/entertainment_tv_detail.css";

//create EnterTvDetail
export default class EnterTvDetail extends Component {
  render() {
    return (
      <section id="EnterTvDetail">
        <SubHeader text={"电视详情"}/>
        <Content haveTop={false} haveBottom={false}>
          <EnterTvDetailContent/>
        </Content>
      </section>
    )
  }
}

//create EnterTvDetailContent
class EnterTvDetailContent extends Component {

  render() {
    return (
      <section className="banner">
        <div className="banner-list">
            <div>
                <img src="./../../img/剃刀边缘.png" alt=""/>
            </div>
            <div className="detail-wrap">
                <p className="detail-title">向往的生活<span className="detail-douban">豆瓣评分</span><span className="detail-num">8.8</span></p>
                <p className="detail-time">上映时间：<span className="date">2009-03-05</span></p>
                <p className="detail-typeof">类型：<span className="typeof">历史/战争</span></p>
                <p className="detail-director">导演：<span className="director">麦兆辉、潘耀明</span></p>
                <div className="detail-star">
                    <div>
                        <span>演员：</span>
                    </div>

                    <div>
                        <span className="star">黄轩、</span>
                        <span className="star">段奕宏、</span>
                        <span className="star">郎月婷、</span>
                        <span className="star">黄轩</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="banner-text">
            <p className="text-title">简介：</p>
            <p className="text-wrap"><span className="text">向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活向往的生活</span></p>
        </div>
        <div className="banner-br">
            <p></p>
            <span>精彩视频</span>
            <p></p>
        </div>
        <div className="banner-video">
            <ul className="banner-video-wrap">
                <li className="video-item">
                    <div>
                        <div className="video-wrap">
                            <video src="" autoPlay poster="./../../img/剃刀边缘.png">

            </video>
                            <img src="./../../img/entertainment_play.png" alt=""/>
                        </div>
                        <span>《我的团长我的团》剧组采访</span>
                    </div>
                </li>
                <li className="video-item">
                    <div>
                        <div className="video-wrap">
                            <video src="" autoPlay poster="./../../img/剃刀边缘.png">

            </video>
                            <img src="./../../img/entertainment_play.png" alt=""/>
                        </div>
                        <span>东方卫视非常揭秘《我的团长我的团》</span>
                    </div>
                </li>
                <li className="video-item">
                    <div>
                        <div className="video-wrap">
                            <video src="" autoPlay poster="./../../img/剃刀边缘.png">

            </video>
                            <img src="./../../img/entertainment_play.png" alt=""/>
                        </div>
                        <span>《我的团长我的团》拍摄花絮1</span>
                    </div>
                </li>
                <li className="video-item">
                    <div>
                        <div className="video-wrap">
                            <video src="" autoPlay poster="./../../img/剃刀边缘.png">

              </video>
                            <img src="./../../img/entertainment_play.png" alt=""/>
                        </div>

                        <span>《非凡任务》首发预告片</span>
                    </div>
                </li>
            </ul>

        </div>
      </section>
    )
  }
}
