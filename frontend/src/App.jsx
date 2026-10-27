
import { useEffect, useState } from 'react'
import './App.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000'

function App() {
  const [apiMessage, setApiMessage] = useState('')
  const [apiLoading, setApiLoading] = useState(true)
  const [apiError, setApiError] = useState('')

  useEffect(() => {
    async function fetchBackendMessage() {
      try {
        const response = await fetch(`${API_URL}/api/hello`)

        if (!response.ok) {
          throw new Error('Backend response failed')
        }

        const data = await response.json()
        setApiMessage(data.message || 'Backend connected successfully!')
        setApiError('')
      } catch {
        setApiError('Backend se connection nahi ho saka.')
      } finally {
        setApiLoading(false)
      }
    }

    fetchBackendMessage()
  }, [])

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          My<span>Portfolio.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-link">
            Contact
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

            <h1>
              Hi, I'm a <span>Python Backend</span> Developer.
            </h1>

            <p className="hero-description">
              I build reliable backend applications and modern web
              experiences using Python, FastAPI, React and databases.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Projects ↗
              </a>

              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>Python</h3>
                <p>Backend</p>
              </div>

              <div>
                <h3>FastAPI</h3>
                <p>REST APIs</p>
              </div>

              <div>
                <h3>React</h3>
                <p>Frontend</p>
              </div>
            </div>

            <div className="api-status" aria-live="polite">
              <span
                className="api-status-dot"
                style={{
                  background: apiLoading
                    ? '#d8b15d'
                    : apiError
                      ? '#ff6464'
                      : '#42d99b',
                }}
              />

              {apiLoading ? (
                <p>Connecting to Python backend...</p>
              ) : apiError ? (
                <p>{apiError} Make sure the backend server is running.</p>
              ) : (
                <p>Backend Connected: {apiMessage}</p>
              )}
            </div>
          </div>

          <div className="hero-card">
            <div className="card-top">
              <span className="status-dot" />
              Available for Projects
            </div>

            <div className="code-icon">&lt;/&gt;</div>

            <h2>Building Ideas</h2>
            <h2 className="gradient-text">Into Reality.</h2>

            <p>
              Clean code. Smart solutions. Better experiences.
            </p>

            <div className="code-box">
              <p><span>01</span> developer = "Python"</p>
              <p><span>02</span> backend = "FastAPI"</p>
              <p><span>03</span> frontend = "React"</p>
              <p className="code-success">✓ Ready to build</p>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <p className="section-label">ABOUT ME</p>
          <h2>Turning ideas into useful applications.</h2>

          <p className="section-description">
            I'm a developer interested in building web applications,
            creating APIs and solving problems through code. I enjoy
            learning new technologies and improving my development skills.
          </p>
        </section>

        <section className="section skills-section" id="skills">
          <p className="section-label">MY SKILLS</p>
          <h2>Technologies I work with</h2>

          <div className="skills-grid">
            <div className="skill-card">
              <span>🐍</span>
              <h3>Python</h3>
              <p>Backend development</p>
            </div>

            <div className="skill-card">
              <span>⚡</span>
              <h3>FastAPI</h3>
              <p>REST API development</p>
            </div>

            <div className="skill-card">
              <span>⚛️</span>
              <h3>React</h3>
              <p>Frontend development</p>
            </div>

            <div className="skill-card">
              <span>🗄️</span>
              <h3>SQLAlchemy</h3>
              <p>Database integration skills</p>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>

          <div className="project-card">
            <div>
              <span className="project-tag">FULL STACK</span>
              <h3>Truck Management System</h3>

              <p>
                A web application concept for managing trucks, drivers
                and transportation operations using React and FastAPI.
              </p>
            </div>

            <span className="project-arrow">↗</span>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="section-label">GET IN TOUCH</p>
          <h2>Have a project in mind?</h2>
          <p>Let's connect and build something useful together.</p>

          <a
            href="mailto:your-email@example.com"
            className="btn btn-primary"
          >
            Send Me an Email ↗
          </a>

          <p className="email-note">
            Replace the example email with your actual email address.
          </p>
        </section>
      </main>

      <footer>
        <a href="#home" className="logo">
          My<span>Portfolio.</span>
        </a>

        <p>
          © {new Date().getFullYear()} My Portfolio. Built with React.
        </p>
      </footer>
    </div>
  )
}

export default App
