import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";

import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  // Now we want to use the post to creae the post but we are not
  /* not using props we have everything in context provider 
  so in order to use it we will use  **useContext hook** */

  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    // we can also destructure controller.signal
    fetch("https://dummyjson.com/posts", { signal })
      //signal is a memeber of controller
      // and when we are fetchiing we can pass signal as the second argument
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up UseEffect.");
      controller.abort();
    };
  }, []);

  // console.log(postList);
  /* useContext hook returns back an object  aur upar me us object ke andar ek array hai
  jispe neeche humlog map method laga paa rhe hai*/

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.posts);
  //       addInitialPosts(data.posts);
  //     });

  //   setDataFetched(true);
  // }

  // But we don't want to log post we want to add all of the post .

  return (
    <>
      {/* Now based on the above postList we have to make the post
    so we will use map method to traverse and return a new array  */}

      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <WelcomeMessage></WelcomeMessage>}

      {!fetching &&
        postList.map((post) => (
          <Post key={post.id} post={post} />
          // passing props
        ))}
    </>
  );
};

export default PostList;
