import React, { useState } from 'react';
import Header from './Header';
import ProgressPath from './ProgressPath';
import LearningPath from './LearningPath';
import Medals from './Medals';
import { userData } from '../data/userData';
import '../styles/Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('learning');

  return (
    <div className="dashboard">
      <Header user={userData} />
      
      <div className="dashboard-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <span>{userData.name.charAt(0)}</span>
          </div>
          <div className="profile-info">
            <h1>{userData.name}</h1>
            <p className="profile-level">Nível {userData.currentLevel} - {userData.levels[userData.currentLevel - 1].name}</p>
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
              competencesData={userData.competencesData}
              currentLevel={userData.currentLevel}
            />
          )}
          {activeTab === 'progress' && (
            <ProgressPath levels={userData.levels} />
          )}
          {activeTab === 'medals' && (
            <Medals medals={userData.medals} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;