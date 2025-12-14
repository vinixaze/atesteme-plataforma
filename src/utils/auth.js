export const DEMO_USERS = [
  {
    id: 1,
    name: "Demo User",
    email: "demo@atesteme.com",
    password: "demo123",
    cpf: "123.456.789-00"
  },
  {
    id: 2,
    name: "Maria Silva",
    email: "maria@atesteme.com",
    password: "maria123",
    cpf: "987.654.321-00"
  },
  {
    id: 3,
    name: "João Santos",
    email: "joao@atesteme.com",
    password: "joao123",
    cpf: "456.789.123-00"
  }
];

export const authenticateUser = (emailOrCpf, password) => {
  const user = DEMO_USERS.find(
    u => (u.email === emailOrCpf || u.cpf === emailOrCpf) && u.password === password
  );
  return user || null;
};

export const saveCurrentUser = (user) => {
  sessionStorage.setItem('currentUser', JSON.stringify(user));
};

export const getCurrentUser = () => {
  const userJson = sessionStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

export const clearCurrentUser = () => {
  sessionStorage.removeItem('currentUser');
};