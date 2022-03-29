import React, { useState } from "react";
import "./whats-happening.css"
import { useDispatch }
  from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
    = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({
      type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
    <div className="pos-relative">
      <div className="row">
        <div className="col-1">
          <img alt="post logo" className="rounded-circle wd-avatar-45" src="/tuiter/gg.jpg" />
        </div>
        <div className="col-11">
          <textarea className="col wd-text-area" placeholder="What's happening?" value={whatsHappening}
            onChange={(event) =>
              setWhatsHappening(event.target.value)}>
          </textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-1"></div>
        <div className="col">
          <i className="fa-solid fa-image wd-icon-color" />
          <i className="fa-solid fa-chart-line wd-margin-left-4 wd-icon-color" />
          <i className="fa-solid fa-face-smile wd-margin-left-4 wd-icon-color" />
          <i className="fa-solid fa-calendar wd-margin-left-4 wd-icon-color" />
        </div>
        <div className="col">
          <button className="mt-3 mb-3 btn btn-primary  rounded-pill fa-pull-right" onClick={tuitClickHandler}>Tweet</button>
        </div>

      </div>
    </div>
  );
}
export default WhatsHappening;