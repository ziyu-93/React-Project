import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js";
import "./../css/entertainment_variety_detail.css";

//create EnterTvDetail
export default class EnterVarietyDetail extends Component {
  render() {
    return (
      <section id="EnterVarietyDetail">
        <SubHeader text={"综艺详情"}/>
        <Content haveTop={false} haveBottom={false}>
          <EnterVarietyDetailContent/>
        </Content>
      </section>
    )
  }
}

//create EnterTvDetailContent
class EnterVarietyDetailContent extends Component {

  render() {
    return (
      <section className="banner">
        <div className="banner-list">
            <div>
                <img src="./../../img/向往的生活.png" alt=""/>
            </div>
            <div className="detail-wrap">
                    <p className="detail-title">向往的生活</p>
                    <p className="detail-name">主持人：<span className="name">何炅、黄磊、Henry</span></p>
                    <p className="detail-area">地区：<span className="area">中国大陆</span></p>
                    <p className="detail-tv">电视台：<span className="tv">湖南卫视</span></p>
                    <p className="detail-update">更新日期：<span className="update">20170312期</span></p>
                    <p className="detail-time">播出时间：<span className="date">每周日晚20：30</span></p>
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
