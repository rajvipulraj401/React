import React, { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  // use Ref hook help us to select the tags without doing re render this is similar like we
  // do in javascript when we want to select an element

  const { addPost } = useContext(PostList);

  const userIdElement = useRef();

  const postTitleElement = useRef();

  const postBodyElement = useRef();

  const reactionsElement = useRef();

  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    // How to split string by space in js  (arrey ye tags ek array hai islea)

    // after getting the value from input set the value to blank
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    // console.log("sending response");
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        // console.log("got reponse", post);
        addPost(post);
      });
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter your User Id here
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id "
          ref={userIdElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today "
          ref={postTitleElement}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
          ref={postBodyElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post "
          ref={reactionsElement}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space "
          ref={tagsElement}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
