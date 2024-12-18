import { faChevronCircleRight, faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
  const sliderRef = useRef(null); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <header>
      <Slider ref={sliderRef} {...settings}>
        <div className="banner-slide">
          <div className="inner-content">
            <div className="left-side">
              <h2>Realce sua beleza com os melhores produtos! 🌟 Cuide-se como você merece.</h2>
            </div>
            <div className="right-side">
              <img 
                src="/images/Banner.png" 
                alt="Ofertas de produtos" 
                className="responsive-img" 
              />
            </div>
          </div>
        </div>

        <div className="banner-slide">
          <div className="inner-content">
            <div className="left-side">
              <h2>Os Melhores Produtos para Realçar sua Beleza ✨ Qualidade e confiança para cada detalhe do seu cuidado!</h2>
            </div>
            <div className="right-side">
              <img 
                src="/images/Banner2.png" 
                alt="Frete Grátis" 
                className="responsive-img" 
              />
            </div>
          </div>
        </div>

        <div className="banner-slide">
          <div className="inner-content">
            <div className="left-side">
              <h2>Descubra os Melhores Produtos de Beleza para Você 🌸 Cuide-se, brilhe e sinta-se incrível todos os dias!</h2>
            </div>
            <div className="right-side">
              <img 
                src="/images/Banner3.png" 
                alt="Equipamentos para negócios" 
                className="responsive-img" 
              />
            </div>
          </div>
        </div>
      </Slider>

      <div className="slider-arrows">
        <button 
          className="arrow left-arrow" 
          onClick={() => sliderRef.current.slickPrev()}
          aria-label="Slide anterior">
          <FontAwesomeIcon icon={faChevronCircleLeft} />
        </button>
        <button 
          className="arrow right-arrow" 
          onClick={() => sliderRef.current.slickNext()}
          aria-label="Próximo slide">
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </button>
      </div>
    </header>
  );
}
