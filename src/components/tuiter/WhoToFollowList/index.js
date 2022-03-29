import React from "react";
import who from "../data/who.json"
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = (

) => {
  const who = useSelector((state) => state.who);

  return (
      <div>
        <h1>Who To Follow!!</h1>
      </div>
); }
export default WhoToFollowList;