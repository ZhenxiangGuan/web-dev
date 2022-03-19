import React from "react";

function isTopic(t) {

  if (t.topic === "") {
    return(``)

  }
  else {
    return (
        <>
        <span className="wd-topic-style mt-0">{t.topic}</span><br/>
        </>
    )
  }
}

function isTweets(num) {
  if (num.tweets == null) {
    return(``)

  }
  else {
    return (
        <span className="wd-pt-style mt-0">{num.tweets} Tweets</span>
    )
  }
}


const PostSummaryItem = ( {
      p = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "/tuiter/rjs.jpg"
      }
    }
) => {
  return (
        <li className="list-group-item " >
          <div className="row align-items-center">
            <div className="col-md-10 col-sm-8 ">
            {isTopic(p)}
            <b className="wd-font-14">{p.userName}</b>
            <i className="fa-solid fa-circle-check"/>
              <span className="wd-pt-style"> - {p.time} </span><br/>
              <p className="wd-font-13 wd-margin-bot-0">
              <b>{p.title}</b></p>
                {isTweets(p)}
            </div>
            <div className="col-md-2 col-sm-4 text-center">
              <img src={p.image} className="wd-pp-style" alt="pp"/>
            </div>
          </div>
        </li>
);
}

export default PostSummaryItem;