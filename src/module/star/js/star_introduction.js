import React, { Component } from "react";
import { SubHeader, Content } from "./../../../public/public.js";
import "./../css/star_introduction.css";
// import { Link } from "react-router-dom";

//create StarIntro
export default class StarIntro extends Component {
  render() {
    return (
      <section id="introduction">
        <SubHeader text={"明星简介"}/>
        <Content haveTop={false} haveBottom={false}>
          <StarIntroDetail/>
        </Content>
      </section>
    )
  }
}

//create StarIntroDetail
class StarIntroDetail extends Component {
  render() {
    return (
      <div className="banner">
          <div className="banner-top">
              <div className="banner-top-head">
                  <img src="./../../img/star_introduction_head.png" alt=""/>
                  <p>王丽坤</p>
              </div>
              <div className="banner-top-text">
                  <div className="text-left">
                      <p>外 文 名：Claudia</p>
                      <p>星  座：白羊座</p>
                      <p>毕业院校：北京舞蹈学院</p>
                      <p>出生地：内蒙古自治区赤峰市翁牛特旗</p>
                  </div>
                  <div className="text-right">
                      <p>职业：演员</p>
                      <p>身高：167</p>
                      <p>体重：46kg</p>
                      <p>生日：3月22日</p>
                  </div>

              </div>
          </div>
          <div className="banner-bottom">
              <img src="./../../img/star_introduction_title.png" alt=""/>
              <p>王丽坤，中国内地女演员，出生于内蒙古赤峰翁牛特旗乌丹镇，从小学习舞蹈。2004年毕业于北京舞蹈学院中国舞本科班；同年被徐克导演选中出演电视剧《七剑下天山》而进入演艺圈。</p>
              <p>2005年主演海岩编剧的电视剧《金耳环》。2006年主演特工谍战剧《五号特工组》。</p>
          </div>
      </div>
    )
  }
}
