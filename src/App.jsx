import './App.css';
import { GallerySection, InfoSection } from './components';

function App() {

  return (
    <div className="App">
      RECRUITERS LIBRARY
      <div className="grid-cols-2 grid gap-x-10">
          <InfoSection/> 
          <GallerySection/>
      </div>
    </div>
  );
}

export default App;
