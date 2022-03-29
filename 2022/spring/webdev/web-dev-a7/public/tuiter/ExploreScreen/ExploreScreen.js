import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";

(function ($) {
  $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
            ${NavigationSidebar()}
        </div>
        
        <div class ="col-6 col-xxl-6 col-xl-6 col-lg-7 col-md-10 col-sm-10 ">
            ${ExploreComponent()}
            </div>

        <div class="col-4 col-xxl-4 col-xl-4 col-lg-4 d-lg-block d-none">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
