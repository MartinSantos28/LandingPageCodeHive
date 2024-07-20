import Home from './components/home';
import './App.css';
import About from './components/About';
import PrivacityPolicity from './components/PrivacyPolicy';
import Work from './components/Work';
function App() {
  return (
    <div className="App">
        <Home/> 
        <About/>
        <Work/>
        <PrivacityPolicity/>
    </div>
  );
}

export default App;
