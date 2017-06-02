import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import "./../css/brokewall.css";
import { Link } from "react-router-dom";
import ReactSwipe from "react-swipe";
import PropTypes from "prop-types";
import Swipe from 'swipe-js-iso';
import fetch from 'isomorphic-fetch';
export default class BrokeWall extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="brokewall">
          <Logo/>
          <Header current={1}></Header>
          <Content haveTop={true} haveBottom={false}>
              <Swiper/>
              <BrokeWallContent/>
          </Content>
      </div>
    )
  }
}

const swipeChild = Array.apply(null, Array(3)).map((_, i) => {
  return (<div className="swiper-slide" key={i}>
      <img src="./img/brokeNew_loop.png" alt=""/>
    </div>)
});

class Swiper extends Component {
  static propTypes = {
    swipeOptions: PropTypes.shape({
      startSlide: PropTypes.number,
      speed: PropTypes.number,
      auto: PropTypes.number,
      continuous: PropTypes.bool,
      autoRestart: PropTypes.bool,
      disableScroll: PropTypes.bool,
      stopPropagation: PropTypes.bool,
      swiping: PropTypes.func,
      callback: PropTypes.func,
      transtionEnd: PropTypes.func,
      element: PropTypes.element
    }),
    id: PropTypes.string,
    className: PropTypes.string
  }
  static defaultProps = {
    swipeOptions: {},
    className: '123'
  }
  state = {
    current: 0
  }
  componentDidMount() {
    const {swipeOptions} = this.props;
    //this.swipe = Swipe(this.refs.reactSwipe, swipeOptions);
    //console.log(Swipe(this));
    console.log(this.props);
  }
  componentWillUnmount() {
    //this.swipe.kill();
    this.swipe = void 0;
  }
  autoPlay() {
    this.setState({
      current: this.refs.reactSwipe.getPos()
    })
  }
  render() {
    const _this = this;
    const swipeOptions = {
      startSlide: 0,
      auto: 3000,
      speed: 500,
      continuous: true,
      autoRestart: false,
      callback() {
        _this.autoPlay();
      },
      transtionEnd() {
        console.log("done");
      }
    }
    const {className} = this.props;
    return (
      <div className="swiper-box">
        <ReactSwipe className={`swiper ${className}`} ref="reactSwipe" swipeOptions={swipeOptions}>
          {swipeChild}
        </ReactSwipe>
        <div className="slide-box">
          {
      Array.apply(null, Array(3)).map((_, i) => {
        return (<a key={i} href="javascript:void(0)"><span className={this.state.current === i ? "show" : "hide"}></span></a>)
      })
      }
        </div>
      </div>
    )
  }
}

class BrokeWallContent extends Component {
  static propTypes = {
    navShape: PropTypes.shape({
      nav: PropTypes.oneOf(["图文", "视频"])
    })
  }
  static defaultProps = {
    nav: ["图文", "视频"]
  }
  state = {
    current: 0
  }
  componentDidMount() {
    let navText = findDOMNode(this.refs["nav"]);
    console.log(navText);
  }
  tabChange(i) {
    this.setState({
      current: i
    })
    let a = this.refs["tabItem" + i];
    console.log(a);
  }
  render() {

    return (
      <section className="brokeWall-content">
      <div className="content-nav" ref="nav">
        {
      this.props.nav.map((e, i) => {
        return (
          <div className={this.state.current === i
            ? "nav-show"
            : ""} key={i}>
                  <span onClick={() => this.tabChange(i)} ref={"tabItem" + i}>{e}</span>
              </div>
        )
      })
      }
        </div>
            {this.state.current === 0 ? <BrokeWallPic/> : <BrokeWallVideo/>}
        </section>
    )
  }
}

class BrokeWallPic extends Component {
  state = {
    picList: []
  }
  componentWillMount() {
    fetch("./data/circle.json")
      .then(res => res.json())
      .then(data => this.setState({
        picList: data.circlePic
      }))
      .catch(e => console.log("Fetch error", e));
  }
  render() {
    return (
      <div className='tab-left-content main-active'>
        <ul className="left-list-wrap">
          {
      this.state.picList.map((e, i) => {
        return (
          <li className="left-item" key={i}>
            <div className="item-top">
                <div className="logo-wrap">
                    <img className="item-logo" src={e.head} alt=""/>
                </div>
                <div className="item-right-wrap">
                    <div className="item-right-top">
                        <div className="item-title">
                            <span className="item-name">{e.name}</span>
                        </div>
                        <span className="item-floor">{e.time}</span>
                    </div>
                    <div className="item-text-wrap">
                        <p className="item-text">{e.contentText}</p>
                        <div className="item-wrap">
                            <div className="item-reply">
                                <ul className="img-list">
                                    {
          e.img.map((a, b) => {
            return (
              <li className={e.img.length > 1 ? "img-num " : "img-one"} key={b}>
                        <img className="item-wrap-img" src={a} alt=""/>
                    </li>
            )
          })
          }
                                  </ul>
                            </div>
                            <Link to={`/brokewall/${e.picId}`}><span className="item-date">点击查看详情</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        )
      })
      }
        </ul>
    </div>
    )
  }
}
class BrokeWallVideo extends Component {
  state = {
    videoList: []
  }
  componentWillMount() {
    fetch("./data/circle.json").then(res => res.json())
      .then(data => this.setState({
        videoList: data.circleVideo
      }))
      .catch(e => console.log("Feach error", e));
  }
  render() {
    return (
      <div className="tab-right-content">
          <ul className="right-list-wrap">
              {
      this.state.videoList.map((e, i) => {
        return (
          <li className="right-item" key={i}>
                        <div className="item-top">
                            <div className="logo-wrap">
                                <img className="item-logo" src={e.head} alt=""/></div>

                            <div className="item-right-wrap">
                                <div className="item-right-top">
                                    <div className="item-title">
                                        <span className="item-name">{e.name}</span>

                                    </div>
                                    <span className="item-floor">{e.time}</span>
                                </div>
                                <div className="item-text-wrap">
                                    <p className="item-text">{e.contentText}</p>
                                    <div className="item-wrap">
                                        <video src="" poster={e.img}></video>

                                        <Link to={'/brokewall/' + e.videoId + ''}><span className="item-date">点击查看详情</span></Link>
                                    </div>

                                </div>
                            </div>

                        </div>
                      </li>
        )
      })
      }
          </ul>
      </div>
    )
  }
}
