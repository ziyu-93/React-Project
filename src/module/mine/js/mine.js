import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./../css/mine.css";
// import { findDOMNode } from "react-dom";
import fetch from "isomorphic-fetch";
// import createStore from 'redux';

//create Mine
export default class Mine extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="mine">
        <Logo/>
        <Header current={4}></Header>
        <Content className="banner" haveTop={true} haveBottom={false}>
          <MineBg/>
          <MineContent/>
        </Content>
      </div>
    )
  }
}

class MineBg extends Component {
  componentWillMount() {
    function timeout(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
      })
    }
    timeout(2000)
      .then((value) => {
        console.log(value);
      })
    //Promise ajax 的一个封装
    let getJSON = function(url) {
      let promise = new Promise((resolve, reject) => {
        let client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

        function handler() {
          if (this.readyState !== 4) {
            return;
          }
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(this.statusText));
          }
        }
      })
      return promise;
    };
    // getJSON("./data.json")
    //   .then(
    //     json => console.log(json)
    // )
    //   .catch(error => console.log(error));

    var p1 = new Promise(function(resolve, reject) {
      setTimeout(() => reject(new Error('fail')), 3000)
    })

    var p2 = new Promise(function(resolve, reject) {
      setTimeout(() => resolve(p1), 1000)
    })

    p2
      .then(result => console.log(result))
      .catch(error => console.log(error));


    var promise = new Promise(function(resolve, reject) {
      resolve('ok');
      throw new Error('test');
    });
    promise
      .then(function(value) {
        console.log(value)
      })
      .catch(function(error) {
        console.log(error)
      });

      // const defaultState = 0;
      // const reducer = (state = defaultState, action) => {
      //   switch (action.type) {
      //     case 'ADD':
      //       return state + action.payload;
      //     default:
      //       return state;
      //   }
      //
      // };
      // const state = reducer(1, {
      //   type: 'ADD',
      //   payload: 2
      // })
      // console.log(state);
      // var o1 = {
      //   a: 1
      // };
      // var o2 = {
      //   b: 2
      // };
      // var o3 = {
      //   c: 3
      // };
      //
      // var obj = Object.assign(o1, o2, o3);
      // console.log(obj); // { a: 1, b: 2, c: 3 }
      // console.log(o1);
      //
      // let target = Object.defineProperty({}, 'foo', {
      //   value: 1,
      //   //写入，或者只读，bol控制
      //   writable: true
      // });
      // console.log(target);
      // Object.assign(target, {
      //   bar: 2
      // });
      // console.log(target);
      // Object.assign(target, {
      //   foo: 2
      // })
      // console.log(target);



  // const defaultState = 0;
  // const chatReducer = (state = defaultState, action) => {
  //   const {type, payload} = action;
  //   switch (type) {
  //     case 'ADD_CHAT':
  //       return Object.assign({}, state, {
  //         chatLog: state.chatLog.concat(payload)
  //       });
  //     case 'CHANGE_STATUS':
  //       return Object.assign({}, state, {
  //         statusMessage: payload
  //       });
  //     case 'CHANGE_USERNAME':
  //       return Object.assign({}, state, {
  //         userName: payload
  //       });
  //     default:
  //       return state;
  //   }
  // };
  }

  render() {
    // const Counter = ({value}) => (
    //   <h1>{value}</h1>
    // )

    return (
      <div className="banner-top">
        { /* <Counter value="你好啊"></Counter> */ }
        <div>
          <img src="./img/王宝强头像.png" alt=""/>
          <span className="name">夏天</span>
        </div>
        <p className="signature">"年轻的时候，我们也曾走失，还好，兜兜转转，原来你还在这里。"</p>
        <div className="change-Bg-wrap">
          <img className="change-Bg" src="./img/切换背景.png" alt=""/></div>
        <div className="banner-top-shadow"></div>

      </div>
    )
  }
}

class MineContent extends Component {
  state = {
    show: 0
  }
  dropOut() {
    this.setState({
      show: 1
    });
  }
  clsWrap() {
    this.setState({
      show: 0
    });
    console.log(123);
  }
  componentWillMount() {
    fetch("./data/data.json")
      .then(res => res.json())
      .then(data => console.log(data.news))
      .catch(e => console.log("Fetch failed!", e))
  }
  render() {
    const NavList = ({wrap, icon, title, num}) => (
      <li className={wrap}>
        <div>
          <img className="logo" src={icon} alt=""/>
          <span>{title}</span>
        </div>
        <span className="info-num">{num}</span>
        <img className="jiantou" src="./img/yule_jiantou.png" alt=""/>
      </li>
    )
    return (
      <div className="banner-bottom">
        <ul>
          <Link to={"/mine/info"}>
              <NavList wrap="change-mine-data" icon="./img/mine_mine.png" title="修改个人资料"/>
          </Link>
          <Link to={"/mine/message"}>
            <NavList wrap="mine-info" icon="./img/mine_newinfo.png" title="我的消息" num="20"/>
          </Link>
          <Link to={"/mine/store"}>
            <NavList wrap="mine-store" icon="./img/mine_store.png" title="我的收藏"/>
          </Link>
            <NavList wrap="mine-send" icon="./img/mine_send.png" title="我的发布"/>
        </ul>
        <p className="dropOut" onClick={() => this.dropOut()}>退出登录</p>
        <div className={this.state.show === 0
        ? "drop-out-wrap"
        : "drop-out-show"} ref="drop">
          <div className="drop-out">
            <h2>提示</h2>
            <p>是否安全退出当前账号？</p>
            <div className="dropout-box">
              <span onClick={() => this.clsWrap()} className="cancel">取消</span>
              <span onClick={() => this.clsWrap()} className="sure bgcolor">确认</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// class ChangeBg extends Component {
//   render() {
//     return (
//       <div className="bg-wrap">
//         <div className="bg-box">
//           <div className="box-top">
//             <span>相册</span>
//             <input type="file"/>
//           </div>
//           <div className="box-close">
//             <span>取消</span>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
