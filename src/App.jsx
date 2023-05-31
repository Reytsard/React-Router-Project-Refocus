import { useCallback, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import postsData from "./posts.json";
import RootLayout from "./layouts/RootLayout";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import "./App.css";
import "./Styles/main.css";
import { MyContext } from "./plugins/MyContext";
import PostDetails from "./pages/PostDetails";

function App() {
  const [posts, setPosts] = useState(postsData);
  const likeHandler = (e, key) => {
    e.preventDefault();
    e.target.classList.toggle("fa-heart-o");
    e.target.classList.toggle("fa-heart");
    e.target.classList.toggle("active");
    const leftSide = posts.slice(0, key);
    const rightSide = posts.slice(key + 1);
    const post = posts.slice(key, key + 1)[0];
    if (post.isLiked) {
      post.isLiked = false;
      post.likes -= 1;
    } else {
      post.isLiked = true;
      post.likes += 1;
    }
    const newArr = [...leftSide, post, ...rightSide];
    setPosts(newArr);
  };
  const commentHandler = (e, key, comment) => {
    e.preventDefault();

    const leftSide = posts.slice(0, key);
    const rightSide = posts.slice(key + 1);
    const post = posts.slice(key, key + 1)[0];
    post.comments.push(comment);
    const newArr = [...leftSide, post, ...rightSide];
    setPosts(newArr);
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="posts" element={<Posts addPost={setPosts} />} />
        <Route
          path="posts/:id"
          element={
            <PostDetails
              likeHandler={likeHandler}
              commentHandler={commentHandler}
            />
          }
        />
        <Route
          path="posts/create-post"
          element={<CreatePost addPost={setPosts} />}
        />
      </Route>
    )
  );
  /*
    TODO:
    1. Install React router 
    2. Create several routes (and their corresponding React components): 
       main page (posts list), post page (/post/:id), new post page (/post/create)
    3. All the posts data will be stored in the state (hook above). 
       In order to manipulate this data (create new posts, etc), you need to 
       pass the setPosts function down the components tree.
       You can do it using React Context to avoid props drilling
       Note: this approach of storing all the data in the top-level component is not optimal,
       but for now (until we learn state management tools (Redux, etc.)) it's ok to use it like that. 
    4. For styling you can plain css files, or you can install and use SASS/SCSS - it's up to you.
    5. Additional (optional) task: in order to persist the posts data between page reloads, try to use 
       browser's localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
       Note: It's generally not a good idea (usually data comes from backend API and is stored on the server), 
       but until we learn how to interact with the API, for learning purposes - it's fine.

    Notes:
    1. PostImage is a pre-built component that uploads and returns an image URL. {addImageSuccessful} is a prop from the component that is used to get the image file URL that you can attach to the post. No need to change any of the code of the component just use the function to get the image URL.
  */

  // Example usage of the addImageSuccessful prop
  // const handleImageSuccess = (imageUrl) => {
  //   console.log(imageUrl);
  // };

  return (
    <div className="App">
      <MyContext.Provider value={posts}>
        <RouterProvider router={router} />
      </MyContext.Provider>
      {/* <PostsList posts={posts} /> */}
    </div>
  );
}

export default App;
