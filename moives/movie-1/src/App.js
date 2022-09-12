
import './App.css';
import ItemApi from './item_1';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* instantiate the imported component */}
        <ItemApi name="itemApi"/>

        
      </header>
    </div>
  );
}

export default App;
