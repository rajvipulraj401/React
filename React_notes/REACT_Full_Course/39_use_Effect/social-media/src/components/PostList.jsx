import React, { useContext } from "react";
import Post from "./Post";

import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  // Now we want to use the post to creae the post but we are not
  /* not using props we have everything in context provider 
  so in order to use it we will use  **useContext hook** */

  const { postList, addInitialPosts } = useContext(PostListData);

  // console.log(postList);
  /* useContext hook returns back an object  aur upar me us object ke andar ek array hai
  jispe neeche humlog map method laga paa rhe hai*/

  const handleGetPostsClick = () => {
    // console.log("get posts");
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPosts(data.posts);

        // hum yaha pe ye method me data .posts me jo fetch krne ke
        // baad jo object me array miala wo hum is method me pass kr diye hai as an argument
      });
    // But we don't want to log post we want to add all of the post .
  };
  return (
    <>
      {/* Now based on the above postList we have to make the post
    so we will use map method to traverse and return a new array  */}

      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick}></WelcomeMessage>
      )}

      {postList.map((post) => (
        <Post key={post.id} post={post} />
        // passing props
      ))}
    </>
  );
};

export default PostList;
