import React, { useEffect } from 'react';
import { X, Home, BookOpen, Award, Trophy, FileText, HelpCircle } from 'lucide-react';
import '../styles/Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const menuItems = [
    { icon: Home, label: 'Início', active: true },
    { icon: BookOpen, label: 'Cursos' },
    { icon: Award, label: 'Certificados' },
    { icon: Trophy, label: 'Conquistas' },
    { icon: FileText, label: 'Relatórios' },
    { icon: HelpCircle, label: 'Suporte' }
  ];

  useEffect(() => {
    let timeoutId;

    const handleMouseMove = (e) => {
      if (e.clientX <= 20 && !isOpen) {
        timeoutId = setTimeout(() => {
          document.dispatchEvent(new CustomEvent('openSidebar'));
        }, 100);
      } else if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    const handleOpenSidebar = () => {
      if (!isOpen) {
        const openEvent = new CustomEvent('triggerSidebarOpen');
        document.dispatchEvent(openEvent);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('openSidebar', handleOpenSidebar);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('openSidebar', handleOpenSidebar);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <span className="logo-text">ateste</span>
            <span className="logo-highlight">me</span>
          </div>
          <button className="sidebar-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
              onClick={() => {}}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;