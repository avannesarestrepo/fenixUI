import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faChevronCircleRight, faTachometerAlt, faCog, faUsers, faSitemap, faHandshake, faWrench } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            <div className="sidebar-brand d-flex align-items-center justify-content-center" >
                <div className="sidebar-brand-icon rotate-n-15">
                    <FontAwesomeIcon icon={faDesktop}/>
                </div>
                <div className="sidebar-brand-text mx-3">MsSystem <sup>Fenix</sup></div>
            </div> 

            {/* Menu options Dashboard*/}
            <hr className="sidebar-divider my-0"/>

            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <FontAwesomeIcon icon={faTachometerAlt} className="fas fa-fw i"/>
                    <span>Dashboard</span>
                </Link>
            </li>

            {/* Menu options Operation*/}
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Operation
            </div>
           
            <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseProject" aria-expanded="true" aria-controls="collapseProject">
                    <FontAwesomeIcon icon={faCog} className="fas fa-fw i"/>
                    <span>Projects</span>
                </Link>

                <div id="collapseProject" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">management</h6>
                        <Link to="/project" className="collapse-item">
                            <span>Projects</span>
                        </Link>
                        <Link to="/userhistory" className="collapse-item">
                            <span>User History</span>
                        </Link>
                    </div>
                </div>
            </li>

            {/* Menu options Assignments */}
            <li className="nav-item">
                <Link to="/assignments" className="nav-link">
                    <FontAwesomeIcon icon={faSitemap} className="fas fa-fw i" />
                    <span>Assignments</span>
                </Link>
            </li>

            {/* Menu options Meetings */}
            <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseMeetings" aria-expanded="true" aria-controls="collapseMeetings">
                    <FontAwesomeIcon icon={faHandshake} className="fas fda-fw i" />
                    <span>Meetings</span>
                </Link>

                <div id="collapseMeetings" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custum Meetings</h6>
                        <Link to="/daily" className="collapse-item">
                            <span>Daily</span>
                        </Link>
                        <Link to="/planning" className="collapse-item">
                            <span>Planning</span>
                        </Link>
                        <Link to="/review" className="collapse-item">
                            <span>Review</span>
                        </Link>
                        <Link to="/retrospective" className="collapse-item">
                            <span>Retrospective</span>
                        </Link>
                    </div>
                </div>
            </li>

            {/* Menu options Setting*/}
            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Parameters
            </div>

            <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUsers" aria-expanded="true" aria-controls="collapseUsers">
                    <FontAwesomeIcon icon={faUsers} className="fas fa-fw i"/>
                    <span>Users</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link collapsed" data-toggle="collapse" data-target="#collapseSettings" aria-expanded="true" aria-controls="collapseSettings">
                    <FontAwesomeIcon icon={faWrench} className="fas fa-fw i"/>
                    <span>Settings</span>
                </Link>

                <div id="collapseSettings" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custum Settings</h6>
                        <Link to="/modules" className="collapse-item">
                            <span>Modulos</span>
                        </Link>
                        <Link to="/actions" className="collapse-item">
                            <span>Acciones</span>
                        </Link>
                    </div>
                </div>
            </li>
            
            {/*Menu hidden*/}
            <hr className="sidebar-divider d-none d-md-block"/>

            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle">
                    <FontAwesomeIcon icon={faChevronCircleRight}/>
                </button>
            </div>
        </ul>
    )
}

export default Menu;