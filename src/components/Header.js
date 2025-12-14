import React, { useState } from 'react';
import { User, Bell, Menu, LogOut } from 'lucide-react';

function Header({ user, onLogout }) {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <button style={styles.menuButton}>
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
          <div style={styles.userMenuContainer}>
            <button 
              style={styles.iconButton}
              onClick={() => setShowUserMenu(!showUserMenu)}
            >
              <User size={20} />
            </button>
            {showUserMenu && (
              <div style={styles.userMenu}>
                <div style={styles.userInfo}>
                  <strong>{user?.name}</strong>
                  <span>{user?.email}</span>
                </div>
                <button style={styles.logoutButton} onClick={onLogout}>
                  <LogOut size={16} />
                  Sair
                </button>
              </div>
            )}
          </div>
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
  },
  userMenuContainer: {
    position: 'relative'
  },
  userMenu: {
    position: 'absolute',
    top: '100%',
    right: 0,
    marginTop: '0.5rem',
    background: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    minWidth: '220px',
    overflow: 'hidden',
    zIndex: 1000
  },
  userInfo: {
    padding: '1rem',
    borderBottom: '1px solid #E0E0E0',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem'
  },
  logoutButton: {
    width: '100%',
    padding: '0.875rem 1rem',
    border: 'none',
    background: 'none',
    color: '#C62828',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.95rem',
    fontWeight: '500',
    transition: 'background 0.2s'
  }
};

export default Header;