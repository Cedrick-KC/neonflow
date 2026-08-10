import './blogSidebar.css';
import React from "react";

function BlogSidebar({ blogs, selectedId, setSelectedId }) {
  return (
    <aside className="blog-sidebar" aria-label="Article Selection Sidebar">
      <h3 className="blog-sidebar-title">Articles ({blogs.length})</h3>

      <ul className="sidebar-list">
        {blogs.map((blog) => {
          const isSelected = selectedId === blog.id;

          return (
            <li key={blog.id}>
              <button
                type="button"
                onClick={() => setSelectedId(blog.id)}
                className={`sidebar-item ${isSelected ? "active" : ""}`}
                aria-current={isSelected ? "true" : undefined}
              >
                <span className="sidebar-item-category">
                  {blog.category || "Engineering"}
                </span>

                <span className="sidebar-item-title">{blog.title}</span>

                <span className="sidebar-item-date">
                  {blog.date || "Recent"}
                </span>

                {isSelected && <span className="active-indicator" />}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default BlogSidebar;