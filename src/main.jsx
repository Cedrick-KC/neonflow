import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';
import './main.css';
import './Blog.css';

function Home() {
  return (
   <div>
    <header class="hero-section">
  <div class="hero-content">
    <h2 class="welcome-title">Home Page</h2>
    <p class="welcome-subtitle">Welcome to the <span>NeonFlow</span></p>
    
    <section class="info-card">
      <h3>Today we are advancing on a new Chapter</h3>
      <p>
        The passion and desire for making new things keeps driving our intentions toward up-to-date technologies. 
        This is the beginning of a new era in tech: Web development, Mobile App Development, and exclusive designs. Currently focusing on Typescript with React and of course MERN stack.
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
 <div>   
  <h2>About Page</h2>
  <p>NeonFlow is all-resource portifolio designed by Cedrique</p>
  <h1>Who is Cedrique?</h1>
  <p>Cedrique is a passionate developer and designer focused on creating innovative solutions that enhance user experience. With a background in computer science and a keen eye for aesthetics, Cedrique combines technical expertise with creative vision to build applications that are both functional and visually appealing.</p>
  <h2>Skills</h2>
  <div class="skills">
  <ul class="skills-list">
    <li>JavaScript</li>
    <li>React</li>
    <li>Node.js</li>
    <li>UI/UX Design</li>
    <li>Java</li>

    <li>Database Design</li>
    <li>TensorFlow</li>
    <li>Arduino IoT</li>
    <li>HTML</li>
    <li>CSS</li>
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
      likes: 0,
      dislikes: 0    
    },
    {
      id: 1,
      title: 'Should AI be terrifying or resourceful?',
      content: 'As in this decade Ai still thrives in making daily tasks more easily many people see their importances through the mirror of terror that they may do tasks that were supposed to be for the humans but Ai should be seen through the mirror of resourcefulness',
      date: 'Dec 24, 2025',
      likes: 0,
      dislikes: 0
    },
    {
      id: 2,
      title: 'The Future of Work',
      content: 'As remote work becomes versatile here are some useful sources of the information:"DevList: Which provides news obut best paying companies, top rated skills of the week, News in Tech... "',
      date: 'Dec 26, 2025',
      likes: 0,
      dislikes: 0
    },
    {
      id: 3,
      title: 'Top 5 Productivity Hacks from NeonFlow',
      content: 'Discover some of the Tech Productivity hacks at NeonFlow- Coding has rules: "Never repeat youself","To every bug there is a relevant correction","Stay updated", "Learn to work with Ai", "Don\'t ever think you know it all".',
      date: 'Dec 26, 2025',
      likes: 0,
      dislikes: 0
    },
    {
      id: 4,
      title: 'My 5 Must-Have VS Code Extensions for 2025',
      content: 'Productivity is about working smarter, not harder. At NeonFlow, we rely on these extensions to keep our code clean: 1. Prettier for formatting, 2. ES7+ React snippets for speed, 3. GitLens for version tracking, 4. Postman for endpoints checking, and 5. Error Lens to catch bugs instantly.',
      date: 'Dec 27, 2025',
      likes: 0,
      dislikes: 0
    },
    {
      id: 5,
      title: 'Why Low-Code will not Kill Software Engineering',
      content: 'There is a common fear that Drag-and-Drop builders will replace developers. However, at NeonFlow, we believe the opposite. These tools handle the "what", but developers are needed for the "how" and the "why." The future belongs to the "Hybrid Developer" who uses AI and low-code to build faster, more complex systems.',
      date: 'Dec 27, 2025',
      likes: 0,
      dislikes: 0
    }
  ];

  const [blogs, setBlogs] = useState(initialBlogs);
  const [selectedId, setSelectedId] = useState(0);
  
  const handleVote = (id, type) => {
    setBlogs(prevBlogs => prevBlogs.map(blog => {
      if (blog.id === id) {
        return { ...blog, [type]: blog[type] + 1 };
      }
      return blog;
    }));
  };
  
  const activeBlog = blogs.find(blog => blog.id === selectedId);

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
                  <span className="card-category">{blog.category || "Insight"}</span>
                  <h4 className="card-title">{blog.title}</h4>
                  <span className="card-date">{blog.date || "Just now"}</span>
                </div>
                {selectedId === blog.id && <div className="active-indicator" />}
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="active-post">
          {activeBlog ? (
            <div>
              <span className="post-label">INSIGHT</span>
              <h1 className="post-display-title">{activeBlog.title}</h1>
              <p className="post-meta-info">{activeBlog.date} • Kill Software Engineering</p>
              <div className="post-body">
                <p>{activeBlog.content}</p>
              </div>
              
              {/*<div className="vote-actions">
                <button 
                  className="vote-btn"
                  onClick={() => handleVote(activeBlog.id, 'likes')}
                >
                  👍 {activeBlog.likes}
                </button>
                <button 
                  className="vote-btn"
                  onClick={() => handleVote(activeBlog.id, 'dislikes')}
                >
                  👎 {activeBlog.dislikes}
                </button>
              </div>*/}
            </div>
          ) : (
            <h2>Select a blog from the sidebar to read</h2>
          )}
        </main>
      </div>
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



function MyList() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
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

      {/* duplicate for smooth loop */}
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
