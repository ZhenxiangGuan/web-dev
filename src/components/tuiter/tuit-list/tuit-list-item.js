import React from "react";
import "./tuitlist.css";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";

import {
  deleteTuit}
  from "../../../actions/tuits-actions";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();

  return (

    <li className="list-group-item " >
      <div className="row">
        <div className="col-1 p-0 ms-2 me-3">
          <img className="rounded-circle wd-avatar-small" src={tuit['logo_image']} alt="avatar" />
        </div>
        <div className="col p-0">
          <b>{tuit.postedBy && tuit.postedBy.username}</b>
          <b className="wd-padding-left-5 text-secondary">@{tuit.handle}</b>
          <i onClick={() =>
              deleteTuit(
                  dispatch, tuit)}
            className="fas fa-remove fa-2x
                  fa-pull-right me-2"/>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  )
}


export default TuitListItem;