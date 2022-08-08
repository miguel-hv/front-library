import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About";
import BookForm from "./BookForm"
import Contact from './Contact';
import Tabs from './Tabs';

const FORM = 'form';
const ABOUT = 'about';
const CONTACT = 'contact';

const InfoSection = () => {

    const [tab, setTab] = useState(FORM);
    let TabContent;

    switch (tab) {
        case FORM:
            TabContent = <BookForm/>;
            break;
        case ABOUT:
            TabContent = <About/>;
            break;
        case CONTACT:
            TabContent = <Contact/>;
            break;            

        default: 
            TabContent = <BookForm/>;
            break;
    }

    const onChangeTab = (selectedTab) => {
        setTab(selectedTab);
        console.log("pestaña elegida");
        console.log(selectedTab);
    } 

    return (
        <div className="p-4 bg-green-600 m-8 max-h-screen overflow-y-scroll flex flex-col justify-center">
            
                    <Tabs onChangeTab={onChangeTab}/>
                    { TabContent }
                    
        </div>
    );
}    
 
export default InfoSection;