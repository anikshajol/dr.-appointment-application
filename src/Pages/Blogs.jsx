import React from "react";
import { useLoaderData, useNavigation } from "react-router";
import Loader from "../Components/Loader";
import Blog from "../Components/Blog";

const Blogs = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  const blogs = useLoaderData();
  // console.log(blogs);

  return (
    <>
      {isNavigating && <Loader />}
      <div className="md:px-34 px-4 pb-8">
        <h2 className="text-5xl text-center font-bold mt-14">Blogs</h2>
        <p className="text-center text-gray-500 py-6">
          Let's explore some basic concept that will make you a good developer
        </p>
        <div className="flex flex-col gap-7">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
