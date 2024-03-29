import React, { useContext } from "react";
import Post from "./Post";

import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  // Now we want to use the post to creae the post but we are not
  /* not using props we have everything in context provider 
  so in order to use it we will use  **useContext hook** */

  const { postList } = useContext(PostListData);

  // console.log(postList);
  /* useContext hook returns back an object  aur upar me us object ke andar ek array hai
  jispe neeche humlog map method laga paa rhe hai*/

  return (
    <>
      {/* Now based on the above postList we have to make the post
    so we will use map method to traverse and return a new array  */}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
        // passing props
      ))}
    </>
  );
};

export default PostList;
