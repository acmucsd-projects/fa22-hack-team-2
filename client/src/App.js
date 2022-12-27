import './App.css';

import { Login } from './Login';
import { CreateAccount } from './CreateAccount';

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }} className="App">
      <Login />
    </div>
  );
}

export default App;
