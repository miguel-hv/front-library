import './App.css';
import { GallerySection, InfoSection } from './components';

function App() {

  return (
    <div className="bg-gray-100">
      <div className="grid-cols-2 grid gap-x-1">
          <InfoSection/> 
          <GallerySection/>
      </div>
    </div>
  );
}

export default App;
