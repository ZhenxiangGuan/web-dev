import PostSummaryList from "../PostSummaryList/PostSummaryItem.js";
import psi from "../PostSummaryList/posts.js";

const ExploreComponent = () => {
  return(`<div class="row mb-3">
          <div class="col-11">
          <div class="wd-box rounded-pill">
          <div class="form-group ">

              <i class="fa fa-search"></i>
            <input type="text" class = "wd-no-border " placeholder="Search Twitter">
          </div>
          </div>
        </div>
        <div class = "col-1">
          <i class="fa-solid fa-gear fa-2x wd-gear-color"></i>
        </div>
        
        
           </div>
           
           <ul class="nav mb-2 nav-tabs ">
                      <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item">

          <div class="d-sm-none d-md-block">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
          </div>

        </li>
           </ul>
                <div class="mt-3 align-content-center wd-image-relative">
        <img src="../nasa.jpg"  width="100%">
        <div class="wd-text-absolute"> <b>SpaceX's Starship</b></div>
      </div>
      
            <ul class="list-group">
           ${psi.map(exploreItem => {
    return PostSummaryList(exploreItem);
  }).join('')}
           </ul>
    `);
}
export default ExploreComponent;
