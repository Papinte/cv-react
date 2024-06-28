import './Home.css'
import {NavLink} from "react-router-dom";



const Home = () => {
    return (

            <body>
                <div>
                    <img src="/images/Home/hero-bg.jpg" className="banner img-fluid" alt="Développeur web devant l'ordinateur" />
                </div>
                <div className="container text-center position-absolute top-50 start-50 translate-middle">
                    <h1 className="display-1">Bonjour, je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <NavLink to="/Blog" className="btn btn-primary">En savoir plus</NavLink>
                </div>
                <div className="about container row mx-auto my-5 rounded p-5 shadow-lg p-3 mb-5 bg-body rounded">
                    <div className="col-md-6">
                        <h3 class="pb-2 mb-4 border-bottom border-primary border-2">À propos</h3>
                        <p>Passioné par l'informatique et les nouvelles technologies, j'ai suivi
                            une formation d'<span className="fw-bold">intégrateur 
                            développeur web</span> au CEF. Au cours de cette formation, 
                            j'ai pu acquérir des bases solides pour travailler dans 
                            le domaine du <span className="fw-bold">Développement web.</span>
                        </p>
                        <p>
                            Basé à Lyon je suis en recherche d'une alternance au sein d'une agence
                            digitale pour consolider ma formation 
                            de <span className="fw-bold">développeur web full stack.</span>
                        </p>
                        <p>
                            J'accorde une attention particulière à la qualité du code que j'écris et 
                            je respecte les bonnes pratiques du Web.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="/images/Home/john-doe-about.jpg" alt="" />
                        <h3>Mes compétences</h3>
                        <p>HTML5 90%</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                        </div>
                        <p>CSS3 80%</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-info" style={{ width: '80%' }}></div>
                        </div>
                        <p>JAVASCRIPT 70%</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-warning" style={{ width: '70%' }}></div>
                        </div>
                        <p>PHP 60%</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-success" style={{ width: '60%' }}></div>
                        </div>
                        <p>REACT 50%</p>
                        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar" style={{ width: '50%' }}></div>
                        </div>
                    </div>
                </div>
            </body>
    )
}

export default Home;