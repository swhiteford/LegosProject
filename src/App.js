import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Country from './components/Country';
import History from './components/History';
import Inspire from './components/Inspire';
import Support from './components/Support';
import Best from './components/Best';

function App() {
  return (
    <div className="App">
            <header className="App-header">
                      <Header/>
                      <Best/>
                      <Inspire/>
                      <History/>
                      <Country/>                 
                      <Support/>
      </header>
    </div>
  );
}

export default App;
