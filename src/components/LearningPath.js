import React from 'react';
import { Lock, Star, CheckCircle } from 'lucide-react';
import '../styles/LearningPath.css';

function LearningPath({ competencesData, currentLevel }) {
  const getCategoryColor = (category) => {
    const colors = {
      'PROTEÇÃO E SEGURANÇA': '#4CAF50',
      'CRIAÇÃO DE CONTEÚDO': '#FF9800',
      'COMUNICAÇÃO E COLABORAÇÃO': '#2196F3',
      'INFORMAÇÕES E DADOS': '#FFC107',
      'RESOLUÇÃO DE PROBLEMAS': '#E91E63'
    };
    return colors[category] || '#9C27B0';
  };

  const levelCompetences = competencesData.filter(c => c.level === currentLevel);
  
  return (
    <div className="learning-path">
      <div className="path-header">
        <h2 className="section-title">Nível {currentLevel}</h2>
        <p className="section-subtitle">Continue sua jornada de aprendizado</p>
      </div>

      <div className="path-scroll">
        {levelCompetences.map((competence, index) => {
          const categoryColor = getCategoryColor(competence.category);
          
          return (
            <div key={competence.id} className="competence-wrapper">
              {index > 0 && (
                <div 
                  className={`path-connector ${competence.completed ? 'completed' : ''}`}
                  style={{
                    background: competence.completed 
                      ? `linear-gradient(180deg, ${getCategoryColor(levelCompetences[index - 1].category)}, ${categoryColor})`
                      : '#E0E0E0'
                  }}
                />
              )}
              
              <div 
                className={`competence-node ${
                  competence.completed ? 'completed' : 
                  competence.current ? 'current' : 
                  competence.locked ? 'locked' : 
                  'available'
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? '10%' : '60%'
                }}
              >
                <div 
                  className="competence-circle"
                  style={{
                    background: competence.locked 
                      ? '#BDBDBD' 
                      : `linear-gradient(135deg, ${categoryColor}, ${categoryColor}dd)`
                  }}
                >
                  {competence.completed ? (
                    <CheckCircle className="competence-icon" />
                  ) : competence.locked ? (
                    <Lock className="competence-icon" size={24} />
                  ) : (
                    <span className="competence-number">{index + 1}</span>
                  )}
                </div>
                
                <div className="competence-content">
                  <span 
                    className="competence-category"
                    style={{ color: categoryColor }}
                  >
                    {competence.category}
                  </span>
                  <span className="competence-title">{competence.title}</span>

                  {competence.completed && competence.stars && (
                    <div className="stars">
                      {[...Array(3)].map((_, i) => (
                        <Star
                          key={i}
                          className={`star ${i < competence.stars ? 'filled' : ''}`}
                          size={14}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {!competence.locked && !competence.completed && (
                  <button className="start-button">
                    {competence.current ? 'Continuar' : 'Iniciar'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="legend">
        <h3>Categorias</h3>
        <div className="legend-items">
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#4CAF50' }}></div>
            <span>Proteção e Segurança</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#FF9800' }}></div>
            <span>Criação de Conteúdo</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#2196F3' }}></div>
            <span>Comunicação e Colaboração</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#FFC107' }}></div>
            <span>Informações e Dados</span>
          </div>
          <div className="legend-item">
            <div className="legend-color" style={{ background: '#E91E63' }}></div>
            <span>Resolução de Problemas</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningPath;