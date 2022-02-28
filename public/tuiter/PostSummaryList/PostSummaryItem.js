const PostSummaryItem = (posts) => {
  return (`        
        <li class="list-group-item " >
          <div class="row align-items-center">
            <div class="col-md-10 col-sm-8 ">
            <span class="wd-topic-style mt-0">${posts.topic}</span><br/>
            <b class="wd-font-14">${posts.userName}</b> <i class="fa-solid fa-circle-check"></i>
              <span class="wd-pt-style"> - ${posts.time} </span><br/>
              <p class="wd-font-13 wd-margin-bot-0"> <b>
                ${posts.title}</b></p>
              <span class="wd-pt-style mt-0">${posts.tweets} Tweets</span>
            </div>
            <div class="col-md-2 col-sm-4 text-center">
              <img src="${posts.image}" class="wd-pp-style">
            </div>
          </div>
        </li>
`);
}

export default PostSummaryItem;