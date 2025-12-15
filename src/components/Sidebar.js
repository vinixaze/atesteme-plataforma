import React from 'react';
import { X, Home, BookOpen, Award, Trophy, FileText, HelpCircle } from 'lucide-react';
import logoPurple from '../assets/logo-roxa.png';
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

  return (
    <>
      {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            <img 
              src={logoPurple} 
              alt="AtesteMe" 
              style={{ height: '32px', width: 'auto' }} 
            />
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