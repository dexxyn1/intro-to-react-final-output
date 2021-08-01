import './App.css';
import TransactionApp from './components/TransactionApp';

function App() {
  return (
  <div className="App">
      <header className="App-header">
        <h1>Income and Expense Tracker</h1>
        <div className="Operations">
          <TransactionApp/>
        </div>
      </header>
  </div>
    
  );
}

export default App;
