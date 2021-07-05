import React, {useState} from 'react';
import './Projects.css';

function Projects()
{
    const [rsa, setRSAOnClick] = useState(true);
    const clickRSA = () => setRSAOnClick(!rsa);

    const [warehouse, setWarehouseOnClick] = useState(false);
    const clickWarehouse = () => setWarehouseOnClick(!warehouse);


        return (
            <>
                <div className='projects-positioner'>
                    <div className='projects-wrapper'>
                    <nav className='projects-navbar'>
                        <ul className='projects-navbar-list'>
                            <li className='project-navbar-item-container'>
                                <button onClick={clickRSA} className='project-navbar-item'>
                                    RSA
                                </button>
                            </li>
                            <li className='project-navbar-item-container'>
                                <button onClick={clickWarehouse} className='project-navbar-item'>
                                    Warehouse
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className='sliding-containers-wrapper'>
                        <div className={rsa ? 'projects-sliding-container-RSA active' : 'projects-sliding-container-RSA'}>
                            <div className='RSA'>
                                Blah, blah
                            </div>
                        </div>
                        <div className={warehouse ? 'projects-sliding-container-Warehouse active' : 'projects-sliding-container-Warehouse'}>
                            I'm warehouse
                        </div>
                    </div>
                </div> 
                </div>
            </>
        );
}

export default Projects;