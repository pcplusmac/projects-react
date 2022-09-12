
import './App.css';
import item from './item_1';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* instantiate the imported component */}
        <item name="itemApi"/>

        
      </header>
    </div>
  );
}

export default App;
