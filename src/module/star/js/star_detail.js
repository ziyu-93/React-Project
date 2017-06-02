import { SubHeader, Content } from "./../../../public/public.js";
import React, { Component } from "react"
import "./../css/starDetail.css"
export default class StarDetail extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="star">
                <SubHeader text={"明星详情"}></SubHeader>
                <Content haveTop={false} haveBottom={false}>
                    <StarDetailContent/>
                </Content>
            </div>
    )
  }
}

class StarDetailContent extends Component {
  render() {
    return (
      <div>
        <div className="banner">
            <div className="banner-star-show">
                <div className="star-show-wrap">
                    <div className="star-top">
                        <img className="star-show-imgWrap" src="./../img/head_woman.png" alt=""/>
                        <img className="star-show-img" src="./../img/star_detail_head.png" alt=""/>
                        <div className="star-show-info">
                            <p className="star-name">王丽坤</p>
                            <p className="star-detail">
                                <span className="star-job">职业:演员</span>
                                <span className="star-xing">星座:白羊座</span>
                            </p>
                        </div>
                    </div>
                    <div className="star-main">
                        <p className="star-introduction">简介:</p>
                        <p className="star-text">王丽坤,中国内地女演员,出生于内蒙古赤峰。王丽坤,中国内地女演员,出生于内蒙古赤峰。王丽坤,中国内地女演员,出生于内蒙古赤峰。</p>
                        <p className="star-more"><a href="./../main/star_introduction.html">查看详情</a></p>
                    </div>
                </div>
            </div>
            <div className="banner-content">
                <div className="banner-title-wrap">
                    <div className="banner-title">
                        <img src="./../img/star_detail_weixin.png" alt=""/>
                        <span className="banner-title-text">新闻资讯</span>
                        <a href="./../main/star_infor_detail.html" className="banner-title-more">更多资讯</a>
                    </div>
                </div>
                <div className="banner-list">
                    <ul className="banner-wrap clearfix">
                        <li className="banner-item">
                            <div className="item-wrap">
                                <img className="item-img" src="./../img/star6.png" alt=""/>
                                <div className="item-content">
                                    <div className="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>
                                    <p className="item-text">
                                        <span className="item-text-font">粉丝吧提供</span>
                                        <span className="item-text-date">2017-03-16</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="banner-item">
                            <div className="item-wrap">
                                <img className="item-img" src="./../img/star2.png" alt=""/>
                                <div className="item-content">
                                    <div className="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>
                                    <p className="item-text">
                                        <span className="item-text-font">粉丝吧提供</span>
                                        <span className="item-text-date">2017-03-16</span>
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li className="banner-item">
                            <div className="item-wrap">
                                <img className="item-img" src="./../img/star4.png" alt=""/>
                                <div className="item-content">
                                    <div className="item-title">长得帅就死任性,彭于晏自拍挤出抬头纹</div>
                                    <p className="item-text">
                                        <span className="item-text-font">粉丝吧提供</span>
                                        <span className="item-text-date">2017-03-16</span>
                                    </p>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
                <div className="star_route">
                    <div className="banner-title-wrap">
                        <div className="banner-title">
                            <img src="./../img/star_detail_rili.png" alt=""/>
                            <span className="banner-title-text">行程</span>
                            <a href="./../main/star_route.html" className="banner-title-more">更多行程</a>
                        </div>
                    </div>
                    <ul className="star-route-list">
                        <li className="star-route-list-item">
                            <span className="route-time">2017-03-30</span>
                            <span className="route-main">王丽坤30岁生日</span>
                        </li>
                        <li className="star-route-list-item">
                            <span className="route-time">2017-03-16</span>
                            <span className="route-main">出席路易威登时装秀</span>
                        </li>
                        <li className="star-route-list-item">
                            <span className="route-time">2017-01-15</span>
                            <span className="route-main">《七十二层奇楼》录制</span>
                        </li>
                        <li className="star-route-list-item">
                            <span className="route-time">2016-12-26</span>
                            <span className="route-main">广告拍摄</span>
                        </li>
                    </ul>
                </div>
                <div className="star-relationship">
                    <div className="banner-title-wrap">
                        <div className="banner-title">
                            <img src="./../img/star_detail_guanxi.png" alt=""/>
                            <span className="banner-title-text">关系</span>
                        </div>
                    </div>
                    <div className="star-relationship-wrap">
                        <img src="./../img/star_relationship.png" alt=""/>
                        <span></span>
                        <div className="star-relationship-map">
                            <img src="./../img/star1.png" alt=""/>
                            <img src="./../img/star2.png" alt=""/>
                            <img src="./../img/star3.png" alt=""/>
                            <img src="./../img/star4.png" alt=""/>
                            <img src="./../img/star5.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="star-works">
                    <div className="banner-title-wrap">
                        <div className="banner-title">
                            <img src="./../img/./../img/star_works.png" alt=""/>
                            <span className="banner-title-text">作品</span>
                        </div>
                    </div>
                    <div className="star-works-wrap">
                        <img src="./../img/电视剧1.png" alt=""/>
                        <img src="./../img/电视剧2.png" alt=""/>
                        <img src="./../img/电视剧3.png" alt=""/>
                        <img src="./../img/电视剧4.png" alt=""/>
                        <img src="./../img/电视剧5.png" alt=""/>
                        <img src="./../img/电视剧6.png" alt=""/>
                        <img src="./../img/电视剧7.png" alt=""/>
                        <img src="./../img/电视剧8.png" alt=""/>
                        <img src="./../img/电视剧1.png" alt=""/>
                        <img src="./../img/电视剧2.png" alt=""/>
                    </div>
                </div>

                <div className="star-pic">
                    <div className="banner-title-wrap">
                        <div className="banner-title">
                            <img src="./../img/star_pic.png" alt=""/>
                            <span className="banner-title-text">图集</span>
                            <a href="./../main/star_pic.html" className="banner-title-more">更多美图</a>
                        </div>
                    </div>
                    <div className="star-pic-wrap">
                        <img src="./../img/star1.png" alt=""/>
                        <img src="./../img/star1.png" alt=""/>
                        <img src="./../img/star1.png" alt=""/>
                        <img src="./../img/star1.png" alt=""/>
                    </div>
                </div>

            </div>
        </div>
      </div>
    )
  }
}
