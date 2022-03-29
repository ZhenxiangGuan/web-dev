import React from "react";

const WhoToFollowListItem = (
    {
      someone = {
        avatarIcon: '/tuiter/n.png',
        userName: 'NASA',
        handle: 'NASA',
      }
    }
) => {
  return (
        <li  className="list-group-item" >
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-md-3">
              <img src={someone.avatarIcon} width="48"  className="rounded-circle float-start"  alt="avatar"/>
            </div>

            <div className="col-xxl-7 col-xl-6 col-md-5" style={{paddingLeft: 2+'em'}}>
              <b>{someone.userName} </b>
              <i className="fas fa-circle-check"></i><br/>
              @{someone.handle}
            </div>

            <div className="col-xxl-3 col-xl-4 col-md-4">
              <div className="text-center">
                <button type= "button" className="btn btn-primary rounded-pill ">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </li>);
}

export default WhoToFollowListItem;