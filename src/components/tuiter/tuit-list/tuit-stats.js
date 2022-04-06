import React from "react";
import {useDispatch} from "react-redux";
import {UPDATE_TUIT, updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();

  // from office hour
  const thumbUp = (tuit) => {
    if (!tuit.liked && !tuit.disliked){
      tuit.likes++
      tuit.liked = true;
    }
    else if (tuit.liked && !tuit.disliked) {
      tuit.likes--;
      tuit.liked =false;
    }
    return updateTuit(dispatch, tuit, UPDATE_TUIT)
  }

  // from office hour
  const thumbDown = (tuit) => {
    if (!tuit.disliked && !tuit.liked){
      tuit.dislikes++
      tuit.disliked = true;
    }
    else if (tuit.disliked && !tuit.liked) {
      tuit.dislikes--;
      tuit.disliked =false;
    }
    return updateTuit(dispatch, tuit, UPDATE_TUIT)
  }

  return (
      <div className="wd-flex-container mt-2 align-items-center">
        <div className="wd-width-4 wd-flex-container  ">
          <a href="comments.html">
            <i className="far fa-comment wd-white-icon">
            </i>
          </a>
          <div className="wd-next-icon ">{tuit.comments}</div>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <a href="retuit.html">
            <i className="fas fa-retweet wd-white-icon"/>
          </a>
          <div className="wd-next-icon">{tuit.retuits}</div>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <span onClick={() => thumbUp(tuit)}>

            {tuit.liked &&
            <i className="fas fa-thumbs-up me-1" style={{color: 'red'}}/>}
            {
              !tuit.liked &&
              <i className="far fa-thumbs-up me-1"/>
            }
            { tuit.likes}
          </span>
        </div>

        <div className="wd-width-4 wd-flex-container">
          <span onClick={() => thumbDown(tuit)}>

            {tuit.disliked &&
            <i className="fas fa-thumbs-down me-1" style={{color: 'red'}}/>}
            {
              !tuit.disliked &&
              <i className="far fa-thumbs-down me-1"/>
            }
            {tuit.dislikes}
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

