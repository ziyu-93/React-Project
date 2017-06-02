import { Header, Content, Logo } from "./../../../public/public.js";
import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./../css/star.css"
export default class Star extends Component {
  static defaultProps = {}
  render() {
    return (
      <div id="star">
                <Logo/>
                <Header current={2}></Header>
                <Content haveTop={true} haveBottom={false}>
                    <StarContent/>
                </Content>
            </div>
    )
  }
}
class StarContent extends Component {
  render() {
    return (
      <div className="banner">
                <div className="banner-top">
                    <img src="./img/star_logo.png" alt=""/>
                  <img src="./img/star_search.png" alt=""/></div>
                <div className="banner-bottom">
                    <ul className="bottom-list">
                        <li className="item">
                              <Link to={"/star/2"}><img src="./img/star_name1.png" alt=""/></Link>
                            <p>
                                <span>鹿晗</span>
                            </p>
                        </li>

                        <li className="item">
                            <img src="./img/star_name2.png" alt=""/>
                            <p>
                                <span>王丽坤</span>
                            </p>
                        </li>
                        <li className="item">
                            <img src="./img/star_name3.png" alt=""/>
                            <p>
                                <span>许嵩</span>
                            </p>
                        </li>
                        <li className="item">
                            <img src="./img/star_name4.png" alt=""/>
                            <p>
                                <span>张韶涵</span>
                            </p>
                        </li>
                        <li className="item">
                            <img src="./img/star_name5.png" alt=""/>
                            <p>
                                <span>Anglebaby</span>
                            </p>
                        </li>
                        <li className="item">
                            <img src="./img/star_name6.png" alt=""/>
                            <p>
                                <span>TFboys</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
    )
  }
}
