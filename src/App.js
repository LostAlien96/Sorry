import React from 'react';
import './App.css'; // Add a CSS file for styling

function App() {
  const videoLink = "https://drive.google.com/file/d/1Irh47r9Wx2Lrr-uMKtsheuxOM-lOaSeg/view?usp=drivesdk";

  return (
    <div className="app-container" style={styles.container}>
      {/* Background Music */}
      <audio autoPlay loop>
  <source src={`${process.env.PUBLIC_URL}/Savera.mp3`} type="audio/mp3" />
  Your browser does not support the audio element.
</audio>

      <header style={styles.header}>
        <h1 style={styles.title}>I'm Sorry Cuties!</h1>
        <p style={styles.subtitle}>I hope this makes up for it.</p>
        <div style={styles.heartRow}>❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️</div>
      </header>

     <img
  src={`${process.env.PUBLIC_URL}/Screenshot 2025-01-11 034157.png`}
  alt="Cute Image 1"
  style={styles.image}
/>
<img
  src={`${process.env.PUBLIC_URL}/Screenshot 2025-01-11 173812.png`}
  alt="Cute Image 2"
  style={styles.image}
/>

      <button
        style={styles.button}
        onClick={() => window.open(videoLink, '_blank')}
      >
        Click here Please
      </button>
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundImage: 'url("/591851.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#333',
    minHeight: '100vh',
    padding: '20px',
    fontFamily: 'Comic Sans MS, sans-serif',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '2.5em',
    color: '#FF6F61', // Coral color
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2em',
    color: '#6B705C', // Soft brown
  },
  heartRow: {
    marginTop: '10px',
    fontSize: '1.5em',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginBottom: '20px',
  },
  image: {
    width: '80%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  button: {
    backgroundColor: '#8ECAE6', // Light blue
    color: '#FFF',
    padding: '15px 20px',
    fontSize: '1em',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s',
    width: '80%',
    maxWidth: '200px',
  },
};

export default App;
