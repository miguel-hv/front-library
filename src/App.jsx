import './App.css';
import { BookForm, Books } from './components';


function App() {

  return (
    <div className="App">
      RECRUITERS LIBRARY
      <div className='grid grid-cols-2'>
        <div>
          <BookForm/>
        </div>
        <div>
          <Books/>
        </div>
      </div>
    </div>
  );
}

export default App;
