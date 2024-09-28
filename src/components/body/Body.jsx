import { useState } from 'react';
import { Carrusel } from './Carrusel';

const Body = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carrusel />
      <h2>Body</h2>
    </div>
  );
};

export default Body;
