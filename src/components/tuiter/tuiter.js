import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
import WhoToFollowList from "./WhoToFollowList";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
const Tuiter = () => {
  return(
      <>
        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
        <ExploreScreen/>
        {/*<PostSummaryItem p={{*/}
        {/*  "topic": "Web Development",*/}
        {/*  "userName": "",*/}
        {/*  "title": "jQuery",*/}
        {/*  "time": "last week",*/}
        {/*  "image": "/tuiter/jq.jpg",*/}
        {/*  "tweets": "122K"*/}
        {/*}}/>*/}

        {/*<PostSummaryList/>*/}

        {/*<ExploreComponent/>*/}

        {/*<NavigationSidebar active="home"/>*/}
        {/*<WhoToFollowListItem someone={{*/}
        {/*  avatarIcon: '/tuiter/v.jpg',*/}
        {/*  userName: 'Virgin Galactic',*/}
        {/*  handle: 'virgingalactic',*/}
        {/*}}*/}
        {/*/>*/}
        {/*<WhoToFollowList/>*/}

        </>


  )
};

export default Tuiter;