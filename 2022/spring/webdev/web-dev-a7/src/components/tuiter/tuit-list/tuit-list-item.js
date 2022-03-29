import React from "react";
import "./tuitlist.css";
import {useDispatch} from "react-redux";
 import TuitStats from "./tuit-stats";

const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };



  return (

      <li className="list-group-item " >
        <table>
          <tr>
          <td className="align-top">
            <img className="rounded-circle wd-avatar-small" src={tuit['logo-image']} alt="avatar"/>
          </td>


          <td className= "wd-width-100  align-top wd-padding-left-10">
            <b>{tuit.postedBy.username}</b>
            <b className="wd-padding-left-5 text-secondary">@{tuit.handle}</b>
            <i onClick={() =>
                deleteTuit(tuit)}
               className="fas fa-remove fa-2x
                  fa-pull-right"/>
            <div>{tuit.tuit}</div>
            <TuitStats tuit={tuit}/>

          </td>



          </tr>
        </table>

      </li>
  )
}


export default TuitListItem;