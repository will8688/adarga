const App = () => {
  const [userId, setUserId] = useState(null);


  return (
    <div>
      <header>
        <AppBar
          userId={userId}
          onLogin={userId => setUserId(userId)}
          onLogout={() => setUserId(null)}
        />
      </header>
      <main>
        Hello {userId}
      </main>
    </div>
  );
};

const LoginButton = ({ onLogin }) => {
  // assume we use a 3rd party script to authenticate
  useEffect(() => {
    window.auth.addEventListener('user_present', userId => onLogin(userId));
    
    return () => {
     window.auth.removeEventListener('user_present', userId => onLogin(userId));
    }
  }, []);

  return (
    <button onClick={() => window.auth.login()}>Login</button>
  );
};

const LogoutButton = ({ onLogout }) => {
  useEffect(() => {
    window.auth.addEventListener('user_gone', () => onLogout());
    return () => {
    	window.auth.removeEventListener('user_gone', () => onLogout());
    }
  }, []);

  return (
    <button onClick={() => window.auth.logout()}>Logout</button>
  );
};

const AppBar = ({ userId, onLogin, onLogout }) => {
  return (
    <div>
      <div id="logged-in-navigation" style={{ display: userId ? 'block' : 'none'}}>
          <a href="/dashboard">Dashboard</a>
          <a href="/my-account">My account</a>
          <LogoutButton onLogout={onLogout} />
      </div>
      <div id="logged-out-navigation" style={{ display: userId ? 'none' : 'block'}}>
        <LoginButton onLogin={onLogin}/>
      </div>
    </div>
  )
}
