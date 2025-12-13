import React from 'react';
import { Lock } from 'lucide-react';
import '../styles/Medals.css';

function Medals({ medals }) {
  const unlockedMedals = medals.filter(m => m.unlocked);
  const lockedMedals = medals.filter(m => !m.unlocked);

  return (
    <div className="medals-section">
      <h2 className="section-title">Conquistas</h2>
      
      <div className="medals-stats">
        <div className="stat-card">
          <span className="stat-number">{unlockedMedals.length}</span>
          <span className="stat-label">Medalhas Conquistadas</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">{medals.length}</span>
          <span className="stat-label">Total de Medalhas</span>
        </div>
      </div>

      <div className="medals-grid">
        {medals.map((medal) => (
          <div 
            key={medal.id} 
            className={`medal-card ${medal.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="medal-icon">
              {medal.unlocked ? (
                <span className="icon-emoji">{medal.icon}</span>
              ) : (
                <div className="locked-icon">
                  <Lock size={24} />
                </div>
              )}
            </div>
            <h3>{medal.name}</h3>
            <p>{medal.description}</p>
            {medal.unlocked && medal.date && (
              <span className="medal-date">
                Conquistada em {new Date(medal.date).toLocaleDateString('pt-BR')}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medals;