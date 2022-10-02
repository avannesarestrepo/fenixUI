import React from 'react';
import TopBar from '../components/TopBar';


const Layout = (props) => {
    return(
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                {props.children}
            </div>
        </div>
    );
}

export default Layout;