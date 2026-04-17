import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import './main.css';
import './Blog.css';
import './BlogAddons.css';

// ─── EmailJS config ─────────────────────────────────────────────────────────
// Replace these with your own values from https://www.emailjs.com/
const EMAILJS_SERVICE_ID  = 'service_6b0rbuc';
const EMAILJS_TEMPLATE_ID = 'template_bqijtya';
const EMAILJS_PUBLIC_KEY  = 'QICH0i1piXaX-4Rtx';
// ────────────────────────────────────────────────────────────────────────────

// Utility: estimate reading time from a string
function readingTime(text) {
  const words = text.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

// ─── Subscribe Widget ────────────────────────────────────────────────────────
function SubscribeWidget() {
  const [email,   setEmail]   = useState('');
  const [status,  setStatus]  = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const loadEmailJS = () =>
    new Promise((resolve, reject) => {
      if (window.emailjs) { resolve(window.emailjs); return; }
      const s = document.createElement('script');
      s.src     = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
      s.onload  = () => resolve(window.emailjs);
      s.onerror = () => reject(new Error('EmailJS failed to load'));
      document.head.appendChild(s);
    });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    setStatus('loading');
    setMessage('');
    try {
      const ejs = await loadEmailJS();
      await ejs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { subscriber_email: email, reply_to: email },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setMessage("You're in! 🎉 Welcome to the NeonFlow newsletter.");
      setEmail('');
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="subscribe-widget">
      <div className="subscribe-inner">
        <div className="subscribe-badge">NEWSLETTER</div>
        <h3 className="subscribe-heading">Stay in the loop</h3>
        <p className="subscribe-sub">
          Get NeonFlow articles on tech, productivity &amp; code — straight to your inbox.
        </p>
        <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
          <div className="subscribe-input-wrap">
            <input
              type="email"
              className="subscribe-input"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setMessage(''); }}
              disabled={status === 'loading' || status === 'success'}
              aria-label="Email address"
            />
            <button
              type="submit"
              className={`subscribe-btn ${status}`}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' ? <span className="btn-spinner" />
               : status === 'success' ? '✓ Subscribed'
               : 'Subscribe →'}
            </button>
          </div>
          {message && (
            <p className={`subscribe-feedback ${status}`}>{message}</p>
          )}
        </form>
        <p className="subscribe-note">No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  );
}

// ─── Pages ───────────────────────────────────────────────────────────────────

function Home() {
  return (
    <div>
      {/* FIX: was using class= (HTML attr) instead of className= (JSX) */}
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="welcome-title">Home Page</h2>
          <p className="welcome-subtitle">Welcome to the <span>NeonFlow</span></p>
          <section className="info-card">
            <h3>Today we are advancing on a new Chapter</h3>
            <p>
              The passion and desire for making new things keeps driving our intentions toward
              up-to-date technologies. This is the beginning of a new era in tech: Web development,
              Mobile App Development, and exclusive designs. Currently focusing on Typescript with
              React and of course MERN stack.
            </p>
            <p>Remotely ain't a problem anymore. We are available for your desires</p>
          </section>
        </div>
      </header>
    </div>
  );
}

function About() {
  return (
    // FIX: was using class= instead of className=
    <div>
      <h2>About Page</h2>
      <p>NeonFlow is all-resource portifolio designed by Cedrique</p>
      <h1>Who is Cedrique?</h1>
      <p>
        Cedrique is a passionate developer and designer focused on creating innovative solutions
        that enhance user experience. With a background in computer science and a keen eye for
        aesthetics, Cedrique combines technical expertise with creative vision to build applications
        that are both functional and visually appealing.
      </p>
      <h2>Skills</h2>
      <div className="skills">
        <ul className="skills-list">
          <li>JavaScript</li><li>React</li><li>Node.js</li>
          <li>UI/UX Design</li><li>Java</li><li>Database Design</li>
          <li>TensorFlow</li><li>Arduino IoT</li><li>HTML</li><li>CSS</li>
        </ul>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div>
      <h2>Projects Page</h2>
      <p>Here are some of Cedrique's notable projects:</p>
      <ul>
        <li>
          <h3><a href='https://ehaho.xo.je'>Ehaho Online Market</a></h3>
          <p>An e-commerce platform that connects buyers and sellers in a seamless online marketplace.</p>
        </li>
        <li>
          <h3>NeonFlow Application</h3>
          <p>A productivity app designed to enhance workflow with neon-themed aesthetics and powerful features.</p>
        </li>
        <li>
          <h3><a href='https://object-detection-five-vert.vercel.app'>Object Detection System</a></h3>
          <p>A computer vision project that identifies and classifies objects in real-time video feeds.</p>
        </li>
        <li>
          <h3><a href='https://rida-1.onrender.com'>RIDA</a></h3>
          <p>Driver Booking Platform in Rwanda</p>
        </li>
        <li>
          <h3>Noote</h3>
          <p>A note-taking app that helps users organize their thoughts and ideas efficiently.</p>
        </li>
      </ul>
    </div>
  );
}

function Blog() {
  const initialBlogs = [
    {
      id: 0,
      title: 'Hello World from NeonFlow!',
      content: 'New to NeonFlow blogs, Jump right in the sidebar to read more in the Tech journey with NeonFlow. The product of Cedrique, and his other products include: Ehaho, Noote, RIDA, ODP(Object-Detection),....Better reach out!',
      date: 'Dec 23, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 1,
      title: 'Should AI be terrifying or resourceful?',
      content: 'As in this decade Ai still thrives in making daily tasks more easily many people see their importances through the mirror of terror that they may do tasks that were supposed to be for the humans but Ai should be seen through the mirror of resourcefulness',
      date: 'Dec 24, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 2,
      title: 'The Future of Work',
      content: 'As remote work becomes versatile here are some useful sources of the information:"DevList: Which provides news obut best paying companies, top rated skills of the week, News in Tech... "',
      date: 'Dec 26, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 3,
      title: 'Top 5 Productivity Hacks from NeonFlow',
      content: "Discover some of the Tech Productivity hacks at NeonFlow- Coding has rules: \"Never repeat youself\",\"To every bug there is a relevant correction\",\"Stay updated\", \"Learn to work with Ai\", \"Don't ever think you know it all\".",
      date: 'Dec 26, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 4,
      title: 'My 5 Must-Have VS Code Extensions for 2025',
      content: 'Productivity is about working smarter, not harder. At NeonFlow, we rely on these extensions to keep our code clean: 1. Prettier for formatting, 2. ES7+ React snippets for speed, 3. GitLens for version tracking, 4. Postman for endpoints checking, and 5. Error Lens to catch bugs instantly.',
      date: 'Dec 27, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 5,
      title: 'Why Low-Code will not Kill Software Engineering',
      content: 'There is a common fear that Drag-and-Drop builders will replace developers. However, at NeonFlow, we believe the opposite. These tools handle the "what", but developers are needed for the "how" and the "why." The future belongs to the "Hybrid Developer" who uses AI and low-code to build faster, more complex systems.',
      date: 'Dec 27, 2025',
      likes: 0, dislikes: 0
    },
    {
      id: 6,
      title: 'The Power of Daily Habits',
      content: "Small daily habits shape our lives more than big, occasional efforts. Whether it's reading a few pages, exercising for 10 minutes, or drinking more water, consistency compounds over time. The key is to start small and stay consistent rather than aiming for perfection. Over weeks and months, these small actions build momentum and create meaningful change.",
      date: 'Apr 02, 2026',
      likes: 0, dislikes: 0
    },
    {
      id: 7,
      title: 'Digital Minimalism in a Connected World',
      content: "In a world full of notifications and constant connectivity, digital minimalism encourages intentional technology use. By reducing screen time and focusing on meaningful interactions, individuals can improve their focus and well-being. It's about using technology as a tool, not letting it control your time and attention.",
      date: 'Apr 05, 2026',
      likes: 0, dislikes: 0
    },
    {
      id: 8,
      title: 'Write Code for Humans First',
      content: 'Code is read more often than it is written. Following clean code principles—clear naming, small functions, and proper structure—makes your work easier for others (and your future self) to understand. Influenced by ideas from Robert C. Martin, writing readable code is one of the most valuable skills a developer can build.',
      date: 'Apr 09, 2026',
      likes: 0, dislikes: 0
    },
    {
  id: 9,
  title: "The NeonFlow Guide to Mastering Middleware",
  content: [
    "Security is the silent backbone of every great application, yet it is often the most overlooked phase of development. At NeonFlow, we treat authentication not as a final step, but as a core architectural requirement. By implementing robust JSON Web Token (JWT) strategies and strictly isolating environment variables, you ensure that your project is protected from the ground up. Whether you are building a digital tax system or a simple task manager, the goal is the same: create a seamless experience for the user while maintaining a fortress on the backend that prevents unauthorized access and data leaks.",
    "True mastery comes when you stop viewing middleware as a hurdle and start seeing it as a tool for scalability. As we integrate complex payment gateways like MTN and Airtel Money, the logic we write today must be clean enough to handle the traffic of tomorrow. Using Next.js and Tailwind CSS allows us to build beautiful interfaces, but it's the efficient process scheduling and clean GitHub repository management that keeps the engine running. Remember, every line of code you refactor today is an investment in your future self, allowing you to deploy with confidence and keep the NeonFlow brand at the cutting edge of innovation."
  ],
  date: "April 17, 2026",
  likes: 0,
  dislikes: 0
}
  ];

  const [blogs,      setBlogs]      = useState(initialBlogs);
  const [selectedId, setSelectedId] = useState(0);

  // FIX: vote buttons were commented out — restored and working
  const handleVote = (id, type) => {
    setBlogs(prev => prev.map(b =>
      b.id === id ? { ...b, [type]: b[type] + 1 } : b
    ));
  };

  const activeBlog  = blogs.find(b => b.id === selectedId);
  const activeIndex = blogs.findIndex(b => b.id === selectedId);
  const prevBlog    = activeIndex > 0                  ? blogs[activeIndex - 1] : null;
  const nextBlog    = activeIndex < blogs.length - 1   ? blogs[activeIndex + 1] : null;

  return (
    <div className="blog-page-container">
      <div className="blog-intro">
        <h2>Blog Page</h2>
        <p>Welcome to the NeonFlow blog! Here you'll find articles on productivity, technology trends, and tips for getting the most out of NeonFlow.</p>
      </div>

      <div className="blog-layout">
        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          <h3 className="sidebar-heading">Explore Stories</h3>
          <div className="sidebar-list">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => setSelectedId(blog.id)}
                className={`sidebar-card ${selectedId === blog.id ? 'active' : ''}`}
              >
                <div className="card-content">
                  <span className="card-category">{blog.category || 'Insight'}</span>
                  <h4 className="card-title">{blog.title}</h4>
                  <span className="card-date">{blog.date || 'Just now'}</span>
                </div>
                {selectedId === blog.id && <div className="active-indicator" />}
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="active-post">
          {activeBlog ? (
            <div>
              <span className="post-label">INSIGHT</span>
              <h1 className="post-display-title">{activeBlog.title}</h1>

              {/* FIX: meta was hardcoded as "• Kill Software Engineering" — now shows date + reading time */}
              <p className="post-meta-info">
                {activeBlog.date}
                <span className="post-reading-time">· {readingTime(activeBlog.content)}</span>
              </p>

              <div className="post-body">
                <p>{activeBlog.content}</p>
              </div>

              {/* FIX: vote buttons restored and wired up */}
              <div className="vote-actions">
                <button
                  className="vote-btn like-btn"
                  onClick={() => handleVote(activeBlog.id, 'likes')}
                  aria-label="Like"
                >
                  👍 <span>{activeBlog.likes}</span>
                </button>
                <button
                  className="vote-btn dislike-btn"
                  onClick={() => handleVote(activeBlog.id, 'dislikes')}
                  aria-label="Dislike"
                >
                  👎 <span>{activeBlog.dislikes}</span>
                </button>
              </div>

              {/* NEW: prev / next navigation */}
              <nav className="post-nav">
                {prevBlog ? (
                  <button className="post-nav-btn" onClick={() => setSelectedId(prevBlog.id)}>
                    <span className="nav-arrow">←</span>
                    <span className="nav-label">
                      <span className="nav-hint">Previous</span>
                      <span className="nav-title">{prevBlog.title}</span>
                    </span>
                  </button>
                ) : <div />}

                {nextBlog ? (
                  <button className="post-nav-btn next" onClick={() => setSelectedId(nextBlog.id)}>
                    <span className="nav-label" style={{ textAlign: 'right' }}>
                      <span className="nav-hint">Next</span>
                      <span className="nav-title">{nextBlog.title}</span>
                    </span>
                    <span className="nav-arrow">→</span>
                  </button>
                ) : <div />}
              </nav>
            </div>
          ) : (
            <h2>Select a blog from the sidebar to read</h2>
          )}
        </main>
      </div>

      {/* Newsletter subscription */}
      <SubscribeWidget />
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>If you have any questions or would like to get in touch, please reach out via the following methods:</p>
      <ul>
        <li>Email: <a href="mailto:cedrique000@gmail.com">cedrique000@gmail.com</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/Karangwa Cedrick">Cedrique's LinkedIn</a></li>
        <li>GitHub: <a href="https://github.com/Cedrick-KC">Cedrique's GitHub</a></li>
      </ul>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

function MyList() {
  // FIX: removed unused `count` / `setCount` state

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/about"    element={<About />}    />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog"     element={<Blog />}     />
        <Route path="/contact"  element={<Contact />}  />
      </Routes>

      <div className="stakeholders">
        <h3>The Gallery</h3>
        <div className="marquee">
          <div className="marquee-track">
            <span>Noote</span>
            <span>RIDA</span>
            <span>Ehaho</span>
            <span>ODP(Object-Detection-App)</span>
            <span>NeonFlow Labs</span>
            <span>Noote</span>
            <span>RIDA</span>
            <span>Ehaho</span>
            <span>ODP(Object-Detection-App)</span>
            <span>NeonFlow Labs</span>
          </div>
        </div>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MyList />);
