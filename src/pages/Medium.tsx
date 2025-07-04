import React, { useState } from 'react';
import Navigation from '@/components/Navigation';

const MediumPage: React.FC = () => {
  const [view, setView] = useState<'videos' | 'images'>('images');

  const images = [
    {
      src: '/images/child-protection.jpg',
      alt: 'Adolescent and Young People Living with HIV Symposium',
    },
    {
      src: '/images/food-security.jpg',
      alt: 'Condom Distribution Event',
    },
    {
      src: '/images/im.png',
      alt: 'Entrepreneurship Training for AGYW',
    },
    {
      src: '/images/i.png',
      alt: 'Inter-School Health Debates',
    },
    {
      src: '/images/c.png',
      alt: 'Family Planning Services',
    },
    {
      src: '/images/u.png',
      alt: 'Family Planning Services',
    },
    {
      src: '/images/d.png',
      alt: 'Family Planning Services',
    },
    {
      src: '/images/b.png',
      alt: 'Family Planning Services',
    },
    {
      src: '/images/a.png',
      alt: 'Family Planning Services',
    },
  ];

  const videos = [
    {
      src: '/images/videos/v.mp4',
      alt: 'JNYPA Community Dialogue',
    },
    {
      src: '/images/videos/Health & Wellness.mp4',
      alt: 'Youth Empowerment Event',
    },
    {
      src: '/images/videos/z.mp4',
      alt: 'Nutrition Demonstration',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div style={styles.container}>
        <h2 style={styles.title}>JNYPA Media Gallery</h2>
        <p style={styles.description}>
          Showcasing the impactful work of the Jinja Network of Young People Living with HIV (JNYPA) in Eastern Uganda, promoting HIV prevention, empowerment, and stigma-free communities.
        </p>
        <div style={styles.toggle}>
          <button
            onClick={() => setView('images')}
            style={view === 'images' ? styles.activeButton : styles.button}
          >
            Images
          </button>
          <button
            onClick={() => setView('videos')}
            style={view === 'videos' ? styles.activeButton : styles.button}
          >
            Videos
          </button>
        </div>
        <div style={styles.grid}>
          {view === 'images' &&
            images.map((item, index) => (
              <div key={`image-${index}`} style={styles.mediaContainer}>
                <img src={item.src} alt={item.alt} style={styles.media} />
              </div>
            ))}
          {view === 'videos' &&
            videos.map((item, index) => (
              <div key={`video-${index}`} style={styles.mediaContainer}>
                <video src={item.src} controls style={styles.media} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px 10px sm:40px 20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    minHeight: '100vh',
  },
  title: {
    textAlign: 'center',
    fontSize: '1.5rem sm:2rem md:2.5rem',
    color: '#1A3C34',
    marginBottom: '1rem sm:1.5rem',
  },
  description: {
    textAlign: 'center',
    marginBottom: '1.5rem sm:2rem',
    fontSize: '0.9rem sm:1rem md:1.1rem',
    color: '#4A4A4A',
    maxWidth: '800px',
    margin: '0 auto 1.5rem sm:0 auto 2rem',
  },
  toggle: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px sm:15px',
    marginBottom: '1.5rem sm:2rem',
  },
  button: {
    padding: '8px 16px sm:10px 20px md:12px 24px',
    fontSize: '0.9rem sm:1rem',
    cursor: 'pointer',
    border: '2px solid #4CAF50',
    background: '#FFFFFF',
    color: '#4CAF50',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  activeButton: {
    padding: '8px 16px sm:10px 20px md:12px 24px',
    fontSize: '0.9rem sm:1rem',
    cursor: 'pointer',
    border: '2px solid #4CAF50',
    background: '#4CAF50',
    color: '#FFFFFF',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px sm:20px md:25px',
    padding: '0 5px sm:0 10px',
  },
  mediaContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    backgroundColor: '#F5F5F5',
    padding: '8px sm:10px',
  },
  media: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'block',
  },
};

export default MediumPage;