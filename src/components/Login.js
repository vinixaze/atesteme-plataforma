import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import '../styles/Login.css';

function Login({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    username: '',
    birthDate: '',
    cpf: '',
    confirmPassword: ''
  });

  const DEMO_CREDENTIALS = {
    email: 'demo@atesteme.com',
    password: 'demo123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isSignup) {
      if (formData.email === DEMO_CREDENTIALS.email && formData.password === DEMO_CREDENTIALS.password) {
        onLogin();
      } else {
        setError('E-mail ou senha incorretos. Use: demo@atesteme.com / demo123');
      }
    } else {
      if (formData.password !== formData.confirmPassword) {
        setError('As senhas não coincidem');
        return;
      }
      if (formData.password.length < 8) {
        setError('A senha deve ter no mínimo 8 caracteres');
        return;
      }
      onLogin();
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const fillDemoCredentials = () => {
    setFormData({
      ...formData,
      email: DEMO_CREDENTIALS.email,
      password: DEMO_CREDENTIALS.password
    });
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo">
            <span className="logo-text">ateste</span>
            <span className="logo-highlight">me</span>
          </div>
          <p className="subtitle">Plataforma de Educação Digital</p>
        </div>

        {!isSignup ? (
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Entrar</h2>

            {error && (
              <div className="error-message">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="demo-credentials">
              <p>Credenciais de demonstração:</p>
              <div className="credentials-box">
                <strong>E-mail:</strong> demo@atesteme.com<br />
                <strong>Senha:</strong> demo123
              </div>
              <button type="button" onClick={fillDemoCredentials} className="btn-demo">
                Preencher automaticamente
              </button>
            </div>
            
            <div className="form-group">
              <label>E-mail ou CPF</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail ou CPF"
                required
              />
            </div>

            <div className="form-group">
              <label>Senha</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <a href="#" className="forgot-password">Esqueci minha senha</a>

            <button type="submit" className="btn-primary">ENTRAR</button>

            <div className="signup-link">
              Ainda não tem conta?
              <button type="button" onClick={() => setIsSignup(true)}>
                CADASTRE-SE
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-header">
              <h2>Cadastre-se</h2>
              <button 
                type="button" 
                className="close-btn"
                onClick={() => {
                  setIsSignup(false);
                  setError('');
                }}
              >
                ✕
              </button>
            </div>

            {error && (
              <div className="error-message">
                <AlertCircle size={18} />
                <span>{error}</span>
              </div>
            )}

            <div className="form-group">
              <label>Nome Completo *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Nome de Usuário *</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>E-mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Data de Nascimento *</label>
              <input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                placeholder="DD/MM/AAAA"
                required
              />
            </div>

            <div className="form-group">
              <label>CPF *</label>
              <input
                type="text"
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                placeholder="000.000.000-00"
                required
              />
            </div>

            <div className="form-group">
              <label>Senha *</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <small>A senha deve ter no mínimo 8 caracteres.</small>
            </div>

            <div className="form-group">
              <label>Confirmar senha *</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-primary">CADASTRAR</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;