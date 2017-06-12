import React from "react";
import ReactDOM from "react-dom";
import News from "./module/news/js/news.js";
import NewDetail from "./module/news/js/new_detail.js";
import Star from "./module/star/js/star.js";
import StarDetail from "./module/star/js/star_detail.js";
import StarSearch from "./module/star/js/star_search.js";
import StarIntro from "./module/star/js/star_introduction.js";
import Entertainment from "./module/entertainment/js/entertainment.js";
import EnterMovie from "./module/entertainment/js/entertainment_movie.js";
import EnterTv from "./module/entertainment/js/entertainment_tv.js";
import EnterVariety from "./module/entertainment/js/entertainment_variety.js";
import EnterTvDetail from "./module/entertainment/js/entertainment_tv_detail.js";
import EnterVarietyDetail from "./module/entertainment/js/entertainment_variety_detail.js";
import BrokeWall from "./module/brokewall/js/brokewall.js";
import BrokePic from "./module/brokewall/js/brokewallPic.js";
import BrokeVideo from "./module/brokewall/js/brokewallVideo.js";

import Mine from "./module/mine/js/mine.js";
import MineMessage from "./module/mine/js/mine_message.js";
import MineStorePic from "./module/mine/js/mine_storePic.js";
import MineStoreVideo from "./module/mine/js/mine_storeVideo.js";

import MineStoreNews from "./module/mine/js/mine_storeNews.js";
import MineRouter from "./module/mine/js/mine_info.js";
import NewsRouter from "./module/news/js/news.js";

import SignIn from "./module/user/js/sign_in.js";
import SignUp from "./module/user/js/sign_up.js";
import ForgetPs from "./module/user/js/forgetPs.js";
import ChangePs from "./module/user/js/changePs.js";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// const HSL = ({ match: { params } }) => (
//   <div>hsl({params.h}, {params.s}%, {params.l}%)</div>
// )
// const HSL = () => (
//   <Router>
//     <div>
//
//     </div>
// </Router>
// )
ReactDOM.render(
  <Router>
    <div className="page">
      { /* Redirect 重定向 */ }
          { /* <Redirect strict form="/" to="/new"/> */ }
          <Route exact path="/" component={News}/>
          <Route exact path="/mine" component={Mine}/>
          <Route exact path="/entertainment" component={Entertainment}/>
          <Route exact path="/user" component={SignIn}/>
          <Route exact path="/star" component={Star}/>
          <Route exact path="/brokewall" component={BrokeWall}/>
      <Switch>
          <Route exact path="/star/star_search" component={StarSearch}/>
          <Route exact path="/star/:starId" component={StarDetail}/>
          <Route exact path="/brokewall/pic/:picId" component={BrokePic}/>
          <Route exact path="/brokewall/video/:videoId" component={BrokeVideo}/>
      </Switch>
          <Route exact path="/new/:newsId" component={NewDetail}/>
          <Route exact path="/star/:starId/starIntro" component={StarIntro}/>
          <Route exact path="/entertainment/movie" component={EnterMovie}/>
          <Route exact path="/entertainment/tv" component={EnterTv}/>
          <Route exact path="/entertainment/variety" component={EnterVariety}/>
          <Route exact path="/entertainment/tv/:tvId" component={EnterTvDetail}/>
          <Route exact path="/entertainment/movie/:movieId" component={EnterTvDetail}/>
          <Route exact path="/entertainment/variety/:varietyId" component={EnterVarietyDetail}/>
          <Route exact path="/mine/info" component={MineRouter}/>
          <Route exact path="/mine/message" component={MineMessage}/>
          <Route exact path="/mine/store" component={MineStorePic}/>
          <Route exact path="/mine/store/video" component={MineStoreVideo}/>
          <Route exact path="/mine/store/news" component={MineStoreNews}/>
          <Route exact path="/user/sign_up" component={SignUp}/>
          <Route exact path="/user/forgetPs" component={ForgetPs}/>
          <Route exact path="/user/ChangePs" component={ChangePs}/>
      </div>
    </Router>, document.getElementById("root"));
