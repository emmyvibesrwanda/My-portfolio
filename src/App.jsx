import React, { useState, useEffect } from 'react'
import { FaYoutube, FaTwitter, FaLinkedin, FaBars, FaTimes, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Typing animation states
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const roles = ['Gamer', 'YouTuber', 'Software Engineer']
  
  // Typing animation effect
  useEffect(() => {
    let timeout
    const currentRole = roles[roleIndex]
    
    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
        timeout = setTimeout(() => {}, 500)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 100)
      }
    } else {
      if (displayText === currentRole) {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000)
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1))
        }, 150)
      }
    }
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
      
      const sections = ['home', 'about', 'projects', 'gaming', 'skills', 'services', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 70
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'skills', label: 'Skills' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ]

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    glassCard: {
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255,255,255,0.1)',
      transition: 'all 0.3s'
    },
    gradientText: {
      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(0,0,0,0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={styles.container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
              <h1 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold',
                background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                margin: 0,
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                Emmanuel BIMENYIMANA
              </h1>
              <p style={{ fontSize: '0.8rem', color: '#888', margin: 0 }}>AKA CYPHER</p>
            </div>
            
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: activeSection === item.id ? '#a855f7' : '#ccc',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0.5rem 0',
                    position: 'relative',
                    transition: 'color 0.3s'
                  }}
                  className="desktop-nav-item"
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: '0',
                      right: '0',
                      height: '2px',
                      background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                      borderRadius: '2px',
                      animation: 'slideIn 0.3s ease-out'
                    }} />
                  )}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'none'
              }}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {isMenuOpen && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
              paddingTop: '1rem',
              marginTop: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
            className="mobile-menu">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ccc',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    padding: '0.75rem',
                    textAlign: 'left'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav-item { display: block !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .desktop-nav-item { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes blink {
          0%, 100% { border-color: #a855f7; }
          50% { border-color: transparent; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
        @keyframes slideIn {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        paddingTop: '80px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          overflow: 'hidden',
          zIndex: -1
        }}>
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'rgba(168, 85, 247, 0.3)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 6s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '400px',
            height: '400px',
            background: 'rgba(236, 72, 153, 0.3)',
            borderRadius: '50%',
            filter: 'blur(100px)',
            animation: 'float 6s ease-in-out infinite 2s'
          }} />
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            animation: 'fadeInUp 0.8s ease-out',
            marginBottom: '2rem'
          }}>
            <div style={{
              width: '180px',
              height: '180px',
              margin: '0 auto',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-10px',
                left: '-10px',
                right: '-10px',
                bottom: '-10px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
                animation: 'pulse 2s ease-in-out infinite',
                opacity: 0.5
              }} />
              <img 
                src="/profile.jpg"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '4px solid rgba(168, 85, 247, 0.5)',
                  transition: 'transform 0.3s',
                  position: 'relative',
                  zIndex: 1,
                  background: 'linear-gradient(135deg, #1a1a2e, #16213e)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '20px',
                height: '20px',
                background: '#4ade80',
                borderRadius: '50%',
                border: '3px solid #1a1a2e',
                zIndex: 2,
                animation: 'pulse 2s ease-in-out infinite'
              }} />
            </div>
          </div>

          <h1 style={{
            fontSize: '3rem',
            marginBottom: '0.5rem',
            animation: 'fadeInUp 0.8s ease-out'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundSize: '200% 200%',
              animation: 'gradient 3s ease infinite'
            }}>
              Emmanuel BIMENYIMANA
            </span>
          </h1>
          <p style={{ 
            fontSize: '1rem', 
            color: '#888', 
            marginBottom: '1rem',
            animation: 'fadeInUp 0.8s ease-out 0.1s backwards'
          }}>AKA CYPHER</p>
          
          <div style={{ 
            fontSize: '1.8rem', 
            marginBottom: '1rem', 
            minHeight: '80px',
            animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
          }}>
            <span style={{ color: '#a855f7' }}>• </span>
            <span style={{
              background: 'linear-gradient(135deg, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              borderRight: '3px solid #a855f7',
              paddingRight: '5px',
              animation: 'blink 1s infinite'
            }}>
              {displayText}
            </span>
          </div>
          
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '2rem',
            color: '#999',
            maxWidth: '600px',
            margin: '0 auto 2rem auto',
            animation: 'fadeInUp 0.8s ease-out 0.3s backwards'
          }}>
            Building awesome experiences through code and gaming. 
            50K+ subscribers • 5+ years experience • Top 1% Gamer
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
          }}>
            <button 
              onClick={() => window.open('https://www.youtube.com/@CYPHER-10e', '_blank')}
              style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                border: 'none',
                borderRadius: '9999px',
                color: 'white',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s'
              }}
            >
              <FaYoutube /> Watch Videos
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '0.75rem 2rem',
                border: '2px solid #a855f7',
                background: 'transparent',
                borderRadius: '9999px',
                color: '#a855f7',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              View Projects
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{
        padding: '5rem 0',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>About Me</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={styles.glassCard}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>👨‍💻</div>
              <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Software Engineer</h3>
              <p style={{ color: '#999', lineHeight: '1.6', textAlign: 'center' }}>
                Full-stack developer with 5+ years experience building web applications.
              </p>
            </div>

            <div style={styles.glassCard}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🎮</div>
              <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Competitive Gamer</h3>
              <p style={{ color: '#999', lineHeight: '1.6', textAlign: 'center' }}>
                Top 1% Dream League Soccer player with 5000+ hours across multiple competitive games.
              </p>
            </div>

            <div style={styles.glassCard}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>📺</div>
              <h3 style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>Content Creator</h3>
              <p style={{ color: '#999', lineHeight: '1.6', textAlign: 'center' }}>
                YouTube creator with 50K+ subscribers, creating gaming and coding content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 0' }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>Featured Projects</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            <div 
              onClick={() => window.open('https://www.paytrack.page.gd', '_blank')}
              style={{
                ...styles.glassCard,
                border: '2px solid rgba(168, 85, 247, 0.5)',
                cursor: 'pointer',
                position: 'relative'
              }}
            >
              <div style={{ 
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.7rem',
                fontWeight: 'bold'
              }}>
                LIVE
              </div>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#a855f7' }}>PayTrack</h3>
              <p style={{ color: '#999', marginBottom: '1rem', fontSize: '0.9rem' }}>
                Payment tracking and expense management system. Track your income and get financial insights.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>PHP</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>MySql</span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', color: '#a855f7', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <FaExternalLinkAlt /> Visit Website
                </span>
              </div>
            </div>

            <div style={styles.glassCard}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>GameStream Analytics</h3>
              <p style={{ color: '#999', marginBottom: '1rem', fontSize: '0.9rem' }}>Real-time analytics dashboard for streamers.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>React</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>Node.js</span>
              </div>
            </div>

            <div style={styles.glassCard}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎮</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>E-Sports Platform</h3>
              <p style={{ color: '#999', marginBottom: '1rem', fontSize: '0.9rem' }}>Tournament management system with live tracking.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>Next.js</span>
                <span style={{ background: 'rgba(168, 85, 247, 0.2)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', color: '#a855f7' }}>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gaming Section with DREAM LEAGUE SOCCER */}
      <section id="gaming" style={{
        padding: '5rem 0',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>Gaming Identity</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {[
              { game: 'Valorant', rank: 'Radiant (Top 1%)', hours: '1200+', icon: '🎯' },
              { game: 'League of Legends', rank: 'Master Tier', hours: '2000+', icon: '⚔️' },
              { game: 'Apex Legends', rank: 'Predator', hours: '800+', icon: '🔫' },
              { game: 'CS:GO', rank: 'Global Elite', hours: '1500+', icon: '🎮' },
              { game: 'DREAM LEAGUE SOCCER', rank: 'TIER 1', hours: '500+', icon: '⚽' }
            ].map((game, i) => (
              <div key={i} style={{
                ...styles.glassCard,
                textAlign: 'center',
                transition: 'all 0.3s',
                animation: `fadeInUp 0.8s ease-out ${0.2 + i * 0.1}s backwards`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{game.icon}</div>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  marginBottom: '0.25rem',
                  color: game.game === 'DREAM LEAGUE SOCCER' ? '#a855f7' : 'white'
                }}>{game.game}</h3>
                <p style={{ 
                  color: game.rank === 'TIER 1' ? '#4ade80' : '#a855f7', 
                  fontSize: '0.9rem', 
                  marginBottom: '0.25rem',
                  fontWeight: game.rank === 'TIER 1' ? 'bold' : 'normal'
                }}>{game.rank}</p>
                <p style={{ color: '#666', fontSize: '0.8rem' }}>{game.hours} hours</p>
                {game.rank === 'TIER 1' && (
                  <div style={{
                    marginTop: '0.5rem',
                    padding: '0.25rem 0.5rem',
                    background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    display: 'inline-block'
                  }}>
                    🏆 ELITE PLAYER
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '5rem 0' }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>Skills & Technologies</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
              { category: 'Backend', skills: ['Node.js', 'Python', 'Go', 'PHP'] },
              { category: 'Database', skills: ['MySql','PostgreSQL', 'MongoDB', 'Redis', 'Firebase'] },
              { category: 'DevOps', skills: ['Docker', 'AWS', 'Git', 'CI/CD'] },
              { category: 'Gaming', skills: ['Unity', 'OBS', 'Streamlabs', 'Photoshop'] },
              { category: 'Tools', skills: ['VS Code', 'Figma', 'Postman', 'Vite'] }
            ].map((skill, i) => (
              <div key={i} style={styles.glassCard}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#a855f7' }}>{skill.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {skill.skills.map((s, idx) => (
                    <span key={idx} style={{
                      background: 'rgba(255,255,255,0.1)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.85rem'
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '5rem 0',
        background: 'rgba(0,0,0,0.3)'
      }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>Services I Offer</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { title: 'Web Development', icon: '💻', desc: 'Custom websites and web applications', price: 'Starting at 50K+ RWF' },
              { title: 'Video Editing', icon: '🎬', desc: 'Professional gaming montages', price: 'Starting at 30K+ RWF/video' },
              { title: 'Content Strategy', icon: '📈', desc: 'Grow your channel strategically', price: '70K+ RWF/session' }
            ].map((service, i) => (
              <div key={i} style={{ ...styles.glassCard, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                <p style={{ color: '#999', marginBottom: '1rem' }}>{service.desc}</p>
                <p style={{ color: '#a855f7', fontWeight: 'bold', marginBottom: '1rem' }}>{service.price}</p>
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: 'white',
                    cursor: 'pointer'
                  }}
                >
                  Contact Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '5rem 0' }}>
        <div style={styles.container}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <span style={styles.gradientText}>Get In Touch</span>
          </h2>
          
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <div style={styles.glassCard}>
              <form onSubmit={(e) => { 
                e.preventDefault(); 
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const message = document.getElementById('message').value;
                window.location.href = `mailto:becypher01@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
              }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  id="name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '0.5rem',
                    color: 'white'
                  }}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  id="email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '0.5rem',
                    color: 'white'
                  }}
                />
                <textarea 
                  rows="4" 
                  placeholder="Your Message" 
                  id="message"
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    marginBottom: '1rem',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    resize: 'vertical'
                  }}
                />
                <button 
                  type="submit" 
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    background: 'linear-gradient(135deg, #7c3aed, #db2777)',
                    border: 'none',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  Send Message
                </button>
              </form>

              <div style={{
                textAlign: 'center',
                marginTop: '1.5rem',
                padding: '1rem',
                background: 'rgba(168, 85, 247, 0.1)',
                borderRadius: '0.5rem'
              }}>
                <p style={{ color: '#ccc', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                  📧 Direct Email:
                </p>
                <a href="mailto:becypher01@gmail.com" style={{
                  color: '#a855f7',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 'bold'
                }}>
                  becypher01@gmail.com
                </a>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1.5rem',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                flexWrap: 'wrap'
              }}>
                <a href="https://www.youtube.com/@CYPHER-10e" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '1.5rem', transition: 'all 0.3s' }}>
                  <FaYoutube />
                </a>
                <a href="https://www.instagram.com/cyph.er012/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '1.5rem', transition: 'all 0.3s' }}>
                  📷
                </a>
                <a href="https://web.facebook.com/profile.php?id=100093325874311" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '1.5rem', transition: 'all 0.3s' }}>
                  👤
                </a>
                <a href="https://x.com/Emmy_vib" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '1.5rem', transition: 'all 0.3s' }}>
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/in/emmanuel-bimeyimana-74564b400/" target="_blank" rel="noopener noreferrer" style={{ color: '#ccc', fontSize: '1.5rem', transition: 'all 0.3s' }}>
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '2rem 0',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.5)'
      }}>
        <div style={styles.container}>
          <p style={{ color: '#888', marginBottom: '0.5rem' }}>
            © 2024 Emmanuel BIMENYIMANA (CYPHER). All rights reserved.
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem' }}>
            Gamer • YouTuber • Software Engineer
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            background: 'linear-gradient(135deg, #7c3aed, #db2777)',
            border: 'none',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            color: 'white',
            cursor: 'pointer',
            zIndex: 1000
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  )
}

export default App