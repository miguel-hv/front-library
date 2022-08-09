import { useState } from 'react';
import About from "./About";
import BookForm from "./BookForm"
import Contact from './Contact';
import Tabs from './Tabs';

const InfoSection = () => {

    const [tab, setTab] = useState('form');
    let TabContent;

    switch (tab) {
        case 'form':
            TabContent = <BookForm/>;
            break;
        case 'about':
            TabContent = <About/>;
            break;
        case 'contact':
            TabContent = <Contact/>;
            break;            

        default: 
            TabContent = <BookForm/>;
            break;
    }

    const onChangeTab = (selectedTab) => {
        setTab(selectedTab);
    } 
    console.log(tab);

    return (
        <div className="p-4 bg-green-600 m-8 max-h-screen overflow-y-scroll flex flex-col justify-center relative">
            
                    <Tabs onChangeTab={onChangeTab} tab={tab}/>
                    { TabContent }
                    
        </div>
    );
}    
 
export default InfoSection;