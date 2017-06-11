import React, { Component } from "react";
import { Content } from "./../../../public/public.js";
import "./../css/star_search.css";
import { Link } from "react-router-dom";
import withRouter from "react-router";
//create StarSearch
export default class StarSearch extends Component {
  render() {
    return (
      <section id="star_search">
          <StarSearchHeader/>
          <Content haveTop={false} haveBottom={false}>
            <StarSearchDetail></StarSearchDetail>
          </Content>
      </section>
    )
  }
}

//create StarSearchHeader
class StarSearchHeader extends Component {
  render() {
    return (
      <div className="header-detail">
            <div className="header-wrap-detail">
                <Link to={"/star"}><img className="header-back-detail" src="./../img/back.png" alt=""/></Link>
                <div className="header-search-detail">
                    <input type="text" placeholder="请输入明星名字" autoFocus />
                    <span className="searchBg">
                        <img src="./../img/star_search1.png" alt=""/>
                    </span>
                </div>
            </div>
        </div>
    )
  }
}

//create Content_detail
class StarSearchDetail extends Component {
  render() {
    return (
      <div className="banner">
            <div className="banner-top">
                <div className="top-recommend title">
                    <span>推荐</span>
                </div>
                <div className="top-list">
                    <ul>
                        <li><img src="./../img/star_name1.png" alt=""/><span>王丽坤</span></li>
                        <li><img src="./../img/star_name2.png" alt=""/><span>鹿晗</span></li>
                        <li><img src="./../img/star_name3.png" alt=""/><span>王源</span></li>
                        <li><img src="./../img/star_name4.png" alt=""/><span>杨幂</span></li>
                    </ul>
                </div>
            </div>
            <div className="banner-bottom">
                <div className="bottom-search title">
                    <span>查找</span>
                </div>
                <div className="bottom-left">
                    <ul className="star-list">
                        <li>
                            <p className="choose-wrap">A</p>
                            <p className="choose-name">阿宝</p>
                            <p className="choose-name">安又琪</p>
                            <p className="choose-name">艾尚文</p>
                            <p className="choose-name">安以轩</p>
                        </li>
                        <li>
                            <p className="choose-wrap">B</p>
                            <p className="choose-name">保剑锋</p>
                            <p className="choose-name">白百合</p>
                            <p className="choose-name">包小白</p>
                            <p className="choose-name">白净</p>
                        </li>
                        <li>
                            <p className="choose-wrap">C</p>
                            <p className="choose-name">成龙</p>
                            <p className="choose-name">迟志强</p>
                            <p className="choose-name">曹娥</p>
                            <p className="choose-name">曹操</p>
                        </li>
                        <li>
                            <p className="choose-wrap">D</p>
                            <p className="choose-name">阿西吧</p>
                            <p className="choose-name">阿西吧</p>
                            <p className="choose-name">阿西吧</p>
                            <p className="choose-name">阿西吧</p>
                        </li>
                    </ul>
                    <ul className="star-choose">
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                        <li>E</li>
                        <li>F</li>
                        <li>G</li>
                        <li>H</li>
                        <li>I</li>
                        <li>J</li>
                        <li>K</li>
                        <li>L</li>
                        <li>M</li>
                        <li>N</li>
                        <li>O</li>
                        <li>P</li>
                        <li>Q</li>
                        <li>R</li>
                        <li>S</li>
                        <li>T</li>
                        <li>U</li>
                        <li>V</li>
                        <li>W</li>
                        <li>X</li>
                        <li>Y</li>
                        <li>Z</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}
