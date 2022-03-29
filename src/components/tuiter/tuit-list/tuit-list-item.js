import React from "react";
import "./tuitlist.css";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";

const TuitListItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({ type: 'delete-tuit', tuit })
  };



  return (

    <li className="list-group-item " >
      <div className="row">
        <div className="col-1 p-0 ms-2 me-3">
          <img className="rounded-circle wd-avatar-small" src={tuit['logo-image']} alt="avatar" />
        </div>
        <div className="col p-0">
          <b>{tuit.postedBy.username}</b>
          <b className="wd-padding-left-5 text-secondary">@{tuit.handle}</b>
          <i onClick={() =>
            deleteTuit(tuit)}
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