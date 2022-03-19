import React from "react";

const WhoToFollowListItem = (    {
      someone = {
        avatarIcon: '../../images/nasa.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return (`
        <li  className="list-group-item" >
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-md-3">
              <img src="${someone.avatarIcon}" className=" wd-width-new " ">
            </div>

            <div className="col-xxl-7 col-xl-6 col-md-5" style="padding-left: 2px">
              <b className="wd-font-14 wd-white-space">${someone.userName} </b><i className="fa-solid fa-circle-check"></i><br/>
              <p className="wd-lightgray-13">@${someone.handle}</p>
            </div>

            <div className="col-xxl-3 col-xl-4 col-md-4">
              <div className="text-center">
                <button type= "button" className="btn btn-primary rounded-pill wd-btn-change wd-margin-top-0 ">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </li>`);
}

export default WhoToFollowListItem;