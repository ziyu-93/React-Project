import React from "react";
import ReactDOM from "react-dom";
import News from "./module/news/js/news.js";
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
import Mine from "./module/mine/js/mine.js";
import MineInfo from "./module/mine/js/mine_info.js";
import NewDetail from "./module/news/js/new_detail.js";
import BrokePic from "./module/brokewall/js/brokewallPic.js";
import SignIn from "./module/user/js/sign_in.js";
import SignUp from "./module/user/js/sign_up.js";
import ForgetPs from "./module/user/js/forgetPs.js";
import ChangePs from "./module/user/js/changePs.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div id="page">
      <Switch>
          <Route exact path="/new/:newsId" component={NewDetail}/>
          <Route exact path="/brokewall/:picId" component={BrokePic}/>
          <Route exact path="/star/star_search" component={StarSearch}/>
          <Route exact path="/star/:starId" component={StarDetail}/>
          <Route exact path="/star/:starId/starIntro" component={StarIntro}/>
          <Route exact path="/entertainment/tv/:tvId" component={EnterTvDetail}/>
          <Route exact path="/entertainment/movie/:movieId" component={EnterTvDetail}/>
          <Route exact path="/entertainment/variety/:varietyId" component={EnterVarietyDetail}/>
          <Route exact path="/entertainment/movie" component={EnterMovie}/>
          <Route exact path="/entertainment/tv" component={EnterTv}/>
          <Route exact path="/entertainment/variety" component={EnterVariety}/>
      </Switch>
      <Route exact strict path="/new" component={News}/>
      <Route exact path="/star" component={Star}/>
      <Route exact path="/entertainment" component={Entertainment}/>
      <Route exact path="/brokewall" component={BrokeWall}/>
      <Route exact path="/mine" component={Mine}/>
      <Route exact path="/mine/info" component={MineInfo}/>
      <Route exact path="/user" component={SignIn}/>
      <Route exact path="/user/sign_up" component={SignUp}/>
      <Route exact path="/user/forgetPs" component={ForgetPs}/>
      <Route exact path="/user/ChangePs" component={ChangePs}/>
    </div>
</Router>, document.getElementById("root"));
