import './App.css';
import { GallerySection, InfoSection } from './components';

function App() {

  return (
    <div className="bg-gray-100 flex max-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1">
          <InfoSection/> 
          <GallerySection/>
      </div>
    </div>
  );
}

export default App;
