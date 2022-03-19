import React from "react";
import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(
      <>
      <div className="row mb-3">
          <div className="col-11">
          <div className="wd-box rounded-pill">
          <div className="form-group">

            <i className="fa fa-search"/>
            <input type="text" className = "wd-no-border" placeholder="Search Twitter"/>
          </div>
          </div>
        </div>
        <div className = "col-1">
          <i className="fa-solid fa-gear fa-2x wd-gear-color"/>
        </div>
        
        
           </div>
           
           <ul className="nav mb-2 nav-tabs ">
                      <li className="nav-item">
          <a className="nav-link active" href="for-you.html">For you</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="trending.html">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="news.html">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="sports.html">Sports</a>
        </li>
        <li className="nav-item">

          <div className="d-sm-none d-md-block">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </div>

        </li>
           </ul>

  <div className="mt-3 align-content-center wd-image-relative">
        <img src="/tuiter/nasa.jpg"  width="100%"/>
        <div className="wd-text-absolute"> <b>SpaceX's Starship</b></div>
      </div>

        <PostSummaryList/>
</>
    );
}
export default ExploreComponent;

