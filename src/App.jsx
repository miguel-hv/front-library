import './App.css';
import { BookForm, Books } from './components';


function App() {

  return (
    <div className="App">
      RECRUITERS LIBRARY
      <div className="grid-cols-2 grid gap-x-10">
          <BookForm/>
          <Books/>
      </div>
    </div>
  );
}

export default App;
