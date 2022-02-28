const WhoToFollowListItem = (someone) => {
  return (`        
        <li  class="list-group-item" >
          <div class="row align-items-center">
            <div class="col-xxl-2 col-xl-2 col-md-3">
              <img src="${someone.avatarIcon}" class=" wd-width-new " ">
            </div>

            <div class="col-xxl-7 col-xl-6 col-md-5" style="padding-left: 2px">
              <b class="wd-font-14 wd-white-space">${someone.userName} </b><i class="fa-solid fa-circle-check"></i><br/>
              <p class="wd-lightgray-13">@${someone.handle}</p>
            </div>

            <div class="col-xxl-3 col-xl-4 col-md-4">
              <div class="text-center">
                <button type= "button" class="btn btn-primary rounded-pill wd-btn-change wd-margin-top-0 ">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </li>`);
}

export default WhoToFollowListItem;