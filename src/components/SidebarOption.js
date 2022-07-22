import React from 'react';
import './SidebarOption.css';



function SidebarOption ({active, text, Icon}) {
    return (
        <div>
            <div className={`sidebarOption ${active
            && 'sidebarOption--active'}`}>
                <Icon/>
                <h2 className='sidebarOption__title'>{text}</h2>
            </div>
            
        </div>
    );
}

export default SidebarOption;
