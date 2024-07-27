import React, { useState } from 'react';
import './LoginCreateAccountPage.css'; // Import your CSS file for styling

const LoginCreateAccountPage = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [activeTab, setActiveTab] = useState('login'); // Default to login tab

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', loginEmail, loginPassword);
    // Clear form fields after submission
    setLoginEmail('');
    setLoginPassword('');
  };

  const handleCreateSubmit = (e) => {
    e.preventDefault();
    // Handle create account logic here
    console.log('Creating account with:', createEmail, createPassword);
    // Clear form fields after submission
    setCreateEmail('');
    setCreatePassword('');
  };

  const showLoginTab = () => {
    if (activeTab !== 'login') {
      setActiveTab('login');
    }
  };

  const showCreateAccountTab = () => {
    if (activeTab !== 'create') {
      setActiveTab('create');
    }
  };

  return (
    <div className="login-create-account-container">
      <div className="tab">
        <button className={activeTab === 'login' ? 'tablinks active' : 'tablinks'} onClick={showLoginTab}>
          Login
        </button>
        <button className={activeTab === 'create' ? 'tablinks active' : 'tablinks'} onClick={showCreateAccountTab}>
          Create Account
        </button>
      </div>

      <div id="Login" className={activeTab === 'login' ? 'tabcontent active' : 'tabcontent'}>
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>

      <div id="CreateAccount" className={activeTab === 'create' ? 'tabcontent active' : 'tabcontent'}>
        <h2>Create Account</h2>
        <form onSubmit={handleCreateSubmit}>
          <label>
            Email:
            <input
              type="email"
              value={createEmail}
              onChange={(e) => setCreateEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={createPassword}
              onChange={(e) => setCreatePassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default LoginCreateAccountPage;
