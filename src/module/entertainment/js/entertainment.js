import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react"
//import "./newsCss/news.css"
import { createStore } from 'redux';
export default class Entertainment extends Component {
  static defaultProps = {}
  render() {
    return (
      <div className="news">
                <Logo/>
                <Header current={3}></Header>
                <Content haveTop={true} haveBottom={false}>
                    <Swiper/>
                </Content>
            </div>
    )
  }
}


const Con = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const store = createStore(reducer)

class Swiper extends Component {
  componentDidMount() {
    this.starSwiper = new Swiper(".swiper-container", {
      autoplay: 2000,
      loop: true,
      pagination: '.swiper-pagination',
      effect: 'fade'
    })
    console.log(123);
  }
  componentWillUpdate() {
    this.starSwiper.refresh();
  }
  // onIncrement = () => {
  //   store.dispatch({
  //     type: 'INCREMENT'
  //   });
  //   console.log(312);
  // }
  // onDecrement = () => {
  //   store.dispatch({
  //     type: 'DECREMENT'
  //   });
  //   console.log(112);
  // }
  render() {
    return (
      <div className="swiper">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide"><img src="./img/brokeNew_loop.png" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/brokeNew_loop.png" alt=""/></div>
                        <div className="swiper-slide"><img src="./img/brokeNew_loop.png" alt=""/></div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
                <Con
      value={store.getState()}
      onIncrement={() => store.dispatch({
        type: 'INCREMENT'
      })}
      onDecrement={() => store.dispatch({
        type: 'DECREMENT'
      })}
      />
            </div>
    )
  }
}
