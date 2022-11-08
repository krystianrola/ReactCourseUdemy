import React, {Suspense} from 'react';

import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
// import Welcome from "../pages/Welcome";
// import BlogLayout from "../pages/BlogLayout";
import /*BlogPosts,*/ {loader as blogPostsLoader} from "../pages/BlogPosts";
import PostDetails, {loader as postDetailLoader} from "../pages/PostDetails";
import NewPost, {action as newPostAction } from "../pages/NewPost";
import RootLayout from "../components/UI/RootLayout";
import ErrorPage from "../pages/ErrorPage";

const Welcome = React.lazy(() => import("./../pages/Welcome"));
const BlogLayout = React.lazy(() => import("./../pages/BlogLayout"));
const BlogPosts = React.lazy(() => import("../pages/BlogPosts"));

const router = createBrowserRouter(createRoutesFromElements(
    <Route
        path={"/"}
        element={<RootLayout />}
        errorElement={<ErrorPage />}
    >
        <Route path="/" element={<Welcome />} />
        <Route path="/blog" element={<BlogLayout />}>
            <Route
                index={true}
                element={<BlogPosts />}
                loader={blogPostsLoader }
            />
            <Route
                path=":id"
                element={<PostDetails />}
                loader={postDetailLoader}
            />
        </Route>
        <Route
            path="/blog/new"
            element={<NewPost />}
            action={newPostAction}
        />
    </Route>
))

function App() {
  return (
      <Suspense fallback={<p>Loading...</p>}>
          <RouterProvider
              router={router}
          />
      </Suspense>
  );
}

export default App;
