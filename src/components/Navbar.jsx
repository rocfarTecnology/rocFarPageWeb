import { Link } from 'react-router-dom';


export default function Navbar(){
    return<>
        <div className="container-fluid">
            <div className="row">
                {/* Title */}
                <div className="col-12 container-title d-flex text-white bg-p justify-content-center justify-content-md-start">
                         <h1 className="title mt-4">rocFar</h1> 
                </div>
                <div className="col-12 d-flex justify-content-start justify-content-sm-end bg-p ">
                    {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
        <Link to="/sobrenosotros" className="nav-link active text-white" aria-current="page">Sobre Nosotros</Link>
        </li>
        <li className="nav-item">
        <Link to="/contacto" className="nav-link text-white">Contacto</Link>
        </li>
   
      
      </ul>
  
    </div>
  </div>
</nav>
                </div>
            </div>
        </div>
    </>
}