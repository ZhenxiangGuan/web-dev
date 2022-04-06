import React, {useEffect, useState} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitListItem from "./tuit-list-item.js";
import {
  createTuit,
  deleteTuit,
  findAllTuits}
  from "../../../actions/tuits-actions.js";


const TuitList = () => {

  const tuits = useSelector(
    state => state.tuits);

  const dispatch = useDispatch();

  const [newTuit, setNewTuit] =
      useState({tuit: 'New tuit'});

  useEffect(() =>
          findAllTuits(dispatch),
      []);

console.log(tuits)


  return (

    <div className="pos-relative">

      <button onClick={() =>
          createTuit(dispatch, newTuit)}
              className="btn btn-primary float-end">
        Tuit
      </button>
      <textarea className="form-control w-75"
    onChange={(e) =>
        setNewTuit({
          ...newTuit,
          tuit: e.target.value
        })}/>

      <ul className="ttr-tuits list-group">

        {
          tuits.map && tuits.map(tuit =>
            <TuitListItem key={tuit._id}
              tuit={tuit} />)

        }



      </ul>


    </div>
  );
}

export default TuitList;