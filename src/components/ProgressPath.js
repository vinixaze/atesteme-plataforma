import React from 'react';
import { Lock, CheckCircle } from 'lucide-react';
import '../styles/ProgressPath.css';

function ProgressPath({ levels }) {
  return (
    <div className="progress-path">
      <h2 className="section-title">Seus Níveis</h2>
      <p className="section-description">
        Complete todas as 16 competências de cada nível para desbloquear o próximo
      </p>
      
      <div className="levels-container">
        {levels.map((level) => (
          <div 
            key={level.level} 
            className={`level-card ${
              level.completed ? 'completed' : 
              level.unlocked ? 'unlocked' : 
              'locked'
            }`}
          >
            <div className="level-header">
              <div className="level-number-badge">
                {level.completed ? (
                  <CheckCircle size={24} />
                ) : level.unlocked ? (
                  <span className="level-number">{level.level}</span>
                ) : (
                  <Lock size={20} />
                )}
              </div>
              <div className="level-title-section">
                <h3>Nível {level.level}</h3>
                <p>{level.name}</p>
              </div>
            </div>

            <div className="level-progress-section">
              <div className="progress-bar-container">
                <div 
                  className="progress-bar-fill"
                  style={{ width: `${level.progress}%` }}
                />
              </div>
              <div className="level-stats">
                <span className="competences-count">
                  {level.completedCompetences}/{level.competences} competências
                </span>
                <span className="progress-percentage">{level.progress}%</span>
              </div>
            </div>

            {!level.unlocked && (
              <div className="locked-message">
                <Lock size={16} />
                <span>Complete o nível anterior para desbloquear</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressPath;