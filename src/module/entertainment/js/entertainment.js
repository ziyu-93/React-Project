import { Header, Content, Logo, TitleNav } from "./../../../public/public.js";
import React, { Component } from "react";
import "./../css/entertainment.css";
// import { createStore } from 'redux';
import querystring from "querystring";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactSwipe from 'react-swipe';
import fetch from "isomorphic-fetch";

//create Entertainment
export default class Entertainment extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="entertainment">
          <Logo/>
          <Header current={3}></Header>
          <Content haveTop={true} haveBottom={false}>
              <Swiper/>
              <EntertainmentDetail/>
          </Content>
      </div>
    )
  }
}

const query = querystring.parse(window.location.search.slice(1));

const numberOfSlides = parseInt(query.slidesNum, 10) || 3;
//parseInt (string,进制数2~32) 产生出来的整数，十位乘进制数，加上个位的数字。
const paneNodes = Array.apply(null, Array(numberOfSlides))
  .map((_, i) => {
    return (
      <Link key={i} to={"/new/2"}><div className="swiper-slide"><img src="./img/brokeNew_loop.png" alt=""/></div></Link>
    )
  });
  // const swipeSlide = Array.apply(null, Array(numberOfSlides)).map((_, i) => {
  //   return (
  //     <span key={i}></span>
  //   )
  // });

const startSlide = parseInt(query.startSlide, 10) || 0;
// const Con = ({num, onIncrement, onDecrement}) => (
//   <div>
//     <h1>{num}</h1>
//     <button onClick={onIncrement}>加一</button>
//     <button onClick={onDecrement}>减一</button>
//   </div>
// );
// console.log(1);
// const reducer = (state = 1, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// }
// const store = createStore(reducer)


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
/* <Con
     num={this.state.value}
     onIncrement={() => {
       store.dispatch({
         type: 'INCREMENT'
       })
       console.log(1);
     }}
     onDecrement={() => {
       store.dispatch({
         type: 'DECREMENT'
       })
       console.log(12);
     }}
     /> */
}


//create Entertainment_detail
class EntertainmentDetail extends Component {
  state = {
    dataTv: [],
    dataMovie: [],
    dataZy: []
  }
  componentWillMount() {
    fetch("./data/entertainment.json")
      .then(res => res.json())
      .then(data => this.setState({
        dataTv: data.tv,
        dataMovie: data.movie,
        dataZy: data.zy
      }))
      .catch(e => console.log("Fetch error", e))
  }
  render() {
    return (
      <div className="banner-content">
          <TitleNav name={"电影"} location={"/entertainment/movie"}/>
          <div className="banner-file">
              <div className="file-box">
                  <ul className="file-top-wrap file-wrap">
                    {
      this.state.dataMovie.map((e, i) => {
        return (
          <li className="file-item" key={i}>
              <Link to={"/entertainment/movie/" + e.movieId + ""}><div className="placeholder"><img className="file-img" src={e.img} alt=""/></div>
              <p className="file-name chaochu_1">{e.name}</p>
              <p className="file-star chaochu_1">{e.star}</p></Link>
          </li>
        )
      })
      }
                  </ul>
              </div>
          </div>
          <TitleNav name={"综艺"} location={"/entertainment/variety"}/>
          <div className="banner-variety">
              <ul className="variety">
        {
      this.state.dataZy.map((e, i) => {
        return (
          <Link to={"/entertainment/variety/" + e.zyId + ""} key={i}><li className="variety-item">
            <div>
                <img src={e.img} alt=""/>
            </div>
            <div className="variety-content">
                <p className="variety-name">{e.name}</p>
                <p className="variety-tv">{e.tvStation}</p>
                <p className="variety-time">播出时间：{e.time}</p>
                <p className="variety-star chaochu_1">主持人：{e.host}</p>
            </div>
        </li></Link>
        )
      })
      }
              </ul>
          </div>
          <TitleNav name={"电视剧"} location={"/entertainment/tv"}/>
          <div className="banner-file-tv">
              <div className="file-box">
                  <ul className="file-top-wrap file-wrap">
                      {
      this.state.dataTv.map((e, i) => {
        return (
          <li className="file-item" key={i}>
              <Link to={"/entertainment/tv/" + e.tvId + ""}><div className="placeholder"><img className="file-img" src={e.img} alt=""/></div>
              <p className="file-name chaochu_1">{e.name}</p>
              <p className="file-star chaochu_1">{e.star}</p></Link>
          </li>
        )
      })
      }

                  </ul>
              </div>
          </div>
      </div>
    )
  }
}
