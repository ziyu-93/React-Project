import React from "react";
import ReactDOM from "react-dom";
import News from "./module/news/js/news.js";
import Star from "./module/star/js/star.js";
import StarDetail from "./module/star/js/star_detail.js";
import Entertainment from "./module/entertainment/js/entertainment.js";
import BrokeWall from "./module/brokewall/js/brokewall.js";
import Mine from "./module/mine/js/mine.js";
import MineInfo from "./module/mine/js/mine_info.js";
import NewDetail from "./module/news/js/new_detail.js";
import BrokePic from "./module/brokewall/js/brokewallPic.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
        <Route exact path="/new" component={News}/>
        <Switch>
            <Route exact path="/new/:id" component={NewDetail}/>
            <Route exact path="/brokewall/:picId" component={BrokePic}/>
            <Route exact path="/star/:starId" component={StarDetail}/>
        </Switch>
        <Route exact path="/star" component={Star}/>
        <Route exact path="/entertainment" component={Entertainment}/>
        <Route exact path="/brokewall" component={BrokeWall}/>
        <Route exact path="/mine" component={Mine}/>
        <Route exact path="/mine/info" component={MineInfo}/>
    </div>
</Router>, document.getElementById("root"));
