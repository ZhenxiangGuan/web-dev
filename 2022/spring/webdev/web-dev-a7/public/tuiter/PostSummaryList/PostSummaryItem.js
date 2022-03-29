import exploreItems from "./posts.js";

function isTopic(t) {
  if (t.topic == "") {
    return(``)

  }
  else {
    return (
        `<span class="wd-topic-style mt-0">${t.topic}</span><br/>`
    )
  }
}

function isTweets(num) {
  if (num.tweets == null) {
    return(``)

  }
  else {
    return (
        `<span class="wd-pt-style mt-0">${num.tweets} Tweets</span>`
    )
  }
}


const PostSummaryItem = (p) => {
  return (`        
        <li class="list-group-item " >
          <div class="row align-items-center">
            <div class="col-md-10 col-sm-8 ">
            ${isTopic(p)}
            <b class="wd-font-14">${p.userName}</b> <i class="fa-solid fa-circle-check"></i>
              <span class="wd-pt-style"> - ${p.time} </span><br/>
              <p class="wd-font-13 wd-margin-bot-0"> <b>
                ${p.title}</b></p>
                ${isTweets(p)}
            </div>
            <div class="col-md-2 col-sm-4 text-center">
              <img src="${p.image}" class="wd-pp-style">
            </div>
          </div>
        </li>
`);
}

export default PostSummaryItem;