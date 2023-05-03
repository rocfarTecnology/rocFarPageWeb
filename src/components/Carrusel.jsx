import imgCarrusel1 from "../assets/imgCarru1.jpg";
import imgCarrusel2 from "../assets/imgCarru2.jpg";
import imgCarrusel3 from "../assets/imgCarru3.jpg";

export default function Carrusel (){
    return<>
        <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imgCarrusel1} className="d-block w-100 himg" alt="Soluciones Digitales"/>
      <div className="carousel-caption mb-10">
        
        <h3>A nosotros tambien nos intereza </h3>
        <h4 className="">que mas personas conozcan lo que haces</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imgCarrusel2} className="d-block w-100 himg" alt="..."/>
      <div className="carousel-caption ">
        <h3>Los servicios Necesarios para que tengas tu mejor sitio Web</h3>
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={imgCarrusel3} className="d-block w-100 himg" alt="..."/>
      <div className="carousel-caption ">
        <h2 className="text-white">Soluciones integrales y adaptables a tu necesidad</h2>
        <p>Dejanos sumarnos a tu crecimiento</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
}
