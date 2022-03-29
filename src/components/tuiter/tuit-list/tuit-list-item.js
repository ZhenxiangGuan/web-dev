import React from "react";
import "./tuitlist.css";

const TuitListItem = ({tuit}) => {
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
            <i className="fa-solid fa-x wd-white-icon fa-pull-right"/>
            <div>{tuit.tuit}</div>

            <div className="wd-flex-container mt-2 align-items-center">
              <div className="wd-width-4 wd-flex-container  ">
                <a href="#">
                  <i className="far fa-comment wd-white-icon">
                  </i>
                </a>
                <div className="wd-next-icon ">{tuit.stats.comments}</div>
              </div>

              <div className="wd-width-4 wd-flex-container">
                <a href="#">
                  <i className="fas fa-retweet wd-white-icon"/>
              </a>
              <div className="wd-next-icon">{tuit.stats.retuits}</div>
            </div>

            <div className="wd-width-4 wd-flex-container">
              <a href="#">
                <i className="fas fa-heart wd-white-icon"/>

            </a>
            <div className="wd-next-icon">{tuit.stats.likes}</div>
          </div>

            <div className="wd-width-4 wd-flex-container">
              <a href="#">
                <i className="fa-solid fa-up-right-from-square wd-white-icon"/>

            </a>
          </div>

            </div>


          </td>



          </tr>
        </table>

      </li>
  )
}


export default TuitListItem;