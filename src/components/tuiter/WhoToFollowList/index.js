import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = (

) => {
  const who = useSelector((state) => state.who);
  console.log(who)
  return (
      <ul className="list-group">
        <li className="list-group-item">
          <b>Who To Follow</b>
        </li>
        {who.map(who => {
          return(<WhoToFollowListItem someone={who}/>
          );
        })}

      </ul>
); }
export default WhoToFollowList;