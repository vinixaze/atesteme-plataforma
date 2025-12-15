import React, { useState } from 'react';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { authenticateUser, saveCurrentUser, DEMO_USERS } from '../utils/auth';
import '../styles/Login.css';
import logoPurple from '../assets/logo-roxa.png';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isSignup) {
      const user = authenticateUser(formData.email, formData.password);
      
      if (user) {
        saveCurrentUser(user);
        onLogin(user);
      } else {
        setError('E-mail/CPF ou senha incorretos. Verifique as credenciais disponíveis abaixo.');
      }
    } else {
      if (!formData.fullName.trim()) { setError('Por favor, preencha o nome completo'); return; }
      if (!formData.username.trim()) { setError('Por favor, preencha o nome de usuário'); return; }
      if (!formData.email.trim()) { setError('Por favor, preencha o e-mail'); return; }
      if (!formData.birthDate.trim()) { setError('Por favor, preencha a data de nascimento'); return; }
      if (!formData.cpf.trim()) { setError('Por favor, preencha o CPF'); return; }
      if (formData.password.length < 8) { setError('A senha deve ter no mínimo 8 caracteres'); return; }
      if (formData.password !== formData.confirmPassword) { setError('As senhas não coincidem.'); return; }

      const newUser = {
        id: Date.now(),
        name: formData.fullName,
        email: formData.email,
        password: formData.password,
        cpf: formData.cpf
      };
      
      saveCurrentUser(newUser);
      onLogin(newUser);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const fillDemoCredentials = (userIndex = 0) => {
    const user = DEMO_USERS[userIndex];
    setFormData({ ...formData, email: user.email, password: user.password });
    setError('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="logo-container">
            <img src={logoPurple} alt="AtesteMe" className="logo-img desktop-logo" />
            <img src={logoPurple} alt="AtesteMe" className="logo-img mobile-logo" />
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
              <p>Credenciais disponíveis para demonstração:</p>
              {DEMO_USERS.map((user, index) => (
                <div key={user.id} className="credentials-box">
                  <div className="credentials-info">
                    <strong>{user.name}</strong><br />
                    <span>E-mail: {user.email}</span><br />
                    <span>CPF: {user.cpf}</span><br />
                    <span>Senha: {user.password}</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => fillDemoCredentials(index)} 
                    className="btn-demo"
                  >
                    Usar estas credenciais
                  </button>
                </div>
              ))}
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
                  setFormData({
                    email: '',
                    password: '',
                    fullName: '',
                    username: '',
                    birthDate: '',
                    cpf: '',
                    confirmPassword: ''
                  });
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
                placeholder="Ex: Maria Silva"
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
                placeholder="Ex: mariasilva"
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
                placeholder="Ex: maria@email.com"
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
                  placeholder="Mínimo 8 caracteres"
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
                  placeholder="Digite a mesma senha"
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
              {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <small className="password-mismatch">As senhas não coincidem</small>
              )}
            </div>

            <button type="submit" className="btn-primary">CADASTRAR</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;