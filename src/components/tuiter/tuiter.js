import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";


const Tuiter = () => {
  return(
      <>

        <h1>Tuiter</h1>


        <Link to="/hello">
          Hello
        </Link> |
        <Link to="/">
          Labs
        </Link>
        <NavigationSidebar active="home"/>
      </>

  )
};

export default Tuiter;