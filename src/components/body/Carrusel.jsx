import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/img/banner/banner1.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Nails Art</h3>
          <p>Los mejores diseños para vos</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/img/banner/banner2.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Uñas Esculpidas</h3>
          <p>Gelificadas del largo que mas te gusten</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/img/banner/banner3.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Capig Gel</h3>
          <p>Capa fina de gel para endurecer mas tu uña natural</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
