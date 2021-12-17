// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./usefetch";
const Home = () => {
  const { data: blogs, isPendind, error } = useFetch("http://localhost:8000/blogs")
  //   const [name, setName] = useState('mario')

  //   const handleDelete = (id) => {
  //     const newBlogs = blogs.filter((blog) => blog.id !== id);
  //     setBlogs(newBlogs);
  //   };

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPendind && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
