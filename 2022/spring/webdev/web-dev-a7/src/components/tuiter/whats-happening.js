import React, {useState} from "react";
import "./whats-happening.css"
import {useDispatch}
  from "react-redux";
const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
      = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
      tuit: whatsHappening
    });
  }
  return (
        <table>
          <tr className="mb-5">
            <td className="align-top">
            <img className="rounded-circle wd-avatar-45" src="/tuiter/gg.jpg"/>
            </td>


       <td className="wd-width-max">
      <textarea className="wd-text-area" placeholder="What's happening?" value={whatsHappening}
                onChange={(event) =>
                    setWhatsHappening(event.target.value)}>
      </textarea>
         <span>
           <i className="fa-solid fa-image wd-icon-color"/>
           <i className="fa-solid fa-chart-line wd-margin-left-4 wd-icon-color"/>
           <i className="fa-solid fa-face-smile wd-margin-left-4 wd-icon-color"/>
           <i className="fa-solid fa-calendar wd-margin-left-4 wd-icon-color"/>
         </span>
        <button className="mt-3 mb-3 btn btn-primary  rounded-pill fa-pull-right" onClick={tuitClickHandler}>
          Tweet
        </button>
       </td>

          </tr>
        </table>
  );
}
export default WhatsHappening;