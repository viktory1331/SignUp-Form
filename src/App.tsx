import './App.css';
import { ReactComponent as Logo } from './assets/image/logo.svg';
import SignUp from './components/form/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Sign Up with email</h1>
      <Logo />
      <SignUp />
    </div>
  );
}

export default App;
