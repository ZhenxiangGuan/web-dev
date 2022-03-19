import React from "react";
import who from "./who.json"
import WhoToFollowListItem from "./WhoToFollowListItem";


const WhoToFollowList = (

) => {
  return (
            <ul className="list-group">
        <li className="list-group-item" >
         <b> Who to follow</b>
        </li>

              {
                who.map(who => {
                  return(
                      <WhoToFollowListItem someone={who}/>
                  );
                })
              }
        </ul>
); }
export default WhoToFollowList;