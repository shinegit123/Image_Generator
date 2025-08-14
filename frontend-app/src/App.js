import React, { useState } from 'react';
import './App.css';

function App() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [activeSection, setActiveSection] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadedFile(file);
      
      // Read file content
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
        // Generate a simple summary (in a real app, this would call an API)
        generateSummary(content);
      };
      reader.readAsText(file);
    }
  };

  const generateSummary = (content) => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      // Simple summarization logic (in a real app, this would use AI/ML)
      const sentences = content.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
      const wordCount = content.split(/\s+/).length;
      const paragraphCount = content.split(/\n\s*\n/).length;
      
      const summaryText = `
📄 Document Summary

📊 Statistics:
• Total words: ${wordCount}
• Total sentences: ${sentences.length}
• Paragraphs: ${paragraphCount}

📝 Key Points:
${sentences.slice(0, 5).map((sentence, index) => `• ${sentence.trim()}`).join('\n')}

${sentences.length > 5 ? `... and ${sentences.length - 5} more sentences` : ''}

💡 Summary:
This document contains ${wordCount} words across ${paragraphCount} paragraphs. The content appears to be ${wordCount > 1000 ? 'a lengthy document' : 'a concise document'} with ${sentences.length} sentences.
      `.trim();
      
      setSummary(summaryText);
      setIsLoading(false);
    }, 2000);
  };

  const clearDocument = () => {
    setUploadedFile(null);
    setFileContent('');
    setSummary('');
    setFileName('');
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <div className="upload-section">
              <div className="file-upload-container">
                <input
                  type="file"
                  id="file-upload"
                  accept=".txt,.doc,.docx,.pdf"
                  onChange={handleFileUpload}
                  className="file-input"
                />
                <label htmlFor="file-upload" className="file-upload-label">
                  <div className="upload-icon">📁</div>
                  <span>Choose a document to upload</span>
                  <small>Supports: TXT, DOC, DOCX, PDF</small>
                </label>
              </div>
              
              {fileName && (
                <div className="file-info">
                  <span>📎 {fileName}</span>
                  <button onClick={clearDocument} className="clear-btn">
                    Clear
                  </button>
                </div>
              )}
            </div>

            <div className="split-screen">
              <div className="left-panel">
                <h2>📖 Original Document</h2>
                <div className="content-area">
                  {fileContent ? (
                    <div className="document-content">
                      <pre>{fileContent}</pre>
                    </div>
                  ) : (
                    <div className="placeholder">
                      <div className="placeholder-icon">📄</div>
                      <p>Upload a document to view its content here</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="right-panel">
                <h2>📋 Summary</h2>
                <div className="content-area">
                  {isLoading ? (
                    <div className="loading">
                      <div className="spinner"></div>
                      <p>Generating summary...</p>
                    </div>
                  ) : summary ? (
                    <div className="summary-content">
                      <pre>{summary}</pre>
                    </div>
                  ) : (
                    <div className="placeholder">
                      <div className="placeholder-icon">📋</div>
                      <p>Summary will appear here after upload</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      
      case 'about':
        return (
          <div className="about-section">
            <div className="about-content">
              <h2>About Document Summarizer</h2>
              <p>Welcome to our advanced document summarization tool! We help you quickly understand and extract key information from your documents.</p>
              
              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon">🚀</div>
                  <h3>Fast Processing</h3>
                  <p>Get instant summaries of your documents in seconds</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📊</div>
                  <h3>Smart Analytics</h3>
                  <p>Detailed statistics and key points extraction</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">📱</div>
                  <h3>Responsive Design</h3>
                  <p>Works perfectly on desktop, tablet, and mobile</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🔒</div>
                  <h3>Secure</h3>
                  <p>Your documents are processed locally for privacy</p>
                </div>
              </div>
              
              <div className="tech-stack">
                <h3>Built with Modern Technology</h3>
                <div className="tech-icons">
                  <span>⚛️ React</span>
                  <span>🎨 CSS3</span>
                  <span>📄 File API</span>
                  <span>🚀 Modern JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'login':
        return (
          <div className="login-section">
            <div className="login-content">
              {isLoggedIn ? (
                <div className="profile-content">
                  <h2>👤 User Profile</h2>
                  <div className="profile-info">
                    <div className="profile-avatar">👤</div>
                    <h3>Welcome, User!</h3>
                    <p>You are currently logged in to Document Summarizer</p>
                    <div className="profile-stats">
                      <div className="stat-item">
                        <span className="stat-number">0</span>
                        <span className="stat-label">Documents Processed</span>
                      </div>
                      <div className="stat-item">
                        <span className="stat-number">0</span>
                        <span className="stat-label">Summaries Generated</span>
                      </div>
                    </div>
                    <button onClick={handleLogin} className="logout-btn">
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="login-form">
                  <h2>🔐 Login</h2>
                  <p>Sign in to save your document history and preferences</p>
                  <form className="form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="button" onClick={handleLogin} className="login-btn">
                      Login
                    </button>
                  </form>
                  <p className="demo-note">💡 Demo: Click login to simulate authentication</p>
                </div>
              )}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">📄</span>
            <span className="logo-text">DocSum</span>
          </div>
          
          <div className="nav-links">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => setActiveSection('home')}
            >
              🏠 Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              ℹ️ About
            </button>
            <button 
              className={`nav-link ${activeSection === 'login' ? 'active' : ''}`}
              onClick={() => setActiveSection('login')}
            >
              {isLoggedIn ? '👤 Profile' : '🔐 Login'}
            </button>
          </div>

          {isLoggedIn && (
            <div className="nav-profile">
              <div className="profile-pic">
                <span className="profile-emoji">👤</span>
              </div>
              <div className="profile-dropdown">
                <span className="username">User</span>
                <button onClick={handleLogin} className="dropdown-logout">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="main-content">
        {activeSection === 'home' && (
          <header className="App-header">
            <h1>📄 Document Summarizer</h1>
            <p>Upload a document and get an instant summary</p>
          </header>
        )}
        
        {renderContent()}
      </main>

      <footer className="App-footer">
        <p>Powered by React • Document processing made simple</p>
      </footer>
    </div>
  );
}

export default App; 