import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "./ExploreComponent";

const ExploreScreen = () => {
  return (
        <div className="row mt-2">
        <div className="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
            <NavigationSidebar   active = 'explore'/>
        </div>
        
        <div className ="col-6 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 ">
            <ExploreComponent/>
            </div>

        <div className="col-4 col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none">
            <WhoToFollowList/>
        </div>
        </div>
    );
}

export default ExploreScreen;
