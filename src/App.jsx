import { useEffect, useState } from 'react';
import { BooksService } from './api/BooksService';
import './App.css';
import { BookForm, GallerySection, Books, InfoSection, Tabs, About, Contact } from './components';
import bgImage from "./assets/patronmndl.png";


function App() {

  const [ booksList, setBooksList ] = useState([]);
  const [tab, setTab] = useState('form');

  const promesaPost = (values)=> {
    // BooksService.postBook(values);
    // let lastBook = booksList.at(-1);
    // values._id = lastBook._id+1;
    // setBooksList([values, ...booksList]);
    // if (window.innerWidth < 640){
    //   setTab('none');
    // } else {
    //   setTab('about');
    // }
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
    case 'none':
      TabContent = null;
      break;          

    default: 
        TabContent = <BookForm returnPromesa={promesaPost}/>;
        break;
  }

  const onChangeTab = (selectedTab) => {
    // setTab(selectedTab);
  } 

  // useEffect(() => {
  //   BooksService.getBooks()
  //   .then( res => {
  //     setBooksList(res.data);
  //   })
  //   .catch( err => {
  //       console.log(err);
  //       setBooksList();
  //   });
  // }, []);

  const scrollTo = (ref) => {
    // if (ref) {
    //   ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    // }
  }
  
  return (
    <div className="flex sm:max-h-screen sm:min-h-screen justify-center" style={{backgroundImage: `url(${bgImage})`}}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 lg:max-w-screen-lg">
          <InfoSection>
            {/* <Tabs onChangeTab={onChangeTab} tab={tab}/>
            {TabContent} */}
          </InfoSection> 

          <GallerySection refProp={scrollTo}>
            {/* { booksList ? <Books booksList={booksList}/> : 
            <p>Lo sentimos, no hemos encontrado ningún libro</p>}            */}
          </GallerySection> 
      </div>
    </div>
  );
}

export default App;
