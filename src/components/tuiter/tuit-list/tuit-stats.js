import React from "react";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
      <div className="wd-flex-container mt-2 align-items-center">
        <div className="wd-width-4 wd-flex-container  ">
          <a href="comments.html">
            <i className="far fa-comment wd-white-icon">
            </i>
          </a>
          <div className="wd-next-icon ">{tuit.stats.comments}</div>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <a href="retuit.html">
            <i className="fas fa-retweet wd-white-icon"/>
          </a>
          <div className="wd-next-icon">{tuit.stats.retuits}</div>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <span onClick={likeTuit}>
            {tuit.liked &&
            <i className="fas fa-heart me-1" style={{color: 'red'}}/>}
            {
              !tuit.liked &&
              <i className="far fa-heart me-1"/>
            }
            {tuit.stats && tuit.stats.likes}
          </span>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <a href="someplace.html">
            <i className="fa-solid fa-up-right-from-square wd-white-icon"/>

          </a>
        </div>

      </div>
);
}
export default TuitStats;

