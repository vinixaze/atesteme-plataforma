import React from 'react';
import { User, Bell, Menu } from 'lucide-react';

function Header({ user, onMenuClick }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <button style={styles.menuButton} onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div style={styles.logo}>
          <span style={styles.logoText}>ateste</span>
          <span style={styles.logoHighlight}>me</span>
        </div>
        <div style={styles.actions}>
          <button style={styles.iconButton}>
            <Bell size={20} />
            <span style={styles.badge}>3</span>
          </button>
          <button style={styles.iconButton}>
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: 'linear-gradient(135deg, #7B1FA2, #9C27B0)',
    color: 'white',
    padding: '1rem',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  menuButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    gap: '0'
  },
  logoText: {
    color: 'white'
  },
  logoHighlight: {
    color: '#E1BEE7'
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center'
  },
  iconButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    padding: '0.5rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  badge: {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#FF5722',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    fontSize: '0.7rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'
  }
};

export default Header;