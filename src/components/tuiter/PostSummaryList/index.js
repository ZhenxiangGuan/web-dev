import React from "react";
import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem";


const PostSummaryList = (

) => {
  return (
      <ul className="list-group">
        {
          posts.map((ndx, post) => {
            return(
                <PostSummaryItem key={ndx} p={post}/>
            );
          })
        }
      </ul>
  ); }
export default PostSummaryList;