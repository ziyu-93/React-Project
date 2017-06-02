import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Swiper from "react-swiper"
import ReactSwipe from 'react-swipe';
import "./../css/news.css";
import querystring from "querystring";
import fetch from "isomorphic-fetch";

const query = querystring.parse(window.location.search.slice(1));

const numberOfSlides = parseInt(query.slidesNum, 10) || 3;
//parseInt (string,进制数2~32) 产生出来的整数，十位乘进制数，加上个位的数字。
const paneNodes = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  return (
    <Link key={i} to={"/new/2"}><div className="swiper-slide"><img src="./img/brokeNew_loop.png" alt=""/></div></Link>
  )
});
const swipeSlide = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  return (
    <span key={i}></span>
  )
});

const startSlide = parseInt(query.startSlide, 10) || 0;

export default class News extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="news">
          <Logo/>
          <Header current={0}></Header>
          <Content haveTop={true} haveBottom={false}>
              <Swiper></Swiper>
              <NewContent/>
          </Content>
      </div>
    )
  }
}

class Swiper extends Component {
  state = {
    a: 0
  }

  next() {
    this.refs.reactSwipe.next();
    this.setState({
      a: this.refs.reactSwipe.getPos()
    })
  }
  prev() {
    this.refs.reactSwipe.prev();
    this.setState({
      a: this.refs.reactSwipe.getPos()
    })
  }
  autoPlay() {
    this.setState({
      a: this.refs.reactSwipe.getPos()
    })
  //this.refs.reactSwipe.slide(2, 1000);
  //console.log($(window));
  }
  render() {
    const _this = this;
    const swipeOptions = {
      startSlide: startSlide < paneNodes.length && startSlide >= 0 ? startSlide : 0,
      auto: parseInt(query.auto, 10) || 3000,
      speed: parseInt(query.speed, 10) || 500,
      disableScroll: query.disableScroll === true,
      continuous: query.continuous === undefined,
      callback() {
        _this.autoPlay()
      },
      transtionEnd() {
        console.log('ended transition');
      }
    };
    return (

      <div className="swiper-box">
        <ReactSwipe ref="reactSwipe" className="swiper" swipeOptions={swipeOptions} >
            {paneNodes}
        </ReactSwipe>
        <div className="slide-box">
            {
      Array.apply(null, Array(numberOfSlides)).map((_, i) => {
        return (
          <span className={this.state.a === i ? 'show' : ''} key={i}></span>
        )
      })
      }
        </div>
        { /* <div className="button-box">
            <button type="button" onClick={() => this.prev()}>Prev</button>
            <button type="button" onClick={() => this.next()}>Next</button>
        </div> */ }
        </div>
      );
  }
}

class NewContent extends Component {
  state = {
    data: []
  }
  componentWillMount() {
    fetch("./data/new.json").then(res => res.json())
      .then(data => this.setState({
        data: data.news
      }))
      .catch(e => console.error("Fetch failed!", e));
  }

  render() {
    return (
      <div className="NewContent">
            {
      this.state.data.map((e, i) => {
        return (
          <Link to={"/new/" + e.newsId + ""} key={i}>
             <div className="item">
               <div>
                   <img src={e.img} alt=""/>
               </div>
               <div className="content-wrap">
                   <p className="title">{e.title}</p>
                   <div className="content-wrap-bottom">
                       <span className="fans">粉丝吧提供</span>
                       <span className="time">{e.time}</span>
                   </div>

               </div>
             </div>
           </Link>
        )
      })
      }
      </div>
      );
  }
}
