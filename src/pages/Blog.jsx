// Blog.jsx
import React, { useState } from "react";
import blogsData from "../data/blogs";
import BlogSidebar from "../components/BlogSidebar";
import BlogPost from "../components/BlogPost";
import SubscribeWidget from "../components/SubscribeWidget";
import "./Blog.css";

function Blog() {
  const [blogs, setBlogs] = useState(blogsData);
  const [selectedId, setSelectedId] = useState(blogsData[0]?.id || 0);

  const handleVote = (id, type) => {
    setBlogs((prev) =>
      prev.map((blog) =>
        blog.id === id
          ? { ...blog, [type]: (blog[type] || 0) + 1 }
          : blog
      )
    );
  };

  const activeBlog = blogs.find((b) => b.id === selectedId);
  const activeIndex = blogs.findIndex((b) => b.id === selectedId);

  const prevBlog = activeIndex > 0 ? blogs[activeIndex - 1] : null;
  const nextBlog = activeIndex < blogs.length - 1 ? blogs[activeIndex + 1] : null;

  return (
    <div className="blog-page-container">
      <header className="blog-intro">
        <span className="section-kicker">ENGINEERING INSIGHTS</span>
        <h2>Technical Journal</h2>
        <p>
          Deep dives into modern frontend architecture, state management, UI design systems, and web performance.
        </p>
      </header>

      <div className="blog-layout">
        <BlogSidebar
          blogs={blogs}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <BlogPost
          activeBlog={activeBlog}
          handleVote={handleVote}
          prevBlog={prevBlog}
          nextBlog={nextBlog}
          setSelectedId={setSelectedId}
        />
      </div>

      <SubscribeWidget />
    </div>
  );
}

export default Blog;