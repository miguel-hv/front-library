import { useEffect, useState } from 'react';
import { BooksService } from './api/BooksService';
import './App.css';
import { BookForm, GallerySection, Books, InfoSection, Tabs, About, Contact } from './components';

function App() {

  const [ booksList, setBooksList ] = useState([]);
  const [tab, setTab] = useState('form');

  const promesaPost = (values)=> {
    BooksService.postBook(values);
    let lastBook = booksList.at(-1);
    values._id = lastBook._id+1;
    setBooksList([values, ...booksList]);
    setTab('about');
  }

  let TabContent;
  switch (tab) {
    case 'form':
        TabContent = <BookForm returnPromesa={promesaPost}/>;
        break;
    case 'about':
        TabContent = <About/>;
        break;
    case 'contact':
        TabContent = <Contact/>;
        break;            

    default: 
        TabContent = <BookForm returnPromesa={promesaPost}/>;
        break;
  }

  const onChangeTab = (selectedTab) => {
    setTab(selectedTab);
  } 

  useEffect(() => {
    BooksService.getBooks()
    .then( res => {
      setBooksList(res.data);
    })
    .catch( err => {
        console.log(err);
        setBooksList([]);
    });
  }, []);
  
  return (
    <div className="bg-gray-400 flex sm:max-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1">
          <InfoSection>
            <Tabs onChangeTab={onChangeTab} tab={tab}/>
            {TabContent}
          </InfoSection> 

          <GallerySection >
            { booksList.length > 0 ? <Books booksList={booksList}/> : <div>Nada</div>}
           
          </GallerySection> 
      </div>
    </div>
  );
}

export default App;
