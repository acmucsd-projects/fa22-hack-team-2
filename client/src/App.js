import './App.css';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";

//import login component
import { Login } from './Login';

//import create account component
import { CreateAccount } from './CreateAccount';

const App = () => {
  return (
      <main class="welcomebox">
        <Router>
          <Routes>
            // Note that must use element instead of component
            <Route exact path="/" element={<Login />} />
            <Route exact path="/create-account" element={<CreateAccount />} />
          </Routes>
        </Router>
      </main>
  );
}

/*
 <div class="welcomebox">
            <Login />
      </div>
*/
export default App;
