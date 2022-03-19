import React from "react";
import posts from "./posts.json"
import PostSummaryItem from "./PostSummaryItem";


const PostSummaryList = (

) => {
  return (
      <ul className="list-group">
        {
          posts.map(post => {
            return(
                <PostSummaryItem p={post}/>
            );
          })
        }
      </ul>
  ); }
export default PostSummaryList;