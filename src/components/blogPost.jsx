import './BlogPost.css';
import React from "react";
import { readingTime } from "../utils/readingTime";

function BlogPost({
  activeBlog,
  handleVote,
  prevBlog,
  nextBlog,
  setSelectedId
}) {
  if (!activeBlog) {
    return (
      <main className="blog-post empty-post">
        <h2>Select an article from the sidebar to read</h2>
      </main>
    );
  }

  const timeToRead =
    typeof readingTime === "function" && activeBlog.content
      ? readingTime(activeBlog.content)
      : "3 min read";

  return (
    <main className="blog-post">
      <header className="post-header">
        <span className="sidebar-item-category">
          {activeBlog.category || "ENGINEERING"}
        </span>

        <h1 className="post-title">{activeBlog.title}</h1>

        <div className="post-meta">
          <time>{activeBlog.date || "Published recently"}</time>
          <span>•</span>
          <span>{timeToRead}</span>
        </div>
      </header>

      {activeBlog.image && (
        <img
          src={activeBlog.image}
          alt={activeBlog.title}
          className="post-image"
        />
      )}

      <article className="post-content">
        {typeof activeBlog.content === "string"
          ? activeBlog.content.split("\n\n").map((para, idx) => (
              <p key={idx}>{para}</p>
            ))
          : activeBlog.content}
      </article>

      {/* Voting Bar */}
      <div className="post-voting">
        <span className="post-voting-label">Was this article helpful?</span>

        <div className="vote-buttons">
          <button
            type="button"
            className="vote-btn"
            onClick={() => handleVote(activeBlog.id, "likes")}
            aria-label="Upvote"
          >
            👍 <span>{activeBlog.likes ?? 0}</span>
          </button>

          <button
            type="button"
            className="vote-btn"
            onClick={() => handleVote(activeBlog.id, "dislikes")}
            aria-label="Downvote"
          >
            👎 <span>{activeBlog.dislikes ?? 0}</span>
          </button>
        </div>
      </div>

      {/* Next/Previous Controls */}
      <nav className="post-navigation" aria-label="Article navigation">
        {prevBlog ? (
          <button
            type="button"
            className="nav-card prev"
            onClick={() => setSelectedId(prevBlog.id)}
          >
            <span className="nav-card-label">← Previous</span>
            <span className="nav-card-title">{prevBlog.title}</span>
          </button>
        ) : (
          <div />
        )}

        {nextBlog ? (
          <button
            type="button"
            className="nav-card next"
            onClick={() => setSelectedId(nextBlog.id)}
          >
            <span className="nav-card-label">Next →</span>
            <span className="nav-card-title">{nextBlog.title}</span>
          </button>
        ) : (
          <div />
        )}
      </nav>
    </main>
  );
}

export default BlogPost;