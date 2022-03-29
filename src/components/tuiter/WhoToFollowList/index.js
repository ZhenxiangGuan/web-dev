import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = (

) => {
  const who = useSelector((state) => state.who);
  return (
      <ul className="list-group">
        <li className="list-group-item">
          <b>Who To Follow</b>
        </li>
        {who.map(who => {
          return(<WhoToFollowListItem key={who.handle} someone={who}/>
          );
        })}

      </ul>
); }
export default WhoToFollowList;