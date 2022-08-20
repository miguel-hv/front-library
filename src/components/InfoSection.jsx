import { useState } from 'react';
import About from "./About";
import Contact from './Contact';
import Tabs from './Tabs';

const InfoSection = (props) => {

    const [tab, setTab] = useState('form');
    let TabContent;

    switch (tab) {
        case 'form':
            TabContent = props.children;
            break;
        case 'about':
            TabContent = <About/>;
            break;
        case 'contact':
            TabContent = <Contact/>;
            break;            

        default: 
            TabContent = props.children;
            break;
    }

    const onChangeTab = (selectedTab) => {
        setTab(selectedTab);
    } 

    return (
        <div className="bg-gray-100 rounded-lg m-8 overflow-y-scroll flex flex-col">
            
                    <Tabs onChangeTab={onChangeTab} tab={tab}/>
                    <div className='flex-1 mx-4 my-6 flex flex-col justify-center'>
                        { TabContent }
                    </div>
                    
        </div>
    );
}    
 
export default InfoSection;