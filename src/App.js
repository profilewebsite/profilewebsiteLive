import React, {useState} from 'react';
import { Link } from 'react-scroll';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';

import someguys from './assets/someguys.jpg';
import pouringCoffee from './assets/pour7.jpg'; /* 4 */
import diagram from './assets/Diagram.svg';
import public_key from './assets/Public_Key.svg';
import OAEPdiagram from './assets/OAEPdiagram.jpg';
import encodeBlock from './assets/encodeBlock.jpg';
import maskString from './assets/maskString.jpg';
import reactExample from './assets/reactExample.jpg';
import warehouseDiagram from './assets/warehouseDiagram.svg';
import study from './assets/study.jpg';
import resume from './assets/Resume.jpg';

import './App.css';

function Page1() 
{
    return (
        <>
        <div className='RSA-project-container'>
            <div className='Intro-project-panel'>
                <h1 className='Project-Page-Header'>
                    RSA Can Be Cracked In Miliseconds
                </h1>
                <p className='Project-Page-Body'>
                    RSA is the most common public-key encryption scheme,
                    yet a fundamental vulnerability leaves the data it is
                    used to encrypt exposed. Data encrypted solely
                    using RSA takes miliseconds to decrypt. My program
                    increases that decryption time by decades, dramatically
                    increasing security.
                </p>
                <p className='Project-Page-Body'>
                    In this project, I have used C++ to implement a padding scheme
                    that closes a key weakness within RSA. In support of that
                    padding scheme, the RSA encryption scheme and MD5
                    hashing algorithm have also been implemented using C++.
                </p>
            </div>
            <div className='RSA-Diagram-Panel'>
                <h1 className='Project-Page-Header'>
                    The RSA Public-Key Encryption Scheme
                </h1>
                <p className='Project-Page-Body'>
                    Public-key encryption, also known as asymmetric encryption,
                    is a relatively new breakthrough in cryptology. As opposed
                    to symmetric encryption, public-key encryption uses a public
                    key for encryption and a private key for decryption. A public
                    key is tied to an individual and published publicly, and a private
                    key is a secret key similarly tied to an individual. As an example,
                    if Alice intended to encrypt a message for Bob, Alice would encrypt
                    the message using Bob’s public key. Bob would then use his private key
                    to decrypt Alice’s message.
                </p>
                <div className='Diagram-holder'>
                    <img className='Diagram' src={public_key} />
                </div>
            </div> 
        </div>
        </>
    );
}
function Page2() 
{
    return (
        <>
        <div className='RSA-project-container'>
            <div className='Diagram-Panel'>
                <h1 className='Project-Page-Header'>
                    How RSA is Vulnerable
                </h1>
                <div className='Diagram-holder'>
                    <img className='Diagram' src={diagram} />
                </div>
                <p className='Project-Page-Body'>
                    1. Unencrypted data. For this demonstration, we'll
                    be encrypting the letter "X." There are 26 possible
                    letters we could have encrypted.
                </p>
                <p className='Project-Page-Body'>
                    2. Chosen public-key encryption method. In this case,
                    RSA. We will use a 664-bit long modulus. That means a
                    direct attack would need to factor two primes of a size
                    on the order of 2^332.
                </p>
                <p className='Project-Page-Body'>
                    3. Encrypted data. Every possible combination of unencrypted
                    data corresponds to only one combination of encrypted data.
                    We are using a 664-bit RSA modulus which produces a 664-bit
                    ciphertext result. This means there are 2^664 possible
                    ciphertext results.
                </p>
                <p className='Project-Page-Body'>
                    4. There is a clear mismatch between the number of possiblities
                    of the unencrypted and encrypted data. A public-key encryption
                    scheme makes the method of encryption public. If an adversary
                    feeds all 26 possible letters into the encryption method, they
                    are guaranteed to find a match with the targeted encrypted data.
                    In short, rather than dealing with numbers on the order of 2^332,
                    an adversary only needs to guess 26 times. 
                </p>
            </div>
        </div>
        </>
    );
}

function Page3()
{
    return (
        <>
        <div className='RSA-project-container'>
            <div className='Intro-project-panel'>
                <h1 className='Project-Page-Header'>
                    The Solution: Equally Complex Key and Plaintext
                </h1>
                <p className='Project-Page-Body'>
                    RSA is vulnerable because of the mismatch between
                    the complexity of the key and what you intend to
                    encrypt. The challenge is to make what you encrypt
                    complex while retaining the original data. In other
                    words, the letter "X"must gain complexity on the order
                    of 2^332 while still unravelling back to "X."
                </p>
                <p className='Project-Page-Body'>
                    The optimal asymmetric encryption padding (OAEP)
                    scheme was selected for the task. It was chosen as
                    its design harmonized well with a hashing algorithm
                    I had previously implemented. 
                </p>
            </div>
            <div className='RSA-Diagram-Panel'>
                <h1 className='Project-Page-Header'>
                    The Structure Of OAEP
                </h1>
                <p className='Project-Page-Body'>
                   As the diagram lays out, OAEP generates complexity through the combination of a random seed and the
                   original data. "MGF" stands
                    for a "mask generation function," which concatenates the hash result of
                    a series of data values together and truncates the result to a set length. 
                    "DB" stands for the "data block," which is a precisely packaged version
                    of the plaintext. The DB and random seed are masked together using the
                    MGF to form the "EM," which stands for the "encrypted message." OAEP is
                    only meant to raise the complexity of what you intend to encrypt, so it
                    should be noted that RSA encryption has not yet taken place.
                </p>
                <div className='Diagram-holder-jpg'>
                    <img className='Diagram' src={OAEPdiagram}/>
                </div>
                
            </div>
        </div>
        </>
    );
}
function Page4()
{
    return (
        <>
            <div className='RSA-project-container'>
                <div className='Intro-project-panel'>
                    <h1 className='Project-Page-Header'>
                        Putting It All Together
                    </h1>
                    <p className='Project-Page-Body'>
                    Special attention was paid to the abstraction and modularity design principles
                    throughout the implementation. Doing so dramatically simplified the process and
                    allowed the sucessful combination of many discretely coded components into a
                    unified system.
                    </p>
                    <p className='Project-Page-Body'>
                    The logic behind OAEP can be written plainly as a list, so abstraction
                    allowed the code to mirror the specifications. Modularity allowed for code written for
                    the hashing algorithm to be reused to implement the mask generation function. The ambition
                    and complexity of the project ensured that its successful implementation relied heavily on a
                    proper design. The two design principles worked together to produce a smooth, easily understood
                    and repurposed implementation of RSA, OAEP, and MD5. 
                    </p>
                </div>
                <div className='RSA-Diagram-Panel'>
                    <h1 className='Project-Page-Header'>
                        Abstraction At Work
                    </h1>
                    <p className='Project-Page-Body'>
                    Abstraction was used within the function “encodeBlock” to reduce complex functionality down to clean,
                    easy-to-read code. Each function within encodeBlock is deeply complex, but that complexity was again
                    abstracted within separate functions. 
                    </p>
                    <div className='Diagram-holder-jpg'>
                        <img src={encodeBlock}/>
                    </div>
                    <p className='Project-Page-Body'>
                    Witin maskString, all inputs needed to be
                    converted to binary, combined using XOR, and then converted back to a hex string. Abstraction
                    allows maskString to focus solely on the logic of the combination itself, while the conversions are
                    abstracted into separate functions. 
                    </p>
                    <div className='Diagram-holder-jpg'>
                        <img src={maskString}/>
                    </div>
                </div>
            </div>
        </>
    );
}

function App()
{
    const [visiblePage, setVisiblePage] = useState(0);

    const [visibleProject, setVisibleProject] = useState(0);

    const projects = [Project1, Project2, Project3, Project4];

    const project1Pages = [Page1, Page2, Page3, Page4, null];

    const [inProp, setInProp] = useState(false);

    function triggerInProp(clickedProject)
    {
        if (visibleProject === clickedProject)
        {
            setInProp(true);
        }
        else
        {
            setInProp(false);
        }
    }

    function RenderPage()
    {
        return project1Pages[visiblePage]();
    }

    function RenderProject()
    {
        triggerInProp(visibleProject);
        return projects[visibleProject]();
    }

    function Project1()
    {
        return (
            <>
            <div className='project' >
                <RSANavigation />
                <RenderPage />
            </div>
            </>
        );
    }

    function Project2()
    {
        return (
            <>
            <div className='project'>
                <div className='project-container'>
                    <div className='Intro-project-panel'>
                        <h1 className='Project-Page-Header'>
                            Choosing A Hobby Project
                        </h1>
                        <p className='Project-Page-Body'>
                            Building this website started as I was looking for my next
                            hobby project. I chose to create the profile website as it
                            gave me the opportunity to both expand my skillset and
                            produce something practical. My intention is for this website
                            to aid in my job-search and, eventually, act as a chronical
                            of my career.
                        </p>
                    </div>
                    <div className='Diagram-Panel'>
                        <h1 className='Project-Page-Header'>
                            React.js
                        </h1>
                        <p className='Project-Page-Body'>
                            Once I'd chosen to build a website for my next project,
                            I needed to choose a language and environment to build it
                            in. I chose React as it aims to focus heavily on
                            abstraction and OOP principles in general. I also liked
                            that React offers an extensive roster of tools to better
                            handle common use cases. React required me to learn javascript,
                            CSS, HTML, and React-specific tools all at once, but the functionality
                            it offered made the task worth it. 
                        </p>
                        <p className='Project-Page-Body'>
                            React is powerful, and it greatly simplified complex
                            functionality. As a brief example, the pages within the
                            RSA-OAEP project description are rendered conditionally.
                            Clicking a button in the left-hand menu switches the value
                            of "visiblePage." React then handles displaying the new
                            page.
                        </p>
                        <div className='Diagram-holder-jpg'>
                            <img className='Diagram' src={reactExample}/>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }

    function Project3()
    {
        return (
            <div className='project'>
                <div className='project-container'>
                    <div className='Intro-project-panel'>
                        <h1 className='Project-Page-Header'>
                            A Warehouse: Solid Design And Practical Results
                        </h1>
                        <p className='Project-Page-Body'>
                            The task with this projoct was to explore the best
                            approach to mimicing the physical world with software.
                            That task led to examining a multitude of new concepts.
                            A decision had to be made as to which physical objects
                            deserve digital object counterparts. Once objects, and
                            their classes, had been decided on, it became necessary
                            to properly replicate their relationships in the physical
                            world with code. For example, if both product and supplier
                            objects exist, can one product have multiple suppliers?
                            More interestingly, which class should store and manage
                            a list of all suppliers for a single product? The answer
                            to the latter question was found through a careful
                            management of the hierarchy of the project. 
                        </p>
                    </div>
                    <div className='Diagram-Panel'>
                        <h1 className='Project-Page-Header'>
                            Warehouse Design: Brief Example
                        </h1>
                        <p className='Project-Page-Body'>
                            That kind of careful management means that a font-end
                            was designated as a system designed as the singular
                            point of interaction for the user. The front-end then
                            sent user input to a central warehouse management system.
                            that central system managed concerns such as storing all
                            products and suppliers and, crucially, the relationships
                            between back-end entities. Finally, a back-end was
                            conceptuallized as an abstract way to refer to the systems,
                            such as individual lists of product-supplier relationships
                            or users' shopping-carts, that the warehouse system managed. 
                        </p>
                        <div className='Diagram-holder-jpg'>
                            <img className='Diagram' src={warehouseDiagram}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    function Project4()
    {
        return (
            <div className='project'>
                <div className='project-container'>
                    <div className='Intro-project-panel'>
                        <h1 className='Project-Page-Header'>
                            Login, Password Storage, And How to Attack It
                        </h1>
                        <p className='Project-Page-Body'>
                            This project examined a common method to handle
                            password storage, and how it is vulnerable.
                            Rather than storing passwords as plaintext,
                            meaning in their original form, passwords are
                            usually stored as hashes of the original password.
                            Storing hashes, rather than the original passwords,
                            is done as it is a reversible way to hide sensitive
                            information. Each password will only correspond
                            to a single hash, but to guess a password when only
                            given the hash is difficult. 
                        </p>
                        <p className='Project-Page-Body'>
                            A problem with using
                            hashes to store passwords is that anyone can produce
                            the corresponding hash for a password guess. That means
                            that, if someone possessed your stored hashes, they could
                            continue to guess possible passwords until their guess matched
                            one or multiple hashes you had stored. The attacker would then
                            have gained a matching username-password pair. 
                        </p>
                    </div>
                    <div className='Intro-project-panel'>
                        <h1 className='Project-Page-Header'>
                            A Common Defense Method, And How To Attack It
                        </h1>
                        <p className='Project-Page-Body'>
                            A common method to prevent this kind of attack is to randomize
                            the hashes using a "salt value." the salt value is random data
                            that is added to the password before its hash is produced. The
                            salt value is then stored along with the username and hashed
                            password. The attacker would then have to guess every possible
                            salt value for a single guess password. 
                        </p>
                        <p className='Project-Page-Body'>
                            Attacking a salted password hash is possible, and it was the
                            focus of this project. The method used was to generate a massive
                            table containing many password guesses and all their possible
                            salt values. That table can then be queried with the stolen
                            username and hashed password. If a matching hash is returned,
                            the matching hash's corresponding password will be the user's.
                            Finding a match is termed a successful rainbow-table attack.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    function RSANavigation()
    {
        return (
            <div className='RSANavigation-container'>
                <ul className='RSANavigation-list'>
                    <li className='RSANavigation-list-item'>
                        <button className={visiblePage === 0 ? 'RSANavigation-list-item-button-active' : 'RSANavigation-list-item-button'} onClick={() => setVisiblePage(0)}>
                            Overview
                        </button>
                    </li>
                    <li className='RSANavigation-list-item'>
                        <button className={visiblePage === 1 ? 'RSANavigation-list-item-button-active' : 'RSANavigation-list-item-button'} onClick={() => setVisiblePage(1)}>
                            Vulnerability
                        </button>
                    </li>
                    <li className='RSANavigation-list-item'>
                        <button className={visiblePage === 2 ? 'RSANavigation-list-item-button-active' : 'RSANavigation-list-item-button'} onClick={() => setVisiblePage(2)}>
                            Solution
                        </button>
                    </li>
                    <li className='RSANavigation-list-item'>
                        <button className={visiblePage === 3 ? 'RSANavigation-list-item-button-active' : 'RSANavigation-list-item-button'} onClick={() => setVisiblePage(3)}>
                            Code
                        </button>
                    </li>
                </ul>
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className='header-background'>
                <h1 className='header-content-lineOne'>
                    Hello world.
                </h1>
                <h2 className='header-content-lineTwo'>
                    I'm
                </h2>
                <h3 className='header-content-lineThree'>
                    Andrew Hoeschen
                </h3>
            </div>

            <div className='wrapper'>
                    <div id='/andrew' className='body-wrapper'>
                        <div className='face-container'>
                            <img className='face-image' src = {someguys} alt="" />
                        </div>
                        <div className='bio-container'>
                            <h1 className='bio-header'>
                                About Me
                            </h1>
                            <p className='bio-body'>
                                I'm a Minneapolis-based software developer and recent CS graduate
                                with a love of lean code and smart designs. Recent projects 
                                cover cryptography and unified systems designed to tackle
                                both UI and backend management.
                            </p>
                        </div>
                    </div>
                
                    <div className='projects-banner-wrapper'>
                        <div className='projects-banner-content-wrapper'>
                            <h1 className='projects-banner-content'>
                                Add
                            </h1>
                            <h1 className='projects-banner-content'>
                                some coffee
                            </h1>
                            <h1 className='projects-banner-content'>
                                and you get....
                            </h1>
                        </div>
                        <img src = {pouringCoffee} alt= 'pouring coffee' className='projects-banner-background' />
                    </div>

                    <div id='/projects' className='projects-page-menu-container'>
                        <div className='projects-page-header-container'>
                            <h1 className='projects-page-header'>
                               My Projects
                            </h1>
                        </div>
                        <div className='projects-page-button-container'>
                            <ul className='projects-page-button-list'>
                                <li className='projects-page-button-list-item'>
                                   <div className='project-panel-container'>
                                        <button className='projects-page-button' >
                                            <Link 
                                                to='project' 
                                                offset={-100} 
                                                smooth={true} 
                                                duration={1000} 
                                                onClick = { () => {triggerInProp(0); setVisibleProject(0);} }   
                                            >
                                            <div className='project-panel-image-container1' />
                                            <div className='project-panel-text-container'>
                                                <h1 className='project-panel-header'>
                                                    RSA-OAEP
                                                </h1>
                                                <p className='project-panel-text'>
                                                    An encryption scheme, a complex padding scheme
                                                    meant to patch a vulnerability, and a hashing algorithm.
                                                </p>  
                                            </div>
                                            </Link>
                                        </button>
                                   </div>
                                </li>
                                <li className='projects-page-button-list-item'>
                                    <div className='project-panel-container'>
                                        <button  className='projects-page-button' >
                                            <Link 
                                                to='project'
                                                offset={-100} 
                                                smooth={true} 
                                                duration={1000} 
                                                onClick = { () => {triggerInProp(1); setVisibleProject(1);} }
                                            >
                                            <div className='project-panel-image-container2' />
                                            <div className='project-panel-text-container'>
                                                <h1 className='project-panel-header'>
                                                    Profile Website
                                                </h1>
                                                <p className='project-panel-text'>
                                                   Designed and built as I learned
                                                   React.js. A hobby-project meant to highlight
                                                   my skills and recent projects
                                                </p>
                                            </div>
                                            </Link>
                                        </button>
                                    </div>
                                </li>
                                <li className='projects-page-button-list-item'>
                                    <div className='project-panel-container'>
                                        <button  className='projects-page-button' >
                                            <Link 
                                                to='project'
                                                offset={-100} 
                                                smooth={true} 
                                                duration={1000} 
                                                onClick = { () => {triggerInProp(2); setVisibleProject(2);} }
                                            >
                                            <div className='project-panel-image-container3' />
                                                <div className='project-panel-text-container'>
                                                <h1 className='project-panel-header'>
                                                    Object-Oriented Warehouse
                                                </h1> 
                                                <p className='project-panel-text'>
                                                   A warehouse management system built using Java.
                                                   Design focuses on design principles and back/front-end
                                                </p>  
                                            </div>
                                            </Link>
                                        </button>
                                    </div>
                                </li>
                                <li className='projects-page-button-list-item'>
                                    <div className='project-panel-container'>
                                        <button  className='projects-page-button' >
                                            <Link 
                                                to='project'
                                                offset={-100} 
                                                smooth={true} 
                                                duration={1000} 
                                                onClick = { () => {triggerInProp(3); setVisibleProject(3);} }
                                            >
                                            <div className='project-panel-image-container4' />
                                            <div className='project-panel-text-container'>
                                                <h1 className='project-panel-header'>
                                                    MD5 Rainbow Attack
                                                </h1> 
                                                <p className='project-panel-text'>
                                                   A system mimicing a username and password storage scheme, and
                                                   a too designed to attack it.
                                                </p>   
                                            </div>
                                            </Link>
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    
                    <CSSTransition
                        in={inProp}
                        timeout={3000}
                        classNames='project-transitions'
                    >
                        <div className='projects-page-project-wrapper'>
                            <RenderProject />
                        </div>
                    </CSSTransition>
                
                <div className='resume-header-wrapper'>
                    <div className='projects-banner-content-wrapper'>
                        <h1 className='projects-banner-content'>
                            Add Some Books
                        </h1>
                        <h1 className='projects-banner-content'>
                            To The Coffee
                        </h1>
                        <h1 className='projects-banner-content'>
                            And You Get...
                        </h1>
                        <h1 className='projects-banner-content'>
                            A Candidate
                        </h1>
                    </div>
                    <img src = {study} alt= 'pouring coffee' className='projects-banner-background' />
                </div>




                <div id='/resume' className='resume-page'>
                    <div className='resume-container'>
                        <div className='resume-header-container'>
                            <h1 className='resume-header'>
                                My Resume
                            </h1>
                        </div>
                        <div className='resume-image-container'>
                            <img className='resume-image' src={resume} alt="my resume" />
                        </div>
                    </div>
                </div>

            </div>
        </>
            /*
            <Router>
                <div className = 'background'>
                        <Switch>
                            <Route exact path to = "/" component={Home} />
                            <Route path = "/projects" component={Projects} />
                            <Route path = "/resume" component={Resume} />
                        </Switch>
                </div>
            </Router>
            */
    );
}

export default App