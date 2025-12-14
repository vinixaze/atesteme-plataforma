import React, { useState } from 'react';
import Header from './Header';
import ProgressPath from './ProgressPath';
import LearningPath from './LearningPath';
import Medals from './Medals';
import { userData } from '../data/userData';
import Sidebar from './Sidebar';
import '../styles/Dashboard.css';

function Dashboard({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState('learning');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const userDataWithName = {
    ...userData,
    name: user?.name || userData.name,
    email: user?.email || userData.email
  };

  return (
    <div className="dashboard">
      <Header user={userDataWithName} 
        onLogout={onLogout}
        onMenuClick={() => setSidebarOpen(true)}
       />

       <Sidebar>
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
       </Sidebar>
      
      <div className="dashboard-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{userDataWithName.name.charAt(0).toUpperCase()}</span>
          </div>
          <div className="profile-info">
            <h1>{userDataWithName.name}</h1>
            <p className="profile-level">Nível {userDataWithName.currentLevel} - {userDataWithName.levels[userDataWithName.currentLevel - 1].name}</p>
          </div>
        </div>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            Aprendizado
          </button>
          <button 
            className={`tab ${activeTab === 'progress' ? 'active' : ''}`}
            onClick={() => setActiveTab('progress')}
          >
            Níveis
          </button>
          <button 
            className={`tab ${activeTab === 'medals' ? 'active' : ''}`}
            onClick={() => setActiveTab('medals')}
          >
            Conquistas
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'learning' && (
            <LearningPath 
              competencesData={userDataWithName.competencesData}
              currentLevel={userDataWithName.currentLevel}
            />
          )}
          {activeTab === 'progress' && (
            <ProgressPath levels={userDataWithName.levels} />
          )}
          {activeTab === 'medals' && (
            <Medals medals={userDataWithName.medals} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;